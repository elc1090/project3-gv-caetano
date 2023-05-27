import { useNavigate } from 'react-router-dom';

const ListItems = ({ matches }) => {
  const navigate = useNavigate();

  const renderItem = (event) => {
    const { team1, team2 } = event;

    return(
      <div onClick={() => navigate(`eventstats/${event.Id}`)}>
        <h1>{`${team1.name}x${team2.name}`}</h1>
        <h2>{event.date.toLocaleDateString()}</h2>
        <div>
          {renderTeamSummary(team1)}
          {renderTeamSummary(team2)}
        </div>
      </div>
    );
  };

  const renderTeamSummary = (team) => {
    return(
      <div>
        <p>{team.type === 'home' ? 'Em casa' : 'Fora'}</p>
        <img src={team.img} alt={`Logo do time ${team.name}`}/>
        <p>{team.name}</p>
      </div>
    );
  };

  return(
    <div>
      {matches.map((item) => renderItem(item))}
    </div>
  );

};

export default ListItems;