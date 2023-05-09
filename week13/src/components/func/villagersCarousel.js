import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Villagers from "./villagers.js";

function VillagerCarousel() {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);

  let url = "https://acnhapi.com/v1a/villagers";

  const fetchData = async () => {
    const results = await fetch(url);
    results.json().then((data) => {
      setVillagers(data);

      console.log("COW", data);
    });
  }

    useEffect(() => {
      fetchData();
      setLoading(false);
    }, []);

    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <Carousel fade>
          {villagers.map((villagers) => (
            <Carousel.Item key={villagers.id}>
              <img className="d-block w-20" src={villagers.icon_uri} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Villagers />
      </>
    );
  };


export default VillagerCarousel;
