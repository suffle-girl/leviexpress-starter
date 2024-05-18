import { Seat } from "../Seat";
import "./style.css";

export const SeatPicker = () => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <div className="seat-row">
          <Seat number={1} />
          <Seat number={7}/>
          <Seat number={26}/>
        </div>
      </div>
    </div>
  );
};
