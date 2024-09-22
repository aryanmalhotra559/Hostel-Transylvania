'use client';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure any client-specific logic runs after the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null during SSR to avoid mismatches
  }

  return (
    <>
      <Nav />
      <div className="relative w-full h-screen overflow-hidden style={{ zIndex: -1 }}">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full -z-1"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/bgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text contrast */}
        {/* <div className="absolute top-0 bottom-120 left-0 w-full h-full bg-black opacity-0 z-10"></div> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-3/4 mt-40">
          <h1 className="text-black text-4xl mb-60 font-bold">
            Welcome to HostelTransylvania!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;