'use client'; // ✅ Correct capitalization

import { useState, useEffect } from 'react';

export default function Home() {
  const [char, setChar] = useState('o');

  useEffect(() => {
    const interval = setInterval(() => {
      setChar((prev) => (prev === 'o' ? '-' : 'o'));
    }, 500);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className='xo-home'>
      <h1 className='x-o'>
        x<span className='o'>{char}</span>
      </h1>
      <h1 className='start'>Let's have fun</h1>
      <button className='start-button'>play with me </button>
    </div>
  );
}
