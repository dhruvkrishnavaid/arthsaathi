import {
  IconBrandAppleFilled,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";
import { getFullUser, getUser, setUser } from "../utils/user";
import Redirect from "./Redirect";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = getUser();
  if (user) return <Redirect url="/" />;

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
      const fullUser = await getFullUser({ email: email, password: password });
      setUser(fullUser);
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="flex flex-col h-screen p-6">
      <div className="text-2xl w-full font-pacifico">Arthsaathi</div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="text-4xl font-bold">LOGIN</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
            className="w-full outline-0 px-2 py-3 border"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
            className="w-full outline-0 px-2 py-3 border"
          />
          <button
            type="submit"
            className="bg-neutral-900 py-3 transition-colors duration-300 hover:bg-neutral-50 border text-neutral-50 cursor-pointer hover:text-neutral-900 text-center"
          >
            Login
          </button>
          <hr />
          <button
            type="button"
            className="hover:bg-neutral-900 hover:text-neutral-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
          >
            <IconBrandGoogleFilled />
            <div>Login with Google</div>
          </button>
          <button
            type="button"
            className="hover:bg-neutral-900 hover:text-neutral-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
          >
            <IconBrandFacebookFilled />
            <div>Login with Facebook</div>
          </button>
          <button
            type="button"
            className="hover:bg-neutral-900 hover:text-neutral-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
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
