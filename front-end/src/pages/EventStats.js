import { useParams } from 'react-router-dom';

const EventStats = () => {
  const { eventId } = useParams();
  return(
    <div>
      <p style={{color: 'white'}}>{eventId}</p>
    </div>
  );

};

export default EventStats;