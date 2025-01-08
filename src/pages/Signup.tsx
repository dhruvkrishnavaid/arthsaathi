import {
  IconBrandAppleFilled,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";
import OTP from "../components/OTP";
import { getFullUser, getUser, setUser } from "../utils/user";
import Redirect from "./Redirect";

const Signup = () => {
  const [signupClicked, setSignupClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const user = getUser();
  if (user) return <Redirect url="/" />;

  const handleOTPChange = (inputValue: string) => {
    setOtp(inputValue);
  };

  const handleClick = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    setSignupClicked(true);
    const res = await axios({
      method: "POST",
      url: import.meta.env.VITE_BASEURL + "/sendOTP",
      data: { email: email },
    });
    if (res.status === 200) {
      alert("OTP Sent");
    } else {
      alert("OTP Sending failed");
    }
  };
  const onCancel = () => {
    setSignupClicked(false);
  };

  const onVerify = async () => {
    const res = await axios({
      method: "POST",
      url: import.meta.env.VITE_BASEURL + "/signup",
      data: { otp: otp, email: email, password: password },
    });
    if (res.status === 200) {
      console.log("OTP Verified");
      const fullUser = await getFullUser({ email: email, password: password });
      setUser(fullUser);
    } else {
      console.log("OTP Verification failed");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-6">
        <div className="text-2xl w-full font-pacifico">Arthsaathi</div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <div className="text-4xl font-bold">SIGN UP</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
          <form
            onSubmit={handleClick}
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
              Sign up
            </button>
            <hr />
            <button
              type="button"
              className="hover:bg-neutral-900 hover:text-neutral-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
            >
              <IconBrandGoogleFilled />
              <div>Continue with Google</div>
            </button>
            <button
              type="button"
              className="hover:bg-neutral-900 hover:text-neutral-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
            >
              <IconBrandFacebookFilled />
              <div>Continue with Facebook</div>
            </button>
            <button
              type="button"
              className="hover:bg-neutral-900 hover:text-neutral-50 transition-colors duration-300 border py-3 cursor-pointer items-center justify-center flex gap-2"
            >
              <IconBrandAppleFilled />
              <div>Continue with Apple</div>
            </button>
          </form>
          <div>
            <span>Already have an account? </span>
            <Link to="/login" className="text-center underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
      {signupClicked && (
        <OTP
          otp={otp}
          setOtp={handleOTPChange}
          onCancel={onCancel}
          onVerify={onVerify}
        />
      )}
    </div>
  );
};

export default Signup;
