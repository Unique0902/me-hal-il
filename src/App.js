import { useEffect, useState } from 'react';
import './App.css';
import MapleHeader from './components/MapleHeader';
import MeHalIl from './components/MeHalIl';
import MeHalIlEditor from './components/MeHalIlEditor';
import MeHanIl from './components/MeHanIl';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [halIlType, setHalIlType] = useState('daily');
  const [dailyList, setDailyList] = useState([
    {
      id: 1,
      name: '일간 유니온 코인 받기',
      isCleared: false,
      clearType: null,
      imageName: 'exUnion.png',
    },
    {
      id: 2,
      name: '일간 유니온 코인 안 받기',
      isCleared: true,
      clearType: 'completed',
      imageName: 'exUnion.png',
    },
    {
      id: 3,
      name: '일간 유니온 코인 완전안 받기',
      isCleared: true,
      clearType: 'skipped',
      imageName: 'exUnion.png',
    },
  ]);
  const [weeklyList, setWeeklyList] = useState([
    {
      id: 1,
      name: '주간 유니온 코인 받기',
      isCleared: false,
      clearType: null,
      imageName: 'exUnion.png',
    },
    {
      id: 2,
      name: '주간 유니온 코인 안 받기',
      isCleared: true,
      clearType: 'completed',
      imageName: 'exUnion.png',
    },
    {
      id: 3,
      name: '주간 유니온 코인 완전안 받기',
      isCleared: true,
      clearType: 'skipped',
      imageName: 'exUnion.png',
    },
  ]);
  const saveDailyListToLocal = (list) => {
    localStorage.setItem('dailyList', JSON.stringify(list));
  };
  const saveWeeklyListToLocal = (list) => {
    localStorage.setItem('weeklyList', JSON.stringify(list));
  };
  const getDailyListFromLocal = () => {
    const wildDailyList = localStorage.getItem('dailyList');
    if (wildDailyList) {
      setDailyList(JSON.parse(wildDailyList));
    }
  };
  const getWeeklyListFromLocal = () => {
    const wildWeeklyList = localStorage.getItem('weeklyList');
    if (wildWeeklyList) {
      setWeeklyList(JSON.parse(wildWeeklyList));
    }
  };
  const goEditor = () => {
    setIsEditing(true);
  };
  const endEditor = () => {
    setIsEditing(false);
  };
  const handleClickDaily = () => {
    setHalIlType('daily');
  };
  const handleClickWeekly = () => {
    setHalIlType('weekly');
  };
  const handleSkipItem = (id) => {
    if (halIlType === 'daily') {
      const newDailyList = dailyList.map((item) => {
        if (item.id === id) {
          return { ...item, isCleared: true, clearType: 'skipped' };
        }
        return item;
      });
      setDailyList(newDailyList);
      saveDailyListToLocal(newDailyList);
    } else {
      const newWeeklyList = weeklyList.map((item) => {
        if (item.id === id) {
          return { ...item, isCleared: true, clearType: 'skipped' };
        }
        return item;
      });
      setWeeklyList(newWeeklyList);
      saveWeeklyListToLocal(newWeeklyList);
    }
  };
  const handleCompleteItem = (id) => {
    if (halIlType === 'daily') {
      const newDailyList = dailyList.map((item) => {
        if (item.id === id) {
          return { ...item, isCleared: true, clearType: 'completed' };
        }
        return item;
      });
      setDailyList(newDailyList);
      saveDailyListToLocal(newDailyList);
    } else {
      const newWeeklyList = weeklyList.map((item) => {
        if (item.id === id) {
          return { ...item, isCleared: true, clearType: 'completed' };
        }
        return item;
      });
      setWeeklyList(newWeeklyList);
      saveWeeklyListToLocal(newWeeklyList);
    }
  };
  const handleRetryItem = (id) => {
    if (halIlType === 'daily') {
      const newDailyList = dailyList.map((item) => {
        if (item.id === id) {
          return { ...item, isCleared: false, clearType: '' };
        }
        return item;
      });
      setDailyList(newDailyList);
      saveDailyListToLocal(newDailyList);
    } else {
      const newWeeklyList = weeklyList.map((item) => {
        if (item.id === id) {
          return { ...item, isCleared: false, clearType: '' };
        }
        return item;
      });
      setWeeklyList(newWeeklyList);
      saveWeeklyListToLocal(newWeeklyList);
    }
  };
  const handleAddItem = (name, imageName) => {
    if (halIlType === 'daily') {
      const newDailyList = [
        ...dailyList,
        {
          id: Date.now().toString(),
          name,
          imageName,
          isCleared: false,
          clearType: '',
        },
      ];
      setDailyList(newDailyList);
      saveDailyListToLocal(newDailyList);
    } else {
      const newWeeklyList = [
        ...weeklyList,
        {
          id: Date.now().toString(),
          name,
          imageName,
          isCleared: false,
          clearType: '',
        },
      ];
      setWeeklyList(newWeeklyList);
      saveWeeklyListToLocal(newWeeklyList);
    }
  };
  const handleDeleteItem = (id) => {
    if (halIlType === 'daily') {
      const newDailyList = dailyList.filter((item) => item.id !== id);
      setDailyList(newDailyList);
      saveDailyListToLocal(newDailyList);
    } else {
      const newWeeklyList = weeklyList.filter((item) => item.id !== id);
      setWeeklyList(newWeeklyList);
      saveWeeklyListToLocal(newWeeklyList);
    }
  };
  const handleEditItem = (id, newName, newImageName) => {
    if (halIlType === 'daily') {
      const newDailyList = dailyList.map((item) => {
        if (item.id === id) {
          return { ...item, name: newName, imageName: newImageName };
        }
        return item;
      });
      setDailyList(newDailyList);
      saveDailyListToLocal(newDailyList);
    } else {
      const newWeeklyList = weeklyList.map((item) => {
        if (item.id === id) {
          return { ...item, name: newName, imageName: newImageName };
        }
        return item;
      });
      setWeeklyList(newWeeklyList);
      saveWeeklyListToLocal(newWeeklyList);
    }
  };
  useEffect(() => {
    if (halIlType === 'daily') {
      getDailyListFromLocal();
    } else {
      getWeeklyListFromLocal();
    }
  }, [halIlType]);
  return (
    <>
      <MapleHeader
        halIlType={halIlType}
        handleClickDaily={handleClickDaily}
        handleClickWeekly={handleClickWeekly}
        dailyNum={dailyList.filter((item) => !item.isCleared).length}
        weeklyNum={weeklyList.filter((item) => !item.isCleared).length}
      />
      <main className='p-4 pt-40 flex flex-col gap-12'>
        {isEditing ? (
          <MeHalIlEditor
            endEditor={endEditor}
            list={halIlType === 'daily' ? dailyList : weeklyList}
            handleAddItem={handleAddItem}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
          />
        ) : (
          <>
            <MeHalIl
              goEditor={goEditor}
              list={halIlType === 'daily' ? dailyList : weeklyList}
              handleSkipItem={handleSkipItem}
              handleCompleteItem={handleCompleteItem}
            />
            <MeHanIl
              goEditor={goEditor}
              list={halIlType === 'daily' ? dailyList : weeklyList}
              handleRetryItem={handleRetryItem}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
