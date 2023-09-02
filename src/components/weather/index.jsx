import styled from "styled-components";
import Parameter from "./Parameter";
import weatherIcons from "../../constants/weatherIcons";
import sun from "../../assets/icons/sun.svg";
import humidity from "../../assets/icons/humidity.svg";
import wind from "../../assets/icons/wind.svg";
import pressure from "../../assets/icons/pressure.svg";
import Spinner from "../../assets/Spinner";

const Location = styled.div`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Weather = ({ weather, loading = true }) => {
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      {loading ? (
        <div className="flex h-full">
          <div className="m-auto" role="status">
            <Spinner />
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : weather ? (
        <>
          <WeatherContainer>
            <Condition>
              <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
              {`  |  ${weather?.weather[0].description}`}
            </Condition>
            <WeatherIcon src={weatherIcons[weather?.weather[0].icon]} />
          </WeatherContainer>
          <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
          <WeatherInfoContainer>
            <Parameter
              name={isDay ? "sunset" : "sunrise"}
              icon={sun}
              value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
            />
            <Parameter
              name="humidity"
              icon={humidity}
              value={weather?.main?.humidity}
            />
            <Parameter name="wind" icon={wind} value={weather?.wind?.speed} />
            <Parameter
              name="pressure"
              icon={pressure}
              value={weather?.main?.pressure}
            />
          </WeatherInfoContainer>
        </>
      ) : (
        <div className="flex h-full">
          <span className="m-auto">Search for a City</span>
        </div>
      )}
    </>
  );
};

export default Weather;
