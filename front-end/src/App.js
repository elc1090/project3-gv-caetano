import { Routes, Route } from 'react-router-dom';

import ListEvents from './pages/ListEvents';
import EventStats from './pages/EventStats';

import './App.css';

const App = ()  => {

  return (
    <>
      <Routes>
        <Route path='/' element={<ListEvents />}/>
        <Route path='/eventstats/:eventId' element={<EventStats />}/>
      </Routes>
    </>
  );
}

export default App;
