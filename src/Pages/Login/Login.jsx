import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  // const { signIn } = useContext(AuthContext);
  // customHook
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        // const loggedInUser = result?.user;
        // console.log(loggedInUser?.email);
        const user = { email };
        axios
          .post("https://cardoctor-bdserver-sepia.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            // console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          });
        // get access token
      })
      .catch((error) => alert(`You got an error ${error.message}`));
  };
  // console.log("Hello from login page");
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]"
                value="Login"
              />
              <p className="mt-5 font-medium text-center">
                New to Car Doctors{" "}
                <Link to="/signup" className="text-[#FF3811] font-bold ">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
