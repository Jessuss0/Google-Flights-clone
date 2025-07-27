const mockFlightsResponse = {
  status: true,
  timestamp: 1753657003626,
  data: {
    context: {
      status: 'incomplete',
      sessionId: 'mocked-session-id',
      totalResults: 10
    },
    destinationImageUrl: 'https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg',
    filterStats: {
      total: 10,
      duration: { min: 470, max: 1630 },
      multipleCarriers: { rawMinPrice: null, minPrice: '' },
      stopPrices: {
        direct: { minPrice: '$738' },
        one: { minPrice: '$812' },
        twoOrMore: { minPrice: '$885' }
      },
      hasCityOpenJaw: false,
      airports: [
        {
          city: 'London',
          airports: [
            { id: 'LHR', name: 'Heathrow' },
            { id: 'LGW', name: 'Gatwick' },
            { id: 'STN', name: 'Stansted' }
          ]
        },
        {
          city: 'New York',
          airports: [
            { id: 'JFK', name: 'JFK' },
            { id: 'EWR', name: 'Newark' }
          ]
        }
      ],
      alliances: [
        { id: -32000, name: 'OneWorld' },
        { id: -31998, name: 'SkyTeam' }
      ],
      carriers: [
        {
          id: -32480,
          alternateId: 'BA',
          name: 'British Airways',
          logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/BA.png',
          minPrice: '$1,401'
        },
        {
          id: -32171,
          alternateId: 'B6',
          name: 'jetBlue',
          logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/B6.png',
          minPrice: '$1,593'
        },
        {
          id: -31927,
          alternateId: 'AT',
          name: 'Royal Air Maroc',
          logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/AT.png',
          minPrice: '$886'
        },
        {
          id: -31901,
          alternateId: 'SK',
          name: 'Scandinavian Airlines',
          logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/SK.png',
          minPrice: '$738'
        }
      ]
    },
    flightsSessionId: 'eb244abf-4c87-4ccc-8ed6-ffe420d5ca3d',
    itineraries: [
      {
        id: 'mock-1',
        price: { raw: 738, formatted: '$738' },
        legs: [
          {
            durationInMinutes: 450,
            departure: { datetime: '2025-08-01T17:30:00' },
            arrival: { datetime: '2025-08-02T13:15:00' },
            carriers: [{ name: 'Scandinavian Airlines' }]
          }
        ]
      },
      {
        id: 'mock-2',
        price: { raw: 1401, formatted: '$1,401' },
        legs: [
          {
            durationInMinutes: 350,
            departure: { datetime: '2025-08-01T19:40:00' },
            arrival: { datetime: '2025-08-01T22:30:00' },
            carriers: [{ name: 'British Airways' }]
          }
        ]
      },
      {
        id: 'mock-3',
        price: { raw: 1593, formatted: '$1,593' },
        legs: [
          {
            durationInMinutes: 373,
            departure: { datetime: '2025-08-01T08:15:00' },
            arrival: { datetime: '2025-08-01T11:28:00' },
            carriers: [{ name: 'jetBlue' }]
          }
        ]
      }
    ],
    messages: []
  }
};

export default mockFlightsResponse;