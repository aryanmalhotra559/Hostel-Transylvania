'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Nav = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [toggleDropdown2, setToggleDropdown2] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <nav className='flex justify-between w-full pt-6 pl-20 pr-20 bg-gray-80 z-10 bg-opacity-75 relative border-black'>
            <Link href="/" className='flex gap-2 flex-center'>
                <Image
                    src="/images/newHostel.png"
                    width={60}
                    height={60}
                    className="object-contain"
                />
                <p className='text-black text-xl font-bold font-sans hover:text-2xl'>HostelTransylvania</p>
            </Link>
            <div className='flex relative'>
                {/* Signup Button */}
                <button type="button" className='boutline_btn pr-5' onClick={() => setToggleDropdown2((prev) => !prev)}>
                    Signup
                </button>
                {toggleDropdown2 && (
                    <div className="signup_dropdown absolute z-20 bg-white border border-gray-300" style={{ pointerEvents: 'auto' }}>
                        <Link href="/StudentSignup" className='signup_link block px-4 py-2' onClick={() => setToggleDropdown2(false)}>
                            Student Signup
                        </Link>
                        <Link href="/WardenSignup" className='signup_link block px-4 py-2' onClick={() => setToggleDropdown2(false)}>
                            Warden Signup
                        </Link>
                        <Link href="/StaffSignup" className='signup_link block px-4 py-2' onClick={() => setToggleDropdown2(false)}>
                            Staff Signup
                        </Link>
                    </div>
                )}
                {/* Login Button */}
                <div className="relative ml-4">
                    <button type="button" className='boutline_btn' onClick={() => setToggleDropdown((prev) => !prev)}>
                        Login
                    </button>
                    {toggleDropdown && (
                        <div className="dropdown absolute z-20 bg-white border border-gray-300" style={{ pointerEvents: 'auto' }}>
                            <Link href="/studentLogin" className='dropdown_link block px-4 py-2' onClick={() => setToggleDropdown(false)}>
                                Student Login
                            </Link>
                            <Link href="/wardenLogin" className='dropdown_link block px-4 py-2' onClick={() => setToggleDropdown(false)}>
                                Warden Login
                            </Link>
                            <Link href="/staffLogin" className='dropdown_link block px-4 py-2' onClick={() => setToggleDropdown(false)}>
                                Staff Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;