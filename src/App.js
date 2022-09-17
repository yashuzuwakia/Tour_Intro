import React,{useState,useEffect} from "react";
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

import "./style.css";

export default function App() {

  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const fetchTours =  async () => {
    setLoading(true);

    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
        setLoading(false);
    }
    }

    const removeTour = (id) => {
      const newTours = tours.filter((tour)=>tour.id!==id);
      setTours(newTours);
    } 

   useEffect(()=>{
      fetchTours();
   },[] )

  if(loading){
  return (
    <main>
      <Loading/>
    </main>
  );
}
if(tours.length===0){
  return (
    <main>
      <h2>No tours Left</h2>
    </main>
  );
}
return (
  <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
)

}
