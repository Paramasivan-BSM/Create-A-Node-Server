
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [Fdata,setFdata]=useState([]);

  useEffect(()=>{
    async function fetchData(){
      const fetchResult = await fetch("/api");
      const fetchdata = await fetchResult.json();
      console.log(fetchdata);
      setFdata(fetchdata);
    }
    fetchData();

    
  },[])


  return (
    <>
    {Fdata.map((data)=>{
      return(
        <div key={data.id}>
        <h1>{data.Name}</h1>
        <img src={data.img}/>


        
        </div>
      )
    })}
    </>
     
  )
}

export default App
