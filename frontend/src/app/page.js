"use client"
import FlightSearchForm from "./components/SearchFligth";
import FlightsPage from "./components/Flights";

export default function Home() {
  const handleFlightSearch = ({ originSkyId, destinationSkyId, originEntityId, destinationEntityId, departDate }) => {
    console.log("Buscar vuelos:", originSkyId, destinationSkyId, originEntityId, destinationEntityId, departDate);
    // acá podés llamar a la función que consulta la API
  };
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 sm:p-20">
      <h2>Soy un clon de google flight</h2>
      <FlightSearchForm onSearch={handleFlightSearch}/>
      <FlightsPage vuelos={[
        {
          precio: 150,
          moneda: 'USD',
          salida: '2025-08-01T10:00:00Z',
          llegada: '2025-08-01T14:00:00Z',
          aerolinea: 'Aerolínea A',
          duracion: 240
        },
        {
          precio: 200,
          moneda: 'USD',
          salida: '2025-08-01T11:00:00Z',
          llegada: '2025-08-01T15:00:00Z',
          aerolinea: 'Aerolínea B',
          duracion: 240
        }
      ]}/>
    </div>
  );
}
