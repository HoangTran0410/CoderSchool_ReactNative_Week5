const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
const apiLink = `http://api.openweathermap.org/data/2.5/weather`;

const fakeData = [{
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "sys": {
    "message": 0.0223,
    "country": "GB",
    "sunrise": 1398055845,
    "sunset": 1398107249
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "cmc stations",
  "main": {
    "temp": 290.04,
    "humidity": 70,
    "pressure": 1003,
    "temp_min": 287.04,
    "temp_max": 293.15
  },
  "wind": {
    "speed": 0.51,
    "gust": 3.6,
    "deg": 93
  },
  "rain": {
    "1h": 1.02
  },
  "clouds": {
    "all": 56
  },
  "dt": 1398100214,
  "id": 2643743,
  "name": "London",
  "cod": 200
}]

const F_to_C = (F) => {
  return (F - 32) * 5 / 9;
}

const getWeather = async (latitude, longitude, imgUrl = "") => {
  const api = `${apiLink}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  try {
    const response = await fetch(api);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
}

const getInfoAreaData = (weatherData) => [
  { type: 'Feels Like', value: F_to_C(weatherData.main.temp) + "°" },
  { type: 'Wind', value: weatherData.wind.speed + "MPH" },
  { type: 'Humidity', value: weatherData.main.humidity + "%" },
]


export {
  getWeather,
  fakeData
}