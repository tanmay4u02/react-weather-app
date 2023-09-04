import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const WeatherGlobe = ({ labelsData }) => {
  const globRef = useRef();

  useEffect(() => {
    const MAP_CENTER = { lat: 0, lng: 0, altitude: 2.5 };
    globRef.current.pointOfView(MAP_CENTER, 0);
  }, []);

  useEffect(() => {
    labelsData &&
      globRef.current.pointOfView(
        { lat: labelsData[0].lat, lng: labelsData[0].lon, altitude: 2.3 },
        0
      );
  }, [labelsData]);

  return (
    <Globe
      ref={globRef}
      width={window.innerWidth / 2}
      height={window.innerHeight}
      backgroundColor="#ffffff00"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      labelsData={labelsData}
      labelLat={(d) => d.lat}
      labelLng={(d) => d.lon}
      labelText={(d) => d.name}
      labelSize={(d) => 4}
      labelDotRadius={(d) => 1}
      labelColor={() => "black"}
      labelResolution={2}
      pointOfView={[{ lat: 18.5196, lng: 73.8553, altitude: 2.5 }]}
    />
  );
};

export default WeatherGlobe;
