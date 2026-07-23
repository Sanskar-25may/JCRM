export interface LocationData {
  [country: string]: {
    [state: string]: string[];
  };
}

export const locationData: LocationData = {
  India: {
    Karnataka: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi', 'Davangere'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad'],
    'Delhi NCR': ['New Delhi', 'Noida', 'Gurugram', 'Ghaziabad', 'Faridabad'],
    'Uttar Pradesh': ['Lucknow', 'Noida', 'Kanpur', 'Varanasi', 'Agra', 'Prayagraj'],
    Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
    Punjab: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar'],
  },
  'United States': {
    California: ['San Francisco', 'Los Angeles', 'San Jose', 'San Diego', 'Sacramento'],
    'New York': ['New York City', 'Buffalo', 'Albany', 'Rochester'],
    Texas: ['Austin', 'Dallas', 'Houston', 'San Antonio'],
    Florida: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
    Washington: ['Seattle', 'Bellevue', 'Tacoma', 'Spokane'],
  },
  'United Kingdom': {
    England: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol'],
    Scotland: ['Edinburgh', 'Glasgow', 'Aberdeen'],
    Wales: ['Cardiff', 'Swansea'],
  },
  Canada: {
    Ontario: ['Toronto', 'Ottawa', 'Hamilton', 'Kitchener'],
    'British Columbia': ['Vancouver', 'Victoria', 'Burnaby'],
    Quebec: ['Montreal', 'Quebec City'],
  },
  Australia: {
    'New South Wales': ['Sydney', 'Newcastle'],
    Victoria: ['Melbourne', 'Geelong'],
    Queensland: ['Brisbane', 'Gold Coast'],
  },
  'United Arab Emirates': {
    Dubai: ['Dubai Marina', 'Downtown Dubai', 'Jumeirah'],
    'Abu Dhabi': ['Abu Dhabi City', 'Al Ain'],
    Sharjah: ['Sharjah City'],
  },
};
