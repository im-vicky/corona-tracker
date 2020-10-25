import React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import axios from 'axios';
import CountUp from 'react-countup';
import './App.css';
import image from './images/image.png';

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
    const[lastupdatedtime, setLastupdatedtime] = useState("");

    const datas = [confirmed, deaths, recovered];
    const deltaData = [deltaconfirmed, deltadeaths, deltarecovered];
    const cardName = ["Confirmed", "Deaths", "Recovered"];

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
        setLastupdatedtime(statewise[11].lastupdatedtime);
    }

    const addcard = datas.map((data, key) => {
        return <Grid container spacing={3}  justify="center">
                    <Grid item xs={12} md={3} component={Card} spacing={3}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {cardName[key]}
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={data} duration={2.75} separator="," />
                <Typography variant="h6">
                <CountUp start={0} end={deltaData[key]} duration={2.75} separator="," />
                </Typography>
              </Typography>
              <Typography color="textSecondary">
                {lastupdatedtime}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
    })

    return ( 
          <div>
          <img src={image} alt="COVID-19" />
          <Typography variant="h1">{state}</Typography>
          {addcard}
          </div>
      );
}

export default App;