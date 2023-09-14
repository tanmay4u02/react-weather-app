import { useState } from "react";
import { toast } from "react-toastify";
import Container from "../../components/Container";
import Search from "../../components/Search";
import Weather from "../../components/weather";
import api from "../../constants/api";
import WeatherGlobe from "./WeatherGlobe";
import Branding from "./Branding";

const Home = () => {
  const [city, setCity] = useState();
  const [labelsData, setLabelsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState();

  const handleSeacrch = async (e) => {
    e.preventDefault();

    setWeatherData(null);
    if (!city || city === "") {
      toast.error("Please enter a City!");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${api.base_url}/weather?q=${city}&appid=${api.key}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(data);
      setWeatherData(data);
      setLabelsData([
        ...labelsData,
        {
          lat: data.coord.lat,
          lon: data.coord.lon,
          name: data.name,
          weatherData: data,
        },
      ]);
      setLoading(false);
      setCity("");
    } catch (error) {
      console.log(error.message);
      if (error.message === "404") {
        toast.error("Please enter a valid city");
        setCity(null);
      } else if (error.message === "401") {
        toast.error("Exceeded API limit for the day, come back tomorrow.");
      } else {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-row flex-wrap-reverse ">
        <WeatherGlobe
          labelsData={labelsData}
          setWeatherData={setWeatherData}
          weatherData={weatherData}
        />
        <div
          className="p-2 mt-32 mx-auto lg:ml-24 lg:mr-auto lg:my-auto"
          style={{ width: "380px" }}
        >
          <Search
            placeholder="Enter City"
            city={city}
            setCity={setCity}
            onSearch={handleSeacrch}
            loading={loading}
          />
          <Container>
            <Weather weather={weatherData} loading={loading} />
          </Container>
        </div>
      </div>
      {weatherData && <Branding />}
    </>
  );
};

export default Home;
