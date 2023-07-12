import React from 'react';

export default function QuestBtn({ text, questNum, onClick }) {
  return (
    <button
      onClick={onClick}
      className=' bg-mapleorange px-6 py-3 text-xl font-bold relative hover:scale-110'
    >
      <h1>{text}</h1>
      <div className='absolute  -right-4 -top-2 text-white bg-mapleblue font-medium w-8 h-8 rounded-full'>
        {questNum}
      </div>
    </button>
  );
}
