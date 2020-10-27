import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import image from './images/image.png';
import Card from './Components/Card'

// active": "10879",
// "confirmed": "211443",
// "deaths": "1042",
// "deltaconfirmed": "0",
// "deltadeaths": "0",
// "deltarecovered": "0",
// "lastupdatedtime": "24/10/2020 21:30:46",
// "migratedother": "1",
// "recovered": "199521",
// "state": "Bihar",
// "statecode": "BR",
// "statenotes"
const App =  () => {

    const[active, setActive] = useState("");
    const[confirmed, setConfirmed] = useState("");
    const[deaths, setDeaths] = useState("");
    const[recovered, setRecovered] = useState("");
    const[deltaconfirmed, setDeltaconfirmed] = useState("");
    const[deltadeaths, setDeltadeaths] = useState("");
    const[deltarecovered, setDeltaRecovered] = useState("");
    const[state, setState] = useState("");
    const[updateddate, setLastupdateddate] = useState("");
    const[lastupdatedtime, setLastupdatedtime] = useState("");

    // const datas = [confirmed, deaths, recovered];
    // const deltaData = [deltaconfirmed, deltadeaths, deltarecovered];
    // const cardName = ["Confirmed", "Deaths", "Recovered"];

    const apiURL = "https://api.covid19india.org/data.json";
    useEffect(() =>{
        fetchData();
    },[]);
    const fetchData = async() =>{
        const {data:{ statewise } } = await axios.get(apiURL);
        setActive(statewise[11].active);
        setConfirmed(statewise[11].confirmed);
        setDeaths(statewise[11].deaths);
        setRecovered(statewise[11].recovered);
        setDeltaconfirmed(statewise[11].deltaconfirmed);
        setDeltadeaths(statewise[11].deltadeaths);
        setDeltaRecovered(statewise[11].deltarecovered);
        setState(statewise[11].state);
        setLastupdateddate(statewise[11].lastupdatedtime.slice(0,10));
    }

    return ( 
          <div class="container">
          <img src={image} alt="COVID-19" style={{padding: 20}}/>
          <h1>{state}</h1>
          <div class= "secondContainer">
          <Card name ={"Active"} value ={active} updateTime = {updateddate}/>
          <Card name ={"Confirmed"} value ={confirmed} value2={deltaconfirmed} updateTime = {updateddate}/>
          <Card name ={"Recovered"} value ={recovered} value2={deltarecovered} updateTime = {updateddate}/>
          <Card name ={"Deaths"} value ={deaths} value2={deltadeaths} updateTime = {updateddate}/>
          
          </div>  
          </div>
      );
}

export default App;