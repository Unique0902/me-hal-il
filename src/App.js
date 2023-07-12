import { useState } from 'react';
import './App.css';
import MapleHeader from './components/MapleHeader';
import MeHalIl from './components/MeHalIl';
import MeHalIlEditor from './components/MeHalIlEditor';
import MeHanIl from './components/MeHanIl';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const goEditor = () => {
    setIsEditing(true);
  };
  const endEditor = () => {
    setIsEditing(false);
  };
  return (
    <>
      <MapleHeader />
      <main className='p-4 pt-40 flex flex-col gap-12'>
        {isEditing ? (
          <MeHalIlEditor endEditor={endEditor} />
        ) : (
          <>
            <MeHalIl goEditor={goEditor} />
            <MeHanIl goEditor={goEditor} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
