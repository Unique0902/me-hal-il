import React from 'react';
import DetailHeader from './DetailHeader';
import MapleListItem from './MapleListItem';

export default function MeHanIl({ goEditor, list, handleRetryItem }) {
  const onBtnClick = () => {
    goEditor();
  };
  return (
    <div className='px-10'>
      <DetailHeader type={'finished'} onBtnClick={onBtnClick} />
      <ul className='mt-8 flex flex-col gap-6'>
        {list
          .filter((item) => item.isCleared)
          .map((item) => (
            <MapleListItem
              type={'finished'}
              name={item.name}
              key={item.id}
              id={item.id}
              imageName={item.imageName}
              clearType={item.clearType}
              handleRetryItem={handleRetryItem}
            />
          ))}
      </ul>
    </div>
  );
}
