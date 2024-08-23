import { Link } from 'react-router-dom';
import singupImg from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Singup = () => {
    const {createUser} = useContext(AuthContex);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>{
         console.log(data)
         createUser(data.email, data.password)
        
        };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img src={singupImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div>
                            <h1 className="text-5xl font-bold">Sing UP!</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            {errors.email && <span>please enter your name</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <span>plaease enter your password</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sing Up" />
                        </div>
                        <p>Already registered?<Link className='text-red-500' to="/login"> Go to log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singup;