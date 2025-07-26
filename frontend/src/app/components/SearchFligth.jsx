"use client"
import React, { useState } from "react";
import AirportAutocomplete from "./AirportAutocomplete";
import { fetchFlights } from "../services/api";

const FlightSearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!origin || !destination || !date) {
    //   alert("Por favor completá todos los campos");
    //   return;
    // }
    console.log("originSkyId:", origin?.skyId,
  "destinationSkyId:", destination?.skyId,
  "originEntityId:", origin?.entityId,
  "destinationEntityId:", destination?.entityId,
  "departDate:", date);

//   await fetchFlights({originSkyId: origin?.skyId,
//   destinationSkyId: destination?.skyId,
//   originEntityId: origin?.entityId,
//   destinationEntityId: destination?.entityId,
//   departDate: date
//   }).then((data) => {
//       console.log("Vuelos encontrados:", data);})}

await fetchFlights({originSkyId: "LOND",
  destinationSkyId: "NYCA",
  originEntityId: "27544008",
  destinationEntityId: "27537542",
  departDate: "2025-08-01"
  }).then((data) => {
      console.log("Vuelos encontrados:", data);})
    }

  return (
    <form onSubmit={handleSubmit} className="flex h-[100px] w-[1500px] bg-white shadow rounded-full p-4 gap-10">
      <div className="ml-16">
        <label className="flex text-sm font-medium text-black mb-1">Origen</label>
        <AirportAutocomplete onSelectAirport={setOrigin} />
      </div>

      <div>
        <label className="flex text-sm font-medium text-black mb-1">Destino</label>
        <AirportAutocomplete onSelectAirport={setDestination} />
      </div>

      <div>
        <label className="flex text-sm font-medium text-black mb-1">Fecha</label>
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="flex w-[300px] bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition text-center items-center justify-center ml-40"
      >
        Buscar vuelos
      </button>
    </form>
  );
};

export default FlightSearchForm;