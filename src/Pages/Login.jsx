import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Login = () => {
    const { EmailPasswordLogin, GoogleLogin } = useAuth()
    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(() => {

            })
            .catch((error) => console.log(error.message))
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const Formdata = e.target
        const Email = Formdata.email.value
        const Password = Formdata.password.value
        EmailPasswordLogin(Email, Password)
            .then(() => {
                Formdata.reset()
            })
            .catch((error) => console.log(error.message))

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 border-red-300 border min-w-96 shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleLogin}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" />

                        <label className="label">
                            <Link to={'/login'} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="font-light">Are you new in site? <Link to={"/register"} className="underline text-blue-600">Sign up</Link></p>
                </form>
                <div className="flex justify-center items-center py-5">
                    <button className="btn px-10 pb-14 pt-5" onClick={handleGoogleLogin}>
                        <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="" className="w-10" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;