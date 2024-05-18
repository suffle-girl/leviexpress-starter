import BusStop from '../BusStop';
import './style.css';

const JourneyDetail = ({ journey }) => {

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      {journey.map((item) => {
        return (
          <BusStop
            key={item.code}
            name={item.name}
            station={item.station}
            time={item.time}
          />
        );
      })}
    </div>
  );
};

export default JourneyDetail;
