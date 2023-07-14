import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { BiSolidSave } from 'react-icons/bi';

export default function MeHalIlInputBox({
  type,
  onAddingCancel,
  handleAddItem,
  handleEditCancel,
  handleEditItem,
  editId,
  editName,
}) {
  const [halIlName, setHalIlName] = useState('기본 할일 1');
  const handleChange = (e) => setHalIlName(e.target.value);
  useEffect(() => {
    if (type === 'edit') {
      setHalIlName(editName);
    }
  }, []);
  return (
    <div className='flex flex-row px-8 py-8 justify-between bg-maplelightgray items-center'>
      <button className='bg-mapledarkgrey text-white px-4 py-2 text-lg font-semibold hover:scale-110 '>
        파일추가
      </button>
      <input
        type={'text'}
        value={halIlName}
        placeholder={'할일 이름을 적어주세요.'}
        className='border-2 border-black w-2/3 py-2 px-4 text-lg font-medium'
        onChange={handleChange}
      />
      {type === 'add' && (
        <div className='flex flex-row gap-6 items-center'>
          <button
            className='text-mapleskyblue text-4xl hover:scale-110'
            onClick={() => {
              if (halIlName) {
                handleAddItem(halIlName);
                onAddingCancel();
              }
            }}
          >
            <AiOutlinePlus />
          </button>
          <button
            className='text-black text-4xl hover:scale-110'
            onClick={onAddingCancel}
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
      {type === 'edit' && (
        <div className='flex flex-row gap-6 items-center'>
          <button
            className='text-mapleskyblue text-4xl hover:scale-110'
            onClick={() => {
              if (halIlName) {
                handleEditItem(editId, halIlName);
                handleEditCancel();
              }
            }}
          >
            <BiSolidSave />
          </button>
          <button
            className='text-black text-4xl hover:scale-110'
            onClick={handleEditCancel}
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
    </div>
  );
}
