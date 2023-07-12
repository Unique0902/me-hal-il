import React from 'react';
import DetailHeader from './DetailHeader';
import MapleListItem from './MapleListItem';

export default function MeHanIl() {
  return (
    <div className='px-10'>
      <DetailHeader type={'finished'} />
      <ul className='mt-8'>
        <MapleListItem type={'finished'} />
      </ul>
    </div>
  );
}
