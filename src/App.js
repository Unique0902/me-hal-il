import './App.css';
import MapleHeader from './components/MapleHeader';
import MeHalIl from './components/MeHalIl';
import MeHanIl from './components/MeHanIl';

function App() {
  return (
    <>
      <MapleHeader />
      <main className='p-4 pt-40 flex flex-col gap-12'>
        <MeHalIl />
        <MeHanIl />
      </main>
    </>
  );
}

export default App;
