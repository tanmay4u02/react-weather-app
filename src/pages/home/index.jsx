import { useState } from "react";
import Container from "../../components/Container";
import Search from "../../components/Search";
import Weather from "../../components/weather";

const Home = () => {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();

  const handleSeacrch = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=fe4feefa8543e06d4f3c66d92c61b69c"
      );
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-auto w-2/5 p-2 mt-10">
      <Search
        placeholder="Enter City"
        setCity={setCity}
        onSearch={handleSeacrch}
      />
      <Container>
        <Weather weather={weatherData} />
      </Container>
    </div>
  );
};

export default Home;
