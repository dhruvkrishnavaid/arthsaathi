import {
  IconBrandAppleFilled,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex flex-col h-screen p-6">
      <div className="text-2xl w-full font-pacifico">Arthsaarthi</div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="text-4xl font-bold">LOGIN</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
        <form className="flex w-full max-w-md flex-col gap-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full outline-0 px-2 py-3 border"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full outline-0 px-2 py-3 border"
          />
          <button
            type="submit"
            className="bg-gray-900 py-3 transition-colors duration-300 hover:bg-gray-50 border text-gray-50 cursor-pointer hover:text-gray-900 text-center"
          >
            Login
          </button>
          <hr />
          <button
            type="button"
            className="hover:bg-gray-900 hover:text-gray-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
          >
            <IconBrandGoogleFilled />
            <div>Login with Google</div>
          </button>
          <button
            type="button"
            className="hover:bg-gray-900 hover:text-gray-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
          >
            <IconBrandFacebookFilled />
            <div>Login with Facebook</div>
          </button>
          <button
            type="button"
            className="hover:bg-gray-900 hover:text-gray-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
          >
            <IconBrandAppleFilled />
            <div>Login with Apple</div>
          </button>
          <Link to="/forgot" className="text-center underline">
            Forgot your password?
          </Link>
        </form>
        <div>
          <span>Don't have an account? </span>
          <Link to="/register" className="text-center underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
