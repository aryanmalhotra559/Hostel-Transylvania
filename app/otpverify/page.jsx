"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Link from 'next/link'

const OtpVerification = ({ email, onOtpVerified }) => {
  const [otp, setOtp] = useState("");

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const isVerified = await verifyOtp(otp, email);
      if (isVerified) {
        onOtpVerified();  // Call the onOtpVerified function after successful verification
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("OTP verification failed.");
    }
  };

  const verifyOtp = async (otp, email) => {
    try {
      const response = await axios.post("/api/verifyotp", { otp, email });
      return response.data.message ? true : false; // Returns true if OTP is verified
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return false;
    }
  };

  return (
    <div className="otp-verification">
      <form onSubmit={handleOtpSubmit}>
        <label htmlFor="otp" className="block mb-2">Enter OTP:</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter the OTP"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        />
        <Link href="/studentLogin">
            <button type="submit" className="w-full bg-black text-white font-bold py-2 px-4 rounded">
            Verify OTP
            </button>
        </Link>
      </form>
    </div>
  );
};

export default OtpVerification;
