// import { useState, useEffect } from "react";
// import StarRating from "./starrating";

// function Villager() {
//   const [villager, setVillager] = useState([]);
//   const [loading, setLoading] = useState(true);

//   let randomId = () => {
//     let random = Math.round(Math.random() * 391) + 1;
//     let url = `https://acnhapi.com/v1a/villagers/${random}`;
//     return url;
//   };

//   const fetchData = async () => {
//     const results = await fetch(randomId());
//     results.json().then((data) => {
//       //   console.log(json);
//       setVillager(data);
//       setLoading(false);
//       console.log("COW", data);
//     });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <>
//     <div>
//     <img src={villager.image_uri} alt="villager" />
//       <p>{villager.name["name-USen"]}</p>
//     </div>
     
//       <button onClick={fetchData}>New Villager</button>
//     </>
//   );
// }

// export default Villager;

// four states of react:
// havent done anything, inital state
// waiting. flicker of missing data, then its in: not a good look to have a flicker of bad
// we have succeeded in getting the data
// handling errors

// console.log("Villagers?", villagers[0].name["name-USen"]);

// villager.name["name-USen"]

// const objSe = () => {
//   // return Object.keys(Object.entries(villagers)).map(x => {console.log("catspat: ",x)})
//   return Object.entries(Object.entries(villagers))
// }
// const objSe = Object.values(Object.values(villagers));
// console.log("How Deep?", objSe);
// console.log(
//   objSe.forEach((element, index, array) => {
//     console.log(element.image_uri);
//   })
// );
// const looping = () => {
//   for (let i = 0; i < objSe.length; i++) {
//     for(let j=0; j< objSe[i].length; j++){
//     console.log(objSe[i][j])
//     const inner = objSe[i][j];
//     inner.filter(k =>)
//     }
//   }
// };

// looping()
