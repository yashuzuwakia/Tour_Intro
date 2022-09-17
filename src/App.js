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
    
    console.log(tours);
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
return (
  <main>
    <Tours/>
  </main>
)

}
