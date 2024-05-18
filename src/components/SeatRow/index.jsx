import { Seat } from "../Seat"

export const SeatRow = ({row}) => {
    return(
       <div className="seat-row">
        {row.map((item) => {
            return (
                <Seat key={item.number} number={item.number} />
            )
        })}
       </div>
    )
}