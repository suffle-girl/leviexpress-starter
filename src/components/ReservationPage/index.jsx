import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

export const ReservationPage = () => {
  const [reservation, setReservation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`
      );
      const data = await response.json();
      const data2 = data.results;
      setReservation(data2);
      console.log(data2);
    };
    fetchData();
  }, []);

  return (
    <div>
      {reservation && (
        <div className="reservation container">
          <h2>Vaše e-jízdenka č. </h2>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
                {console.log(reservation)}
              <p>{reservation.date}</p>
              <p>{reservation.fromCity.name}</p>
              <p>{reservation.toCity.name}</p>
              <p>{reservation.seatNumber}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
