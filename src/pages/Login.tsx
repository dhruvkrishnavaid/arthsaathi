import {
  IconBrandAppleFilled,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useUserStore } from "../utils/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const store = useUserStore();
  const user = store.user;
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    const res = await axios({
      method: "POST",
      url: import.meta.env.VITE_BASEURL + "/login",
      data: { email: email, password: password },
    });
    if (res.status === 200) {
      console.log("Logged in");
      await store.getFullUser({ email: email, password: password });
      navigate(0);
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="flex flex-col h-screen p-6">
      <div className="w-full text-2xl font-pacifico">Arthsaathi</div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="text-4xl font-bold">LOGIN</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md gap-4"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
            className="w-full px-2 py-3 border outline-0"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
            className="w-full px-2 py-3 border outline-0"
          />
          <button
            type="submit"
            className="py-3 text-center text-white border cursor-pointer bg-neutral-900 transition-colors duration-300 hover:bg-white hover:text-neutral-900"
          >
            Login
          </button>
          <hr />
          <button
            type="button"
            className="flex items-center justify-center py-3 border cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors duration-300 gap-2"
          >
            <IconBrandGoogleFilled />
            <div>Login with Google</div>
          </button>
          <button
            type="button"
            className="flex items-center justify-center py-3 border cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors duration-300 gap-2"
          >
            <IconBrandFacebookFilled />
            <div>Login with Facebook</div>
          </button>
          <button
            type="button"
            className="flex items-center justify-center py-3 border cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors duration-300 gap-2"
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
