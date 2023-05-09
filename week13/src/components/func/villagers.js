import { useState, useEffect } from "react";

function Villagers() {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);

  let url = "https://acnhapi.com/v1a/villagers";

  const fetchData = async () => {
    const results = await fetch(url);
    results.json().then((data) => {
      setVillagers(data);
    //   console.log("COW", data);

      let htmlString = () => {
        const main = document.getElementById("main");
        let icons = "";
        for (let i = 0; i < data.length; i++) {
          icons += `<img className="d-block w-100" src="${data[i].icon_uri}" />`;
        }
        main.innerHTML = icons;
      };
      htmlString();
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
     <div id="main" className="d-flex sm={12} flex-wrap"></div>
    </>
  );
}

export default Villagers;
