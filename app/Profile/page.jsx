"use client";
import { useRouter } from 'next/navigation';
import "@/styles/globals.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center" style={{ background: "linear-gradient(135deg, #1a1a1a, #000000)" }}>
      <div className="text-center font-bold text-4xl text-white mb-12 tracking-wide uppercase opacity-90" style={{ fontFamily: "Merriweather, serif" }}>
        Welcome to<br />Hostel Transylvania
      </div>
      <div className="flex justify-around w-full gap-6">
        <div className="w-256 h-56 bg-opacity-10 backdrop-blur-md text-white text-sm flex flex-col justify-center items-center cursor-pointer transition duration-500 ease-in-out rounded-md border border-opacity-20 shadow-md p-4" style={{ fontFamily: "Roboto, sans-serif" }} onClick={() => router.push('/LostandFound')}>
          Lost and Found
          <p className="text-sm text-opacity-70 mt-2 leading-relaxed text-center px-4">Find lost items or report items found by you.</p>
        </div>
        <div className="w-256 h-56 bg-opacity-10 backdrop-blur-md text-white text-sm flex flex-col justify-center items-center cursor-pointer transition duration-500 ease-in-out rounded-md border border-opacity-20 shadow-md p-4" style={{ fontFamily: "Roboto, sans-serif" }} onClick={() => router.push('/dashboard/student')}>
          Staff Control
          <p className="text-sm text-opacity-70 mt-2 leading-relaxed text-center px-4">Contact the closest worker for cleaning or plumbing or electrical work.</p>
        </div>
        <div className="w-256 h-56 bg-opacity-10 backdrop-blur-md text-white text-sm flex flex-col justify-center items-center cursor-pointer transition duration-500 ease-in-out rounded-md border border-opacity-20 shadow-md p-4" style={{ fontFamily: "Roboto, sans-serif" }} onClick={() => router.push('/chat')}>
          Chat
          <p className="text-sm text-opacity-70 mt-2 leading-relaxed text-center px-4">Chat with wardens to report suspicious behaviour.</p>
        </div>
      </div>
    </div>
  );
};
export default Home;