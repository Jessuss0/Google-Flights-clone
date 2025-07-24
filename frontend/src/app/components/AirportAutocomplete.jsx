"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const AirportAutocomplete = ({ onSelectAirport }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const host = process.env.REACT_APP_RAPIDAPI_HOST;
  const key = process.env.REACT_APP_RAPIDAPI_KEY;

  console.log(host, key)
  const fetchSuggestions = async (input) => {
    if (!input) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport`,
        {
          params: { query: input },
          headers: {
            "X-RapidAPI-Key": '51c434fef3msh27c8271147e6f64p1e232ajsn7d5b4295cd21',
            "X-RapidAPI-Host": 'sky-scrapper.p.rapidapi.com',
          },
        }
      );
      console.log(res.data);
      setSuggestions(res.data.data || []);
    } catch (err) {
      console.error("Error fetching airports:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length >= 2) {
        fetchSuggestions(query);
      } else {
        setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (airport) => {
    setQuery(`${airport.name} (${airport.iata_code})`);
    setSuggestions([]);
    onSelectAirport(airport);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full border p-2 rounded"
        placeholder="Buscar aeropuerto"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p className="text-sm text-gray-500 mt-1">Cargando...</p>}

      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow max-h-60 overflow-y-auto">
          {suggestions.map((airport) => (
            <li
              key={airport.entityId}
              onClick={() => handleSelect(airport)}
              className="p-2 hover:bg-gray-100 cursor-pointer text-black"
            >
              {airport.navigation.localizedName} ({airport.entityId}) – {airport?.presentation?.title}, {airport.presentation.subtitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportAutocomplete;