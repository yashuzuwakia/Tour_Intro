import React,{useState,useEffect} from "react";
import Tours from './Tours';
import Loading from './Loading';

import "./style.css";

export default function App() {

  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
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
