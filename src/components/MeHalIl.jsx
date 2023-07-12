import React from 'react';
import DetailHeader from './DetailHeader';
import MapleListItem from './MapleListItem';

export default function MeHalIl({ goEditor }) {
  const onBtnClick = () => {
    goEditor();
  };
  return (
    <div className='px-10'>
      <DetailHeader type={'todo'} onBtnClick={onBtnClick} />
      <ul className='mt-8'>
        <MapleListItem type={'todo'} />
      </ul>
    </div>
  );
}
