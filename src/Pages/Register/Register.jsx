import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserData, logOut } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserData(data.name, data.photoUrl)
          .then(() => {
            reset();
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'User Created Successfully!',
              showConfirmButton: false,
              timer: 1500
            });
            logOut();
            navigate('/login');
          })
          .catch(error => {
            setError(error.message);
          });
      })
      .catch(error => {
        setError(error.message);
      });
  };


  return (
    <div>
      <div className="hero min-h-screen bg-neutral-900 ">
        <div className="hero-content flex-col  lg:flex-row mt-12">
          <div className="card flex-shrink-0 w-full  max-w-md shadow-2xl mt-8 bg-[#C1DCDC]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Photo Url</span>
                </label>
                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                {errors.photoUrl && <span className="text-red-600">Photo URl is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                })} placeholder="password" className="input input-bordered text-black" />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}


              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Confirm Password</span>
                </label>
                <input type="password"  {...register("confirmPassword", { required: true })} placeholder="Confirm password" className="input input-bordered text-black" />
                {errors.photoUrl && <span className="text-red-600">password is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn border-black  mt-3">SignUp</button>
              </div>
              <div className="">
                <h3>Already Have An Account? Please <Link to="/login"><span className="font-bold">Login</span></Link> </h3>
              </div>
              <p className="text-red-500 font-semibold">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Register;