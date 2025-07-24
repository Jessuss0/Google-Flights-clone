import axios from "axios";

const host = process.env.REACT_APP_RAPIDAPI_HOST;
const key = process.env.REACT_APP_RAPIDAPI_KEY;

// export const searchAirports = async (query) => {
//   return axios.get(`https://${host}/searchAirport`, {
//     params: { query },
//     headers: { "x-rapidapi-key": key, "x-rapidapi-host": host }
//   }).then(res => res.data);
// };

export const searchAirport = {
  method: 'GET',
  url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
  params: {
    query: 'new',
    locale: 'en-US'
  },
  headers: {
    'x-rapidapi-key': key,
    'x-rapidapi-host': host
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const searchFlights = async ({ origin, destination, date }) => {
  return axios.get(`https://${host}/searchFlights`, {
    params: { origin, destination, date },
    headers: { "x-rapidapi-key": key, "x-rapidapi-host": host }
  }).then(res => res.data);
};