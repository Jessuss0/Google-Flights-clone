"use client"
import FlightCard from "./flightCard";

const FlightsPage = ({ vuelos }) => {
  return (
    <div className="p-6 flex flex-col gap-2">
      {vuelos.map((vuelo, i) => (
        <FlightCard key={i} flight={vuelo} />
      ))}
    </div>
  );
};

export default FlightsPage;