import React, { useState } from 'react';
import DetailHeader from './DetailHeader';
import MapleEditorItem from './MapleEditorItem';
import MeHalIlInputBox from './MeHalIlInputBox';

export default function MeHalIlEditor({
  endEditor,
  list,
  handleAddItem,
  handleDeleteItem,
  handleEditItem,
  handleClickClearListBtn,
}) {
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
      <ul className='mt-8 flex flex-col gap-6'>
        {list.map((item) => (
          <MapleEditorItem
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
          />
        ))}
        {!isAdding && (
          <button
            className=' border-2 border-maplelightgray border-dashed px-4 py-12 rounded-3xl'
            onClick={onClickAddBtn}
          >
            <h3 className=' text-mapledarkgrey text-3xl font-medium text-left'>
              + 메할일 추가하기
            </h3>
          </button>
        )}
        {isAdding && (
          <MeHalIlInputBox
            type={'add'}
            onAddingCancel={onAddingCancel}
            handleAddItem={handleAddItem}
          />
        )}
        <div className='flex flex-row justify-end'>
          <button
            className='bg-red-600 text-mapledarkgrey text-2xl font-bold w-48 px-4 py-2 rounded-3xl hover:scale-105'
            onClick={handleClickClearListBtn}
          >
            초기화
          </button>
        </div>
      </ul>
    </div>
  );
}
