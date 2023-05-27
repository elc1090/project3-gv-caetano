import React from 'react';

const ListItem = ({ id, date, homeTeamName, homeTeamLogo, awayTeamName, awayTeamLogo }) => {
  return (
    <div className="list-item">
      <div style={{ height: '50px', width: '400px', border: '1px solid black', padding: '10px',  }}>
        <img src={homeTeamLogo} alt="Logo 1" style={{ height: '20px', width: '20px' }} />
        
        <div style={{ textAlign: 'center', marginBottom: '5px' }}>{homeTeamName} x {awayTeamName}</div>
        <div style={{ textAlign: 'center' }}>{date}</div>
        <img src={awayTeamLogo} alt="Logo 2" style={{ height: '20px', width: '20px' }} />
      </div>
    </div>
  );
};

export default ListItem