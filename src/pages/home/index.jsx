import { useState } from "react";
import { toast } from "react-toastify";
import Container from "../../components/Container";
import Search from "../../components/Search";
import Weather from "../../components/weather";
import api from "../../constants/api";

const Home = () => {
  const [city, setCity] = useState();
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState();

  const handleSeacrch = async () => {
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
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      if (error.message === "404") {
        toast.error("Please enter a valid city");
      } else if (error.message === "401") {
        toast.error("Exceeded API limit for the day, come back tomorrow.");
      } else {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
  };
  return (
    <div className="m-auto p-2 mt-16" style={{ width: "380px" }}>
      <Search
        placeholder="Enter City"
        setCity={setCity}
        onSearch={handleSeacrch}
        loading={loading}
      />
      <Container>
        <Weather weather={weatherData} loading={loading} />
      </Container>
    </div>
  );
};

export default Home;
