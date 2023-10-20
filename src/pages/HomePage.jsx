import React from 'react'
import { Background } from '../assets/components/Background';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
        const navigate = useNavigate()   
  
  
    return (
      <div style={{ position: "relative" }}>
        <Background /> {/* Use the Background component as the background */}
        <div
          className=" h-[10%] w-[80%] flex justify-between items-start  "
          style={{
            position: "absolute",
            top: "8%", // Center it vertically
            left: "50%", // Center it horizontally
            transform: "translate(-50%, -50%)", // Center it perfectly
            zIndex: 1, // Ensure it appears above the background
          }}
        >
        <h1 className='text-red-600 font text-5xl font-serif'>Movie List</h1>
        <button className='bg-red-600 hover:bg-red-700 h-[70%] w-20 rounded-md text-white font-bold' onClick={() => navigate('/login')}>Login</button>
        </div>
        <div 
        className=' w-[80%] h-auto flex flex-col justify-center items-center space-y-4'
        style={{
            position: "absolute",
            top: "55%", // Center it vertically
            left: "50%", // Center it horizontally
            transform: "translate(-50%, -50%)", // Center it perfectly
            zIndex: 1, // Ensure it appears above the background
        }}    
        >
            <h1 className='text-4xl font-bold text-white'> Semua Kisah Terpopuler di Indonesia dan Seluruh Dunia.</h1>
            <h1 className='text-4xl font-bold text-white'>Jelajahi Dunia Perfilm-an Terbaik di Movie List.</h1>
            <p className='text-gray-50 text-xl'>Siap Untuk Hiburan Terbaik? Tonton Kapan Saja dan di Mana Saja.</p>
            <p className='text-gray-50 text-xl'>Ingin Mulai Menonton? Silahkan login terlebih dahulu untuk Memulai Pengalaman Menarik Kami.</p>
            <button className='bg-red-600 hover:bg-red-700 text-white font-bold w-40 h-16 rounded-md' onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    );
  };
