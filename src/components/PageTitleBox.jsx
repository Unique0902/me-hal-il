import React from 'react';

export default function PageTitleBox() {
  const nowDate = new Date();
  return (
    <div className='p-2 bg-mapleorange w-1/3 flex flex-row rounded-3xl'>
      <img
        src='./imgs/mapleLogo.jpg'
        alt='logo'
        className=' w-1/5 rounded-full'
      />
      <div className='text-black text-center w-4/5 text-xl flex flex-col justify-center font-bold'>
        <p>{`${nowDate.getFullYear()}년 ${
          nowDate.getMonth() + 1
        }월 ${nowDate.getDate()}일`}</p>
        <h3>오늘의 메할일</h3>
      </div>
    </div>
  );
}
