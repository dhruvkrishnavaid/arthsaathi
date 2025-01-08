import { IconX } from "@tabler/icons-react";
import { OtpInput } from "reactjs-otp-input";

const OTP = (params: {
  otp: string;
  setOtp: (inputValue: string) => void;
  onCancel: () => void;
  onVerify: () => void;
}) => {
  return (
    <div className="absolute flex h-screen items-center justify-center bg-neutral-300/40 w-screen flex-col gap-10 z-20 backdrop-blur-lg">
      <button
        onClick={params.onCancel}
        className="absolute top-0 left-0 px-6 py-4"
      >
        <IconX className="cursor-pointer" />
      </button>
      <OtpInput
        value={params.otp}
        onChange={(inputValue) => params.setOtp(inputValue)}
        numInputs={6}
        className="flex gap-4 px-2"
        inputStyle={{
          padding: "1rem",
          width: "3rem",
          border: "1px solid var(--color-neutral-900)",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
          backgroundColor: "var(--color-neutral-50)",
          outline: "none",
        }}
        separator={<span>-</span>}
      />
      <button
        onClick={params.onVerify}
        className="bg-neutral-900 py-3 transition-colors duration-300 hover:bg-neutral-50 border border-neutral-900 text-neutral-50 cursor-pointer hover:text-neutral-900 text-center w-min px-6"
      >
        Verify
      </button>
    </div>
  );
};

export default OTP;
