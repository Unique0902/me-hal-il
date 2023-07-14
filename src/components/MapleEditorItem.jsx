import React, { useState } from 'react';
import MapleListItem from './MapleListItem';
import MeHalIlInputBox from './MeHalIlInputBox';

export default function MapleEditorItem({
  item,
  handleDeleteItem,
  handleEditItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const handleStartEditItem = () => {
    setIsEditing(true);
  };
  const handleEditCancel = () => {
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <MeHalIlInputBox
        type={'edit'}
        handleEditCancel={handleEditCancel}
        handleEditItem={handleEditItem}
        editId={item.id}
        editName={item.name}
      />
    );
  }
  return (
    <MapleListItem
      type={'edit'}
      name={item.name}
      key={item.id}
      id={item.id}
      handleDeleteItem={handleDeleteItem}
      handleStartEditItem={handleStartEditItem}
    />
  );
}
