export const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
  };
  
  export const sendOtpToEmail = (email, otp) => {
    // Implement your email sending logic here, using a service like Nodemailer or SendGrid
    console.log(`Sending OTP ${otp} to ${email}`);
  };
  