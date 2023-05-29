import { Routes, Route } from 'react-router-dom';

import ListEvents from './pages/ListEvents';
import EventStats from './pages/EventStats';

import './App.css';

const App = ()  => {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<ListEvents />}/>
        <Route path='/eventstats/:eventId' element={<EventStats />}/>
      </Routes>
    </div>
  );
}

export default App;
