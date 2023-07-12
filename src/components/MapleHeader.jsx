import React from 'react';
import PageTitleBox from './PageTitleBox';
import QuestBtn from './QuestBtn';

export default function MapleHeader() {
  return (
    <header className='p-4 fixed'>
      <div className='relative flex flex-row w-screen'>
        <PageTitleBox />
        <section className=''>
          <div className='absolute right-20 flex flex-row gap-6'>
            <QuestBtn text={'일간'} questNum={'0'} />
            <QuestBtn text={'주간'} questNum={'0'} />
          </div>
        </section>
      </div>
    </header>
  );
}
