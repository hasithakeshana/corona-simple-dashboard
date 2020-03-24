import React,{useState,useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
const axios = require('axios');

const ChartsPage = () => {

    const [global_new, setGlobalNewCases] = useState();
    const [global_total, setGlobalTotalCases] = useState();
    const [global_deaths, setGlobalDeaths] = useState();
    const [global_new_deaths, setGlobalNewDeaths] = useState();
    const [global_recovered, setGlobalRecovered] = useState();

    useEffect( () => {
       
      axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
      .then(response => {
          console.log(response.data.data);
         
          
      setGlobalNewCases(response.data.data.global_new_cases);
      setGlobalTotalCases(response.data.data.global_total_cases);
      setGlobalDeaths(response.data.data.global_deaths);
      setGlobalNewDeaths(response.data.data.global_new_deaths);
      setGlobalRecovered(response.data.data.global_recovered);

      })
    
      
    },[])

 const state = {
  dataDoughnut: {
    labels: ["Global Total Cases ", "Global New Cases ", "Global Deaths ", "Global New Deaths ", "Global Recovered "],
    datasets: [
      {
        data: [global_total, global_new, global_deaths, global_new_deaths, global_recovered],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  }
}

  return (
    <MDBContainer>
       <h2 className="h1-responsive font-weight-bold text-center my-5">
        COVID -19 Global Statistics 
      </h2>
      <Doughnut data={state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>

    );
  
}

export default ChartsPage;