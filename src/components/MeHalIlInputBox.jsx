import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { BiSolidSave } from 'react-icons/bi';
import ImageSelectorItem from './ImageSelectorItem';

export default function MeHalIlInputBox({
  type,
  onAddingCancel,
  handleAddItem,
  handleEditCancel,
  handleEditItem,
  editId,
  editName,
  editImageName,
}) {
  const [selectedImageName, setSelectedImageName] = useState('mapleLogo.jpg');
  const [isChoosingImage, setIsChoosingImage] = useState(false);
  const [halIlName, setHalIlName] = useState('기본 할일 1');
  const handleChange = (e) => setHalIlName(e.target.value);
  const handleStartChooseImage = () => {
    setIsChoosingImage(true);
  };
  const handleCancelChoosingImage = () => {
    setIsChoosingImage(false);
  };
  const handleClickImage = (e) => {
    setSelectedImageName(e.target.name);
  };
  useEffect(() => {
    if (type === 'edit') {
      setHalIlName(editName);
      if (editImageName) {
        setSelectedImageName(editImageName);
      }
    }
  }, []);
  return (
    <div className='flex flex-row px-8 py-8 justify-between bg-maplelightgray items-center relative rounded-3xl'>
      <button
        className='bg-mapledarkgrey text-white px-4 py-2 text-lg font-semibold hover:scale-110 rounded-3xl'
        onClick={handleStartChooseImage}
      >
        이미지 선택
      </button>
      {isChoosingImage && (
        <div className='absolute bottom-0  w-1/2 flex flex-wrap gap-2 p-12 bg-white rounded-3xl border-2 border-gray-300'>
          <ImageSelectorItem
            name={'mapleLogo.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'exUnion.png'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'urous.png'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'mapleBoss.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'dailyGift.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'acaneRiverSymbol.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'monsterPark.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'monsterCollection.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'mapleM.png'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'mapleGuildCheck.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'mooreung.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />
          <ImageSelectorItem
            name={'assenticSymbol.jpg'}
            handleClickImage={handleClickImage}
            selectedImageName={selectedImageName}
          />

          <button
            className='absolute right-4 top-4 text-2xl text-red-500'
            onClick={handleCancelChoosingImage}
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
      <input
        type={'text'}
        value={halIlName}
        placeholder={'할일 이름을 적어주세요.'}
        className='border-2 border-black w-2/3 py-2 px-4 text-lg font-medium rounded-3xl'
        onChange={handleChange}
      />
      {type === 'add' && (
        <div className='flex flex-row gap-6 items-center'>
          <button
            className='text-mapleskyblue text-4xl hover:scale-110'
            onClick={() => {
              if (halIlName) {
                handleAddItem(halIlName, selectedImageName);
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
                handleEditItem(editId, halIlName, selectedImageName);
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
