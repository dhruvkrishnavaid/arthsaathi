import {
  IconBrandAppleFilled,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import OTP from "../components/OTP";
import { useUserStore } from "../utils/user";

const Signup = () => {
  const [signupClicked, setSignupClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const store = useUserStore();
  const user = store.user;
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
      await store.getFullUser({ email: email, password: password });
      navigate(0);
    } else {
      console.log("OTP Verification failed");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-6">
        <div className="w-full text-2xl font-pacifico">Arthsaathi</div>
        <div className="flex flex-col items-center justify-center w-full h-full gap-4">
          <div className="text-4xl font-bold">SIGN UP</div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
          <form
            onSubmit={handleClick}
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
              Sign up
            </button>
            <hr />
            <button
              type="button"
              className="flex items-center justify-center py-3 border cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors duration-300 gap-2"
            >
              <IconBrandGoogleFilled />
              <div>Continue with Google</div>
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-3 border cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors duration-300 gap-2"
            >
              <IconBrandFacebookFilled />
              <div>Continue with Facebook</div>
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-3 border cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors duration-300 gap-2"
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
