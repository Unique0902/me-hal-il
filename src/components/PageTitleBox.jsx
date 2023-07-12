import React from 'react';

export default function PageTitleBox() {
  return (
    <div className='p-2 bg-mapleorange w-1/3 flex flex-row'>
      <img src='./imgs/mapleLogo.jpg' alt='logo' className=' w-1/5' />
      <div className='text-black text-center w-4/5 text-xl flex flex-col justify-center font-bold'>
        <p>2023년 7월 7일</p>
        <h3>오늘의 메할일</h3>
      </div>
    </div>
  );
}
