'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import StudentLogin from '../../components/studentLogin';

export default function Slogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., validation, API call)
    console.log('Registration Number:', registrationNumber);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
        style={{ transform: 'translateY(-20px)' }}
      >        
        <h2 className="text-black text-2xl font-bold mb-6 text-center">Student Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Registration Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="registrationNumber">
              Email ID
            </label>
            <input
              type="text"
              id="registrationNumber"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email ID"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <Link href="Profile">
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}