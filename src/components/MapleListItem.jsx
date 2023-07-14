import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiRotateCcw } from 'react-icons/fi';
import { BiSolidEdit } from 'react-icons/bi';
import { BsFillTrash3Fill } from 'react-icons/bs';
export default function MapleListItem({
  type,
  status,
  name,
  clearType,
  handleRetryItem,
  handleSkipItem,
  id,
  handleCompleteItem,
  handleDeleteItem,
  handleStartEditItem,
}) {
  return (
    <li className=' h-32 flex flex-row items-center justify-between'>
      <img src='imgs/exUnion.png' alt='exUnion' className='h-full' />
      <div
        className={`flex flex-row ${type === 'todo' && 'bg-mapleskyblue'} ${
          type === 'finished' && 'bg-maplelightgray'
        } ${
          type === 'edit' && 'bg-mapleskyblue'
        } h-2/3 w-2/3 items-center justify-between px-10`}
      >
        <h4 className='text-black text-2xl font-semibold'>{name}</h4>
        {type === 'finished' && clearType === 'completed' && (
          <h4 className='text-black text-2xl font-extrabold text-mapledarkgrey'>
            완료
          </h4>
        )}
        {type === 'finished' && clearType === 'skipped' && (
          <h4 className='text-black text-2xl font-extrabold text-mapleblue'>
            스킵
          </h4>
        )}
        {type === 'todo' && (
          <div className='flex flex-row items-center gap-4'>
            <button
              className=' text-maplegreen text-6xl hover:scale-110'
              onClick={() => {
                handleCompleteItem(id);
              }}
            >
              <BsCheck />
            </button>
            <button
              className=' text-mapleblue text-4xl hover:scale-110'
              onClick={() => {
                handleSkipItem(id);
              }}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        )}
        {type === 'edit' && (
          <div className='flex flex-row items-center gap-6'>
            <button
              className=' text-black text-5xl hover:scale-110'
              onClick={() => {
                handleStartEditItem();
              }}
            >
              <BiSolidEdit />
            </button>
            <button
              className=' text-darkgrey text-4xl hover:scale-110'
              onClick={() => {
                handleDeleteItem(id);
              }}
            >
              <BsFillTrash3Fill />
            </button>
          </div>
        )}
        {type === 'finished' && (
          <button
            className=' text-black text-4xl hover:scale-110'
            onClick={() => {
              handleRetryItem(id);
            }}
          >
            <FiRotateCcw />
          </button>
        )}
      </div>
    </li>
  );
}
