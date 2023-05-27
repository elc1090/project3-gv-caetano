import logo from './logo.png';
import './App.css';
import { useState } from 'react'

import ListComponent from './ListComponent';

function App() {
  // load matches from db
  // if matches empty, load matches from api to db
  // load prediction from db
  // if match prediction is empty, load history data from each team and calculate prediction
  // prediction must have the date of the calculation to check if prediction can be updated posteriorly
  const [matches, setMatches] = useState([{
    id: 1,
    date: '2023-06-01',
    homeTeamName: 'time 1',
    homeTeamLogo: 'url1',
    awayTeamName: 'time 2',
    awayTeamLogo: 'url2'
  },
  {
    id: 2,
    date: '2023-06-02',
    homeTeamName: 'time 3',
    homeTeamLogo: 'url3',
    awayTeamName: 'time 4',
    awayTeamLogo: 'url4'
  }])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Partidas
        </p>
        <ListComponent items={matches} />
      </header>
    </div>
  );
}

export default App;
