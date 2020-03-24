import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="indigo" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
       
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Source : <a href = "https://hpb.health.gov.lk/en/api-documentation" >API Documentation - Ministry Of Health - Sri Lanka</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;

