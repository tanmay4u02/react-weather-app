import sunny from "../assets/icons/sunny.svg";
import night from "../assets/icons/night.svg";
import day from "../assets/icons/day.svg";
import cloudyNight from "../assets/icons/cloudy-night.svg";
import cloudy from "../assets/icons/cloudy.svg";
import perfectDay from "../assets/icons/perfect-day.svg";
import rain from "../assets/icons/rain.svg";
import rainNight from "../assets/icons/rain-night.svg";
import storm from "../assets/icons/storm.svg";

const weatherIcons = {
  "01d": sunny,
  "01n": night,
  "02d": day,
  "02n": cloudyNight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfectDay,
  "04n": cloudyNight,
  "09d": rain,
  "09n": rainNight,
  "10d": rain,
  "10n": rainNight,
  "11d": storm,
  "11n": storm,
  "13d": "http://openweathermap.org/img/wn/13d@2x.png",
  "13n": "http://openweathermap.org/img/wn/13d@2x.png",
  "50d": "http://openweathermap.org/img/wn/50d@2x.png",
  "50n": "http://openweathermap.org/img/wn/50d@2x.png",
};

export default weatherIcons;
