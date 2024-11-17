import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 border-red-300 border min-w-96 shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to={'/login'} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="font-light">Are you new in site? <Link to={"/register"} className="underline text-blue-600">Sign up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;