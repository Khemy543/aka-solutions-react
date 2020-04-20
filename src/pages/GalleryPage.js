import React from "react";
import { Helmet } from "react-helmet";

// core components
import NavBarHeader from "../components/NavBarHeader.js";
import Footer from "../components/Footer.js";
import GalleryCarousel from "../components/GalleryCarousel.js";

 

function GalleryPage() {
    return (
        <div>
            <Helmet>
        <title>Gallery | AKA Productive Solutions Limited</title>
      </Helmet>
                  <NavBarHeader />
                  <GalleryCarousel />
                  <div className="main">
                  <Footer/>
                  </div>
        </div>
    );
}

export default GalleryPage;