import { useState, useEffect } from 'react';

import ListItems from "../components/ListItems/ListItems";

const ListEvents = () => {
  const [matches, setMatches] = useState([]);

  const loadData = async () => {
    const lstMatches = await fetch('https://proj3-ww06.onrender.com/matches');
    const data  = await lstMatches.json();
    setMatches([...data]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return(
    <div>
      <ListItems matches={matches} />
    </div>
  );
};

export default ListEvents;
