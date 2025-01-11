import { IconX } from "@tabler/icons-react";
import { OtpInput } from "reactjs-otp-input";

const OTP = (params: {
  otp: string;
  setOtp: (inputValue: string) => void;
  onCancel: () => void;
  onVerify: () => void;
}) => {
  return (
    <div className="absolute z-20 flex flex-col items-center justify-center w-screen h-screen bg-neutral-300/40 gap-10 backdrop-blur-lg">
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
        className="flex px-2 gap-4"
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
        className="px-6 py-3 text-center text-white border cursor-pointer bg-neutral-900 transition-colors duration-300 hover:bg-white border-neutral-900 hover:text-neutral-900 w-min"
      >
        Verify
      </button>
    </div>
  );
};

export default OTP;
