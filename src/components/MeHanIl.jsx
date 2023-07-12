import React from 'react';
import DetailHeader from './DetailHeader';
import MapleListItem from './MapleListItem';

export default function MeHanIl({ goEditor }) {
  const onBtnClick = () => {
    goEditor();
  };
  return (
    <div className='px-10'>
      <DetailHeader type={'finished'} onBtnClick={onBtnClick} />
      <ul className='mt-8'>
        <MapleListItem type={'finished'} />
      </ul>
    </div>
  );
}
