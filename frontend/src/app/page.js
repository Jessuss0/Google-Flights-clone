"use client"
import FlightSearchForm from "./components/SearchFligth";
import FlightsPage from "./components/Flights";
import { useState } from "react";
import { fetchFlights } from "./services/api";
import mockFlightsResponse from "./backupFlights";

export default function Home() {
  const [flights, setFlights] = useState([]);

  const handleFlightSearch = async ({ originSkyId, destinationSkyId, originEntityId, destinationEntityId, departDate }) => {
    console.log("Buscar vuelos:", originSkyId, destinationSkyId, originEntityId, destinationEntityId, departDate);

    const data = await fetchFlights({
      originSkyId, destinationSkyId, originEntityId, destinationEntityId, departDate
    });
    console.log("Vuelos encontrados:", data);

    // const data = mockFlightsResponse; // Usar datos de prueba

    const itineraries = data?.data?.itineraries || [];

    const vuelosFormateados = itineraries.map((item) => {
      const leg = item.legs?.[0] || {};
      console.log(leg.carriers.marketing[0].name);
      return {
        precio: item.price?.raw || 0,
        moneda: "USD",
        salida: leg.departure,
        llegada: leg.arrival,
        duracion: leg.durationInMinutes || 0,
        aerolinea: leg.carriers.marketing[0].name || "Desconocida"
      };
    });

    setFlights(vuelosFormateados);
  };

  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen gap-10 p-8 sm:p-20">
      <h2 className="text-7xl text-center font-serif font-bold text-gray-600">Google flight Clone</h2>
      <FlightSearchForm onSearch={handleFlightSearch} />
      {flights && <FlightsPage vuelos={flights} />}
    </div>
  );
}
