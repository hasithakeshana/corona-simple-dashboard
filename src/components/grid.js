import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
const axios = require('axios');
const EcommercePage = () => {

  
  const [local_new, setNewCases] = useState();
  const [local_total, setTotalCases] = useState();
  const [total_hospitals, setTotalHospitals] = useState();
  const [local_recovered, setRecovered] = useState();
  const [total_deaths, setTotalDeaths] = useState();
  const [total_new_deaths, setNewDeaths] = useState();
  const [last_updated_date_time, setUpdateTime] = useState();

  useEffect( () => {
       
    axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
    .then(response => {
        console.log(response.data.data);
       
        
    setNewCases(response.data.data.local_new_cases);
    setTotalCases(response.data.data.local_total_cases);
    setTotalHospitals(response.data.data.local_total_number_of_individuals_in_hospitals);
    setRecovered(response.data.data.local_recovered);
    setTotalDeaths(response.data.data.local_deaths);
    setNewDeaths(response.data.data.local_new_deaths);
    setUpdateTime(response.data.data.update_date_time);


    

    })
  
    
  },[])



//  <MDBIcon icon="first-aid"  size = "3x"/>



  return (
    <section className="text-center my-5">




      <h2 className="h1-responsive font-weight-bold text-center my-5">
        COVID -19 Statistics - Sri Lanka
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
      Coronaviruses are a large family of viruses which may cause illness in animals or humans. In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.
      </p>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
        <MDBCard className="purple-gradient">
            <MDBCardBody className="white-text">
              <h5 className="mb-4">Local New Cases</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                <MDBIcon icon="user-plus" size="3x"/>
                </div>
              </div>
  <h2 className="font-weight-bold my-4">{local_new}</h2>
              <p>
              Last Updated : {last_updated_date_time}
              </p>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard className="purple-gradient">
            <MDBCardBody className="white-text">
              <h5 className="mb-4">Local Total Cases</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                <MDBIcon icon="hand-holding-heart" size= "3x" />
                </div>
              </div>
  <h2 className="font-weight-bold my-4">{local_total}</h2>
              <p>
              Last Updated : {last_updated_date_time}
              </p>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
        <MDBCard className="purple-gradient">
            <MDBCardBody className="white-text">
              <h5 className="mb-4">Total Inside Hospitals</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                <MDBIcon icon="first-aid"  size = "3x"/>
                </div>
              </div>
  <h2 className="font-weight-bold my-4">{total_hospitals}</h2>
              <p>
              Last Updated : {last_updated_date_time}
              </p>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <br></br>
      <br></br>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <h5 className="mb-4">Local Recovered</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                <MDBIcon icon="dove" size ="3x" />
                </div>
              </div>
  <h2 className="font-weight-bold my-4">{local_recovered}</h2>
              <p>
              Last Updated : {last_updated_date_time}
              </p>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard className="purple-gradient">
            <MDBCardBody className="white-text">
              <h5 className="mb-4">local Deaths</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                <MDBIcon icon="heartbeat" size="3x"/>
                </div>
              </div>
  <h2 className="font-weight-bold my-4">{total_deaths}</h2>
              <p>
              Last Updated : {last_updated_date_time}
              </p>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <h5 className="mb-4">Local New Deaths</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                <MDBIcon icon="khanda" size="3x" />
                </div>
              </div>

  <h2 className="font-weight-bold my-4">{total_new_deaths}</h2>
              <p>
              Last Updated : {last_updated_date_time}
              </p>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default EcommercePage;