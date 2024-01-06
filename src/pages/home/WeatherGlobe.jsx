import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { toast } from "react-toastify";

const WeatherGlobe = ({ labelsData, setWeatherData, weatherData }) => {
  const globRef = useRef();
  
  useEffect(() => {
    const MAP_CENTER = { lat: 0, lng: 0, altitude: 2.5 };
    globRef.current.pointOfView(MAP_CENTER, 0);
  }, []);

  useEffect(() => {
    weatherData &&
      globRef.current.pointOfView(
        {
          lat: weatherData.coord.lat,
          lng: weatherData.coord.lon,
          altitude: 2.3,
        },
        0
      );
  }, [weatherData]);

  return (
    <Globe
      ref={globRef}
      width={
        window.innerWidth > 750 ? window.innerWidth / 2 : window.innerWidth
      }
      height={
        window.innerWidth > 750 ? window.innerHeight : window.innerHeight / 2
      }
      backgroundColor="#ffffff00"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      labelsData={labelsData}
      labelLat={(d) => d.lat}
      labelLng={(d) => d.lon}
      labelText={(d) => d.name}
      labelSize={(d) => 2}
      labelDotRadius={(d) => 0.5}
      labelColor={(d) => "black"}
      pointOfView={[{ lat: 18.5196, lng: 73.8553, altitude: 2.5 }]}
      labelResolution={3}
      labelLabel={(d) => "click"}
      onLabelClick={(label) => {
        if (labelsData.length > 1 || !weatherData)
          setWeatherData(label.weatherData);
        else toast.info("Add multiple cities on Globe to switch between them!");
      }}
    />
  );
};

export default WeatherGlobe;
