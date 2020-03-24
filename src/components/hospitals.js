import React , { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
const axios = require('axios');

const DatatablePage = () => {

    const [rows, setRows] = useState();


   useEffect( () => {
       

    

    axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
        .then(response => {
            //console.log(response.data.data);
            console.log(response.data.data.hospital_data);

            const hos = response.data.data.hospital_data;

            console.log('hos',hos);
            const rows = hos.map(hos => (
                
                { 

                id: hos.id, 
                HospitalName : hos.hospital.name,
                HospitalNameSinhala : hos.hospital.name_si,
                TreatedSriLankans : hos.cumulative_local,
                TreatedForeigners : hos.cumulative_foreign,
                treating_local : hos.treatment_local,
                treating_foreign : hos.treatment_foreign
                
            
            
            
                }));
           console.log(rows);
    
           setRows(rows);
        });
      
        
      },[])
  const data = {
    columns: [
     
      {
        label: 'id',
        field: 'id',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Hospital Names',
        field: 'HospitalName',
        sort: 'asc',
        width: 10
      },
      {
        label: 'HospitalNames (Sinhala)',
        field: 'HospitalNameSinhala',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Treated SriLankans',
        field: 'TreatedSriLankans',
        sort: 'asc',
        width: 15
      },
      {
        label: 'Treated  Foreigners',
        field: 'TreatedForeigners',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Treating Sri Lankans',
        field: 'treating_local',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Treating Foreigners',
        field: 'treating_foreign',
        sort: 'asc',
        width: 10
      }

    ],
    rows: rows
  };

  console.log('rooooo',rows);

  return (
      <div>

<h2 className="h1-responsive font-weight-bold text-center my-5">
            Sri Lankan hospitals overview
      </h2>

 <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />

      </div>
   
  );
}

export default DatatablePage;