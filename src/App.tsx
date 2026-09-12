import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Loading from "./components/Loading";
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";
import type { ITechnology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("technologies.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data from json");
        setTechnologies(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      <Banner />

      {isLoading ? (
        <Loading />
      ) : (
        <Technologies technologies={technologies} />
      )}

      <Footer />
    </>
  );
}

export default App;
