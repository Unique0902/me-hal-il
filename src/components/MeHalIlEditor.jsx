import React, { useState } from 'react';
import DetailHeader from './DetailHeader';
import MapleListItem from './MapleListItem';
import MeHalIlAddInputBox from './MeHalIlAddInputBox';

export default function MeHalIlEditor({ endEditor }) {
  const [isAdding, setIsAdding] = useState(false);
  const onClickAddBtn = () => {
    setIsAdding(true);
  };
  const onSave = () => {
    endEditor();
  };
  const onAddingCancel = () => {
    setIsAdding(false);
  };
  return (
    <div className='px-10'>
      <DetailHeader type={'edit'} onBtnClick={onSave} />
      <ul className='mt-8 flex flex-col gap-8'>
        <MapleListItem type={'edit'} />
        {!isAdding && (
          <button
            className=' border-2 border-maplelightgray border-dashed px-4 py-12'
            onClick={onClickAddBtn}
          >
            <h3 className=' text-mapledarkgrey text-3xl font-medium text-left'>
              + 메할일 추가하기
            </h3>
          </button>
        )}
        {isAdding && <MeHalIlAddInputBox onAddingCancel={onAddingCancel} />}
      </ul>
    </div>
  );
}
