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
          background: "linear-gradient(rgba(0, 161, 255, 0.58),rgba(0, 161, 255, 0.58)), url(" + require("../assets/img/image8.jpg") + ") no-repeat fixed",
          backgroundSize: "cover",
          height:"289px"
          
        }}
        data-parallax={true}
       >
       <div className="filter" />
       <Container>
          <div className="motto text-center">
            <h1 style={{color:"white"}}>COMING SOON</h1>
            </div>
            </Container>
         </div>
      
              
      </div>

      <Footer/>
</div>
        
    );
}

export default CurrentJobsPage;