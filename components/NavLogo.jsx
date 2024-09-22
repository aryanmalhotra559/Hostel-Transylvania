'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const NavLogo = () => {
    return (
        <nav className='flex-between w-full pt-6 pl-20 pr-20 bg-gray-80 transparent border-black'>
            <Link href="/" className='flex gap-2 flex-center'>
                <Image
                    src="/images/newHostel.png"
                    width={60}
                    height={60}
                    className="object-contain"
                />
                <p className='black_gradient text-xl font-bold font-sans hover:text-2xl'>HostelTransylvania</p>
            </Link>
        </nav>
    );
};

export default NavLogo