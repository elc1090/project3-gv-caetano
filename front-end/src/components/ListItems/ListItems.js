import './ListItems.css';

const ListItems = ({ matches }) => {

  const renderItem = (event) => {
    const { home_team, away_team } = event;

    return(
      <div className='event-card'>
        <h1>{`${home_team} x ${away_team}`}</h1>
        <h2>{new Date(event.date).toLocaleDateString()}</h2>
        <div className='teams-summary'>
          {renderTeamSummary(home_team, true)}
          {renderTeamSummary(away_team, false)}
        </div>
      </div>
    );
  };

  const renderTeamSummary = (team, isHomeTeam) => {
    return(
      <div className='team-summary'>
        <p>{isHomeTeam ? 'Em casa' : 'Fora'}</p>
        <img src={team.img} alt={`Logo do time ${team}`}/>
        <p>{team}</p>
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