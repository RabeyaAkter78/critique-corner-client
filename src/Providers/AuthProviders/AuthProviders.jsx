import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { app } from "../../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserData = (name, photoUrl) => {
        console.log(name, photoUrl);

        const updateUser = { ...user }
        updateUser.displayName = name;
        updateUser.photoURL = photoUrl;
        setUser(updateUser);

        const auth = getAuth(app);

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoUrl: photoUrl
        })

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);


            // get and set jwt token:
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token
                        )
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token');
            }

            console.log('current user:', currentUser);
            setLoading(false);
        });
        
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signOut,
        logOut,
        updateUserData
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;