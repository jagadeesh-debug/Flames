"use client"
import {useState} from 'react';
export default function Flames() {
  
  const [result, setResult] = useState('');
  function FlameCalculaor(){
   
  }


  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center gap-6 bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 drop-shadow-xl">FLAMES</h1>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <input
            className="rounded-md text-center shadow-md bg-white p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="rounded-md text-center shadow-md bg-white p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            type="text"
            placeholder="Your Partner's Name"
          />
          <button className="w-full bg-pink-500 text-white shadow-md rounded-md py-2 hover:bg-violet-600 transition duration-300 cursor-pointer">
            Check
          </button>
        </div>
      </div>
    </>
  );
}