import React from 'react';
import ListItem from './ListItemComponent';

const ListComponent = ({ items }) => {
  return (
    <div className="list-component">
      {items.map(item => (
        <ListItem
          key={item.id}
          id={item.id}
          date={item.date}
          homeTeamName={item.homeTeamName}
          homeTeamLogo={item.homeTeamLogo}
          awayTeamName={item.awayTeamName}
          awayTeamLogo={item.awayTeamLogo}
        />
      ))}
    </div>
  );
};

export default ListComponent;