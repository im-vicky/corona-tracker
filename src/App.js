import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';


const App =  () => {

    const [bihar, setBihar] = useState(null);
    const apiURL = "https://api.covid19india.org/data.json";
    useEffect(() =>{
        fetchData();
    },[]);
    const fetchData = async() =>{
        const response = await axios.get(apiURL);
        setBihar(response.data.statewise);
        console.log(response.data.statewise);
        // console.log(Object.keys(response.data.BR.districts));
    }
    
    const objArray = ["Active","Recovered","Confirmed", "Deaths"];

    return (
        bihar &&  
          <div>Data</div>
      );
}

export default App;