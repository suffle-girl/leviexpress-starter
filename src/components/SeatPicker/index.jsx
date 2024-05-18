import { SeatRow } from "../SeatRow";
import "./style.css";

export const SeatPicker = ({seats}) => {
  const testRow = [
    {
      number: 33,
      isOccupied: false,
    },
    {
      number: 29,
      isOccupied: true,
    },
    {
      number: 25,
      isOccupied: false,
    },
  ];

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <div className="seat-row">
            {seats.map((item, index) => {
                return (
                    <SeatRow key={index} row={item.number}/>
                )
            })}
        </div>
      </div>
    </div>
  );
};
