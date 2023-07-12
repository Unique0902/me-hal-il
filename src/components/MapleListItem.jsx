import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiRotateCcw } from 'react-icons/fi';
export default function MapleListItem({ type, status }) {
  return (
    <li className=' h-32 flex flex-row items-center justify-between'>
      <img src='imgs/exUnion.png' alt='exUnion' className='h-full' />
      <div
        className={`flex flex-row ${type == 'todo' && 'bg-mapleskyblue'} ${
          type == 'finished' && 'bg-maplelightgray'
        } h-2/3 w-2/3 items-center justify-between px-10`}
      >
        <h4 className='text-black text-2xl font-semibold'>유니온 코인 받기</h4>
        {type == 'finished' && (
          <h4 className='text-black text-2xl font-extrabold text-mapledarkgrey'>
            완료됨
          </h4>
        )}
        {type == 'todo' && (
          <div className='flex flex-row items-center gap-4'>
            <button className=' text-maplegreen text-6xl hover:scale-110'>
              <BsCheck />
            </button>
            <button className=' text-mapleblue text-4xl hover:scale-110'>
              <AiOutlineArrowRight />
            </button>
          </div>
        )}
        {type == 'finished' && (
          <button className=' text-black text-4xl hover:scale-110'>
            <FiRotateCcw />
          </button>
        )}
      </div>
    </li>
  );
}
