import { useState, useEffect } from 'react';

import ListItems from "../components/ListItems";

const TEAM_QT = 20;

const ListEvents = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const lstMatches = [];

    for(let i = 0; i < TEAM_QT; i+=2) {
      const team1 = { name: `TEAM_${i}`, img: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png', type: 'home' };
      const team2 = { name: `TEAM_${i+1}`, img: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png', type: 'away' };
      const event = {
        Id: `${team1.name}-${team2.name}`,
        team1,
        team2,
        date: new Date(new Date() - Math.random()*(1e+12)),
      };

      lstMatches.push(event);
    }

    setMatches([...lstMatches]);
    console.log('lstMatches', lstMatches);
  }, []);

  return(
    <div>
      <ListItems matches={matches} />
    </div>
  );
};

export default ListEvents;