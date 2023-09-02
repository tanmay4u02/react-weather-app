import Globe from "react-globe.gl";

const WeatherGlobe = ({ labelsData }) => {
  return (
    <Globe
      width={550}
      height={742}
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
