import { useParams } from 'react-router-dom';

const EventStats = () => {
  const { eventId } = useParams();
  return(
    <div>{eventId}</div>
  );

};

export default EventStats;