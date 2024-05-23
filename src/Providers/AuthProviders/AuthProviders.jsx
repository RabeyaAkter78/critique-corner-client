import { createUserWithEmailAndPassword, getAuth, signOut, updateProfile } from "firebase/auth";
import { app } from "../../../firebase/firebase.config";
import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

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