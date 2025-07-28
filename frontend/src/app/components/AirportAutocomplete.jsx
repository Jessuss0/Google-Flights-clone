"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const AirportAutocomplete = ({ onSelectAirport, placeholder }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const skipNextFetch = useRef(false); // 🧠 esto evita la petición no deseada

  const fetchSuggestions = async (input) => {
    if (!input) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport`,
        {
          params: { query: input },
          headers: {
            'x-rapidapi-key': 'ef85cbd4b5mshaac28f7d86fa3dep1efd0cjsnbab025636679',
    'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
          },
        }
      );
      setSuggestions(res.data.data || []);
    } catch (err) {
      console.error("Error fetching airports:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (skipNextFetch.current) {
      skipNextFetch.current = false;
      return; // 🚫 salta esta ejecución
    }

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
    skipNextFetch.current = true;
    setQuery(`${airport?.navigation?.localizedName} (${airport?.entityId})`);
    setSuggestions([]);
    onSelectAirport(airport);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full border p-2 rounded text-black"
        placeholder={placeholder || "Buscar aeropuerto"}
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
              {airport.navigation.localizedName} ({airport.entityId}) –{" "}
              {airport.presentation.title}, {airport.presentation.subtitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportAutocomplete;