import React from 'react';
import DetailHeader from './DetailHeader';
import MapleListItem from './MapleListItem';

export default function MeHalIl() {
  return (
    <div className='px-10'>
      <DetailHeader type={'todo'} />
      <ul className='mt-8'>
        <MapleListItem type={'todo'} />
      </ul>
    </div>
  );
}
