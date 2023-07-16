import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
export default function ImageSelectorItem({
  name,
  handleClickImage,
  selectedImageName,
}) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (selectedImageName === name) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedImageName]);
  return (
    <div className='relative'>
      <img
        src={`./imgs/${name}`}
        className={'w-32 h-32 cursor-pointer'}
        name={name}
        onClick={handleClickImage}
      />
      {isSelected && (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 text-3xl'>
          <BsCheckCircleFill />
        </div>
      )}
    </div>
  );
}
