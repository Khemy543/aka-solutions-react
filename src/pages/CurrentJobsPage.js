import React from "react";
import { Helmet } from "react-helmet";

//reactstrap
import{
    Container
} from "reactstrap";

// core components
import WhiteNavbar from "../components/WhiteNavbar.js";
import Footer from "../components/Footer.js";
//import GalleryCarousel from "../components/GalleryCarousel.js";

 

function CurrentJobsPage() {
    return (
        <div>
            <Helmet>
        <title>Current Jobs | AKA Productive Solutions Limited</title>
      </Helmet>
      <WhiteNavbar />
                  
    <div className="main" style={{marginTop:"100px"}}>
       <div className="section text-center"
       style={{
          
          height:"289px"
          
        }}
        
       >
       
       <Container>
          <div className="motto">
            <h1>No Jobs available now!!</h1>
            </div>
            </Container>
         </div>
      
              
      </div>

      <Footer/>
</div>
        
    );
}

export default CurrentJobsPage;