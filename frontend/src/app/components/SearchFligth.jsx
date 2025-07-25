"use client"
import React, { useState } from "react";
import AirportAutocomplete from "./AirportAutocomplete";

const FlightSearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!origin || !destination || !date) {
      alert("Por favor completá todos los campos");
      return;
    }
    console.log("Searching flights from", origin, "to", destination, "on", date);

    // onSearch({
    //   origin: origin.iata_code,
    //   destination: destination.iata_code,
    //   date,
    // });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 bg-white shadow rounded">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Origen</label>
        <AirportAutocomplete onSelectAirport={setOrigin} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Destino</label>
        <AirportAutocomplete onSelectAirport={setDestination} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Buscar vuelos
      </button>
    </form>
  );
};

export default FlightSearchForm;