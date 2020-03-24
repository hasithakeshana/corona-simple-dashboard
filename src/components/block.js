import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../block.css';

const gridExamplesPage = () => {
  return (
    <MDBContainer  >
      <MDBRow    >
        <MDBCol top >One of three columns</MDBCol>
        <MDBCol middle >One of three columns</MDBCol>
        <MDBCol bottom>One of three columns</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default gridExamplesPage;
