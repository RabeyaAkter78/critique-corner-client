import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";

const MakeReview = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [disabled, setDisabled] = useState(true);
    const [captchaInput, setCaptchaInput] = useState('');

    
    const handleAddReviews = (data) => {
        if (disabled) {
            toast.error('CAPTCHA is incorrect or not entered');
            return;
        }

        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(responseData => {
                if (responseData.insertedId) {
                    toast.success('Added Successfully!');
                    reset();
                    loadCaptchaEnginge(6); 
                    setCaptchaInput('');
                    setDisabled(true); 
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('An Error occurred while adding The Review');
            });
    };

    // Recaptcha validation:
    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    };


    return (
        <div>

            <div className="hero-content flex-col lg:flex-row ">
                <div className="mt-24 bg-[#C1DCDC] card flex-shrink-0 w-full max-w-md shadow-2xl">
                    <form onSubmit={handleSubmit(handleAddReviews)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Your Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="Your Name" className="input input-bordered" defaultValue={user?.displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="text" {...register("email")} placeholder="Email" className="input input-bordered" defaultValue={user?.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo")} placeholder="Photo URL" className="input input-bordered" defaultValue={user?.photoURL || ''} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Provide Rating</span>
                            </label>
                            <input type="text" {...register("ratings")} placeholder="Provide Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Write Review</span>
                            </label>
                            <input type="text" {...register("description")} placeholder="Write review" className="Textarea textarea-accent w-80 h-52" required />
                        </div>
                        {/* captcha */}
                        <div className="form-control required:">
                            <label className="label ">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="Type The Captcha Above" className="input input-bordered rounded-xl font-semibold " />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#C1DCDC]">Submit Review</button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeReview;
