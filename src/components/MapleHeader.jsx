import React from 'react';
import PageTitleBox from './PageTitleBox';
import QuestBtn from './QuestBtn';

export default function MapleHeader({
  halIlType,
  handleClickDaily,
  handleClickWeekly,
}) {
  return (
    <header className='p-4 fixed'>
      <div className='relative flex flex-row w-screen'>
        <PageTitleBox />
        <section className=''>
          <div className='absolute right-20 flex flex-row gap-6'>
            <QuestBtn
              text={'일간'}
              isClicked={halIlType === 'daily'}
              questNum={'0'}
              handleClick={handleClickDaily}
            />
            <QuestBtn
              text={'주간'}
              isClicked={halIlType === 'weekly'}
              questNum={'0'}
              handleClick={handleClickWeekly}
            />
          </div>
        </section>
      </div>
    </header>
  );
}
