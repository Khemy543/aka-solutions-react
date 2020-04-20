  
import React from "react";
//import { Link } from "react-router-dom";

// reactstrap components
//import { Row, Container } from "reactstrap";
 

function Footer() {
  return (
    <footer className="page-footer font-small unique-color-dark" style={{backgroundColor:"rgba(30, 30, 30, 0.97) ", paddingTop:"20px"}}>
  <div className="container">

    
    <div className="row mt-3">

       
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        
        <h6 className="text-uppercase font-weight-bold">AKA SOLUTIONS</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>We provide highly qualified and skilled trades personnel for the construction industry. Visit us for your best solutions</p>

      </div>
      

       
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

         
        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  style={{width: "60px"}}/>
        <p>
          <a href="#!" style={{color:"inherit"}}>Recruitment</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit"}}>Construction</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit"}}>Shopping</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit"}}>Man Power</a>
        </p>

      </div>
      

      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  style={{width: "60px"}}/>
        <p>
          <a href="#!" style={{color:"inherit"}}>Home</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit"}}>Services</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit"}}>Privacy and Policy</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit"}}>Terms and Conditions</a>
        </p>

      </div>
       

       
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Follow us on</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  style={{width: "60px"}}/>
        <a href="#!" style={{color:"inherit"}}>
        <p>
          <i className="fa fa-twitter mr-3" ></i> Twitter</p></a>

          <a href="#!" style={{color:"inherit"}}>
        <p>
       
          <i className="fa fa-facebook mr-3"></i> Facebook</p></a>
          <a href="#!" style={{color:"inherit"}}>
        <p>
          <i className="fa fa-instagram mr-3"></i> Instagram</p></a>
          <a href="#!" style={{color:"inherit"}}>
        <p>
          <i className="fa fa-linkedin mr-3"></i> Linkedin</p></a>

      </div>
       

    </div>
    

  </div>
   
   
   
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/" style={{color:"inherit"}}> AKA Productive Solutions Limited</a>
  </div>
   
</footer>
  );
}

export default Footer;
