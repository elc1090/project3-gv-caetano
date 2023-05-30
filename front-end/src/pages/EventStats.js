
const EventStats = () => {
  return(
    <div style={{color: 'white'}}>
      <h1 >Evento</h1>
      <table style={{ borderStyle: 'solid', borderColor: 'white', textAlign: 'center', width: '50%'}}>
        <tr>
          <th>Time</th>
          <th>Gols</th>
          <th>Cartões Amarelos</th>
          <th>Cartões Vermelhos</th>
        </tr>
        <tr>
          <td>Time X</td>
          <td>10</td>
          <td>4</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Time y</td>
          <td>20</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
    </div>
  );

};

export default EventStats;