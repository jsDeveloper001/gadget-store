import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Register = () => {
    const { EmailPasswordRegister, LogOut } = useAuth()
    const navigateTo = useNavigate()

    const HandleRegister = (e) => {
        e.preventDefault()
        const Formdata = e.target
        const email = Formdata.email.value
        const Password = Formdata.Password.value
        const rePassword = Formdata.rePassword.value
        if (Password == rePassword) {
            EmailPasswordRegister(email, Password)
                .then(() => {
                    LogOut()
                    navigateTo('/login')
                    alert("Please Login with email & password")
                    return Formdata.reset()
                })
        }
        else {
            alert("password are not same")
            return Formdata.reset()
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 border-red-300 border min-w-96 shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={HandleRegister}>
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