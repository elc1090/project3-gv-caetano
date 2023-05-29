import { useNavigate } from 'react-router-dom';

import './ListItems.css';

const ListItems = ({ matches }) => {
  const navigate = useNavigate();

  const renderItem = (event) => {
    const { team1, team2 } = event;

    return(
      <div className='event-card' onClick={() => navigate(`eventstats/${event.Id}`)}>
        <h1>{`${team1.name} x ${team2.name}`}</h1>
        <h2>{event.date.toLocaleDateString()}</h2>
        <div className='teams-summary'>
          {renderTeamSummary(team1)}
          {renderTeamSummary(team2)}
        </div>
      </div>
    );
  };

  const renderTeamSummary = (team) => {
    return(
      <div className='team-summary'>
        <p>{team.type === 'home' ? 'Em casa' : 'Fora'}</p>
        <img src={team.img} alt={`Logo do time ${team.name}`}/>
        <p>{team.name}</p>
      </div>
    );
  };

  return(
    <div className='list-events'>
      {matches.map((item) => renderItem(item))}
    </div>
  );

};

export default ListItems;