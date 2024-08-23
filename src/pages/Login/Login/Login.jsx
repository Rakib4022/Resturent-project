import { useContext, useEffect,  useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const [disabale, setDisabale] = useState(true);
    const { singIn } = useContext(AuthContex);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singIn(email, password);
        navigate(from, { replace: true });

    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            alert('Captcha Matched');
            setDisabale(false)
            user_captcha_value.reset();

        }

        else {
            alert('Captcha Does Not Match');
            setDisabale(true)
            user_captcha_value.reset();
        }
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">

                <div className="hero-content flex-col lg:flex-row md:px-8">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 lg:w-1/2 max-w-sm shrink-0 shadow-2xl">

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <LoadCanvasTemplate />
                            </div>
                            <div className="form-control">
                                <input type="text" onBlur={handleValidateCaptcha}  name="captcha" placeholder="Enter the captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabale} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p>New here? <Link className="text-red-500" to="/singup">Create a New Account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;