import React from 'react';
import DetailHeader from './DetailHeader';
import MapleListItem from './MapleListItem';

export default function MeHalIl({
  goEditor,
  list,
  handleSkipItem,
  handleCompleteItem,
}) {
  const onBtnClick = () => {
    goEditor();
  };
  return (
    <div className='px-10'>
      <DetailHeader
        type={'todo'}
        onBtnClick={onBtnClick}
        listNum={list.length}
        clearNum={list.filter((item) => !item.isCleared).length}
      />
      <ul className='mt-8 flex flex-col gap-6'>
        {list
          .filter((item) => !item.isCleared)
          .map((item) => (
            <MapleListItem
              type={'todo'}
              name={item.name}
              key={item.id}
              id={item.id}
              imageName={item.imageName}
              handleSkipItem={handleSkipItem}
              handleCompleteItem={handleCompleteItem}
            />
          ))}
      </ul>
    </div>
  );
}
