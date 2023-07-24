import React from 'react';

export default function DetailHeader({ type, onBtnClick, listNum, clearNum }) {
  return (
    <section className='flex flex-row justify-between items-center'>
      <div className='flex flex-row gap-10 items-center'>
        {type === 'finished' && (
          <h2 className=' text-4xl text-mapledarkgrey font-bold'>메한일</h2>
        )}
        {type === 'todo' && (
          <h2 className=' text-4xl text-mapleskyblue font-bold'>메할일</h2>
        )}
        {type === 'edit' && (
          <h2 className=' text-4xl text-mapleskyblue font-bold'>
            메할일리스트
          </h2>
        )}
        {type === 'edit' ? (
          <button
            className=' bg-mapleorange px-6 py-4 text-white font-semibold text-xl hover:scale-110 rounded-3xl'
            onClick={onBtnClick}
          >
            저장
          </button>
        ) : (
          <button
            className=' bg-maplebtngrey px-6 py-4 text-white font-semibold text-xl hover:scale-110 rounded-3xl'
            onClick={onBtnClick}
          >
            편집
          </button>
        )}
      </div>
      {type === 'todo' && (
        <p className=' text-4xl text-mapleskyblue font-bold'>{`${clearNum} / ${listNum}`}</p>
      )}
      {type === 'edit' && (
        <p className=' text-4xl text-mapleskyblue font-bold'>2개</p>
      )}
    </section>
  );
}
