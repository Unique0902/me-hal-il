import React from 'react';
import PageTitleBox from './PageTitleBox';
import QuestBtn from './QuestBtn';

export default function MapleHeader({
  halIlType,
  handleClickDaily,
  handleClickWeekly,
  dailyNum,
  weeklyNum,
}) {
  return (
    <header className='p-4 fixed bg-white'>
      <div className='relative flex flex-row w-screen '>
        <PageTitleBox />
        <section className=''>
          <div className='absolute right-20 flex flex-row gap-6'>
            <QuestBtn
              text={'일간'}
              isClicked={halIlType === 'daily'}
              questNum={`${dailyNum}`}
              handleClick={handleClickDaily}
            />
            <QuestBtn
              text={'주간'}
              isClicked={halIlType === 'weekly'}
              questNum={`${weeklyNum}`}
              handleClick={handleClickWeekly}
            />
          </div>
        </section>
      </div>
    </header>
  );
}
