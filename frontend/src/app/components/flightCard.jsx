"use client"
import React from 'react';

const FlightCard = ({ flight }) => {
  const { precio, moneda, salida, llegada, duracion, aerolinea } = flight;

  const formatHora = (isoString) => new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  console.log("Flight data:", flight);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between gap-10 w-[1000px]">
      {/* Aerolínea */}
      <div className="flex-1 min-w-[120px]">
        <p className="text-sm text-black">Aerolínea</p>
        <p className="font-semibold text-gray-400">{aerolinea || 'Desconocida'}</p>
      </div>

      {/* Hora de salida */}
      <div className="flex-1 min-w-[100px]">
        <p className="text-sm text-gray-500">Salida</p>
        <p className='text-gray-700'>{formatHora(salida)}</p>
      </div>

      {/* Hora de llegada */}
      <div className="flex-1 min-w-[100px]">
        <p className="text-sm text-gray-500">Llegada</p>
        <p className='text-gray-700'>{formatHora(llegada)}</p>
      </div>

      {/* Duración */}
      <div className="flex-1 min-w-[100px]">
        <p className="text-sm text-gray-500">Duración</p>
        <p className='text-gray-700'>{Math.floor(duracion / 60)}h {duracion % 60}m</p>
      </div>

      {/* Precio */}
      <div className="flex-1 min-w-[100px] text-end">
        <p className="text-sm text-gray-500">Precio</p>
        <p className="text-blue-600 font-bold text-lg">
          {`${moneda} ${precio}`}
        </p>
      </div>
    </div>
  );
};

export default FlightCard;