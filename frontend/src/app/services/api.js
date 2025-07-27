import axios from "axios";

const host = process.env.REACT_APP_RAPIDAPI_HOST;
const key = process.env.REACT_APP_RAPIDAPI_KEY;

// export const searchAirports = async (query) => {
//   return axios.get(`https://${host}/searchAirport`, {
//     params: { query },
//     headers: { "x-rapidapi-key": key, "x-rapidapi-host": host }
//   }).then(res => res.data);
// };

// export const searchAirport = {
//   method: 'GET',
//   url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
//   params: {
//     query: 'new',
//     locale: 'en-US'
//   },
//   headers: {
//     'x-rapidapi-key': key,
//     'x-rapidapi-host': host
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFlights = async ({ originSkyId, destinationSkyId, originEntityId, destinationEntityId, departDate }) => {
  const options = {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
    params: {
      originSkyId,
      destinationSkyId,
      originEntityId,
      destinationEntityId,
      cabinClass: 'economy',
      adults: '1',
      sortBy: 'best',
      currency: 'USD',
      market: 'en-US',
      countryCode: 'US',
      date: departDate
    },
    headers: {
      'x-rapidapi-key': 'ef85cbd4b5mshaac28f7d86fa3dep1efd0cjsnbab025636679',
    'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log("Resultado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error en la búsqueda:", error.response?.data || error.message);
  }
};