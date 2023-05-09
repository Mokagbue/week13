import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import VillagersCarousel from "./villagersCarousel";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [villager, setVillager] = useState([]);
  const [loading, setLoading] = useState(true);

  let randomId = () => {
    let random = Math.round(Math.random() * 391) + 1;
    let url = `https://acnhapi.com/v1a/villagers/${random}`;
    return url;
  };

  const fetchData = async () => {
    const results = await fetch(randomId());
    results.json().then((data) => {
      setVillager(data);
      setLoading(false);
      console.log("DATA!: ", data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
      <>
      <div><h1>Rate a Random Villager</h1></div>
        <div>
          <img src={villager.image_uri} alt="villager" className="mt-3"/>
          <p className="d-flex justify-content-center border">{villager.name["name-USen"]}</p>
        </div>
        <div className="d-flex justify-content-center">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  size={25}
                  color={
                    ratingValue <= (hover || rating) ? "#fff563" : "#c48d3f"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          
        </div>
        <div>
        <p>Current rating: {rating || "0"}</p>
        </div>
        <div>
          <button onClick={fetchData} onMouseDown={() => setRating(0)} className="link-button">
            New Villager
          </button>
        </div>
          <VillagersCarousel />
      </>
  );
};

export default StarRating;
