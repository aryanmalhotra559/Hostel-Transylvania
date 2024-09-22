import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/studentModel";
import { connect } from "@/dbConfig/dbConfig";
import { sendOtpToEmail, generateOtp } from "@/utils/otpUtils"; // Make sure these utility functions exist

connect();

export async function POST(request: NextRequest) {
  try {
    const { name, RegNo, email, password } = await request.json();

    // Create a new student record
    const otp = generateOtp(); // Generate OTP
    const student = new Student({ name, RegNo, email, password, otp, otpExpiry: Date.now() + 10 * 60 * 1000 }); // OTP valid for 10 minutes
    await student.save();

    sendOtpToEmail(email, otp); // Send OTP via email

    return NextResponse.json({ message: "Signup successful! Please check your email for the OTP." });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
