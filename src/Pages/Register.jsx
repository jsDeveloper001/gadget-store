import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 border-red-300 border min-w-96 shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="Password" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input type="password" placeholder="re-type the password" className="input input-bordered" name="rePassword" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Register</button>
                    </div>
                    <p className="font-light">Already have an account? <Link to={"/login"} className="underline text-blue-600">Sign in</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;