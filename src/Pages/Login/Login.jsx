import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";

const Login = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('login page location', location);
  const from = location.state?.from?.pathname || '/';
  // console.log(from);
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const onSubmit = data => {
    console.log(data);
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Login Successfully!',
          showConfirmButton: false,
          timer: 1500
        })

        navigate(from, { replace: true });

      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
        reset();
      })
  };

  return (
    <div className=" hero-content flex-col lg:flex-row">

      <div className="mt-24 bg-[#C1DCDC] card flex-shrink-0 w-full max-w-md shadow-2xl ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Email</span>
            </label>
            <input type="text" {...register("email")} placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Password</span>
            </label>
            <input type="text"  {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
            {errors.password && <span>Password should be six characters</span>}

          </div>
          <p className="text-red-500 font-semibold">{error}</p>

          <div className="form-control mt-6">
            <button className="btn border border-black  mt-3">Login</button>
          </div>
          <div className="">
            <h3>New Here?Please <Link to="/register"><span className="font-bold">SignUp</span></Link> </h3>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;