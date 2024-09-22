'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navsecond = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className='flex-between w-full mb-16 pt-3 pl-20 pr-20 transparent border-black'>
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

export default Navsecond;
