import { useState } from "react";
import Container from "../../components/Container";
import Search from "../../components/Search";

const Home = () => {
  const [city, setCity] = useState();

  return (
    <div className="m-auto w-2/5 p-2 mt-10">
      <Search placeholder="Enter City" setCity={setCity} />
      <Container></Container>
    </div>
  );
};

export default Home;
