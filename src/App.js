import { useState } from 'react';
import './App.css';
import MapleHeader from './components/MapleHeader';
import MeHalIl from './components/MeHalIl';
import MeHalIlEditor from './components/MeHalIlEditor';
import MeHanIl from './components/MeHanIl';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [halIlType, setHalIlType] = useState('daily');
  const [dailyList, setDailyList] = useState([
    { id: 1, name: '일간 유니온 코인 받기', isCleared: false, clearType: null },
    {
      id: 2,
      name: '일간 유니온 코인 안 받기',
      isCleared: true,
      clearType: 'completed',
    },
    {
      id: 3,
      name: '일간 유니온 코인 완전안 받기',
      isCleared: true,
      clearType: 'skipped',
    },
  ]);
  const [weeklyList, setWeeklyList] = useState([
    { id: 1, name: '주간 유니온 코인 받기', isCleared: false, clearType: null },
    {
      id: 2,
      name: '주간 유니온 코인 안 받기',
      isCleared: true,
      clearType: 'completed',
    },
    {
      id: 3,
      name: '주간 유니온 코인 완전안 받기',
      isCleared: true,
      clearType: 'skipped',
    },
  ]);
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
      setDailyList(
        dailyList.map((item) => {
          if (item.id === id) {
            return { ...item, isCleared: true, clearType: 'skipped' };
          }
          return item;
        })
      );
    } else {
      setWeeklyList(
        weeklyList.map((item) => {
          if (item.id === id) {
            return { ...item, isCleared: true, clearType: 'skipped' };
          }
          return item;
        })
      );
    }
  };
  const handleCompleteItem = (id) => {
    if (halIlType === 'daily') {
      setDailyList(
        dailyList.map((item) => {
          if (item.id === id) {
            return { ...item, isCleared: true, clearType: 'completed' };
          }
          return item;
        })
      );
    } else {
      setWeeklyList(
        weeklyList.map((item) => {
          if (item.id === id) {
            return { ...item, isCleared: true, clearType: 'completed' };
          }
          return item;
        })
      );
    }
  };
  const handleRetryItem = (id) => {
    if (halIlType === 'daily') {
      setDailyList(
        dailyList.map((item) => {
          if (item.id === id) {
            return { ...item, isCleared: false, clearType: '' };
          }
          return item;
        })
      );
    } else {
      setWeeklyList(
        weeklyList.map((item) => {
          if (item.id === id) {
            return { ...item, isCleared: false, clearType: '' };
          }
          return item;
        })
      );
    }
  };
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
