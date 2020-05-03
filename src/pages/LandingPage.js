
import React,{ useState} from "react";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

//axios
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal, 
  Spinner
} from "reactstrap";

// core components
import Navbar from "../components/NavBar.js";
import LandingPageHeader from "../components/LandingPageHeader.js";
import Footer from "../components/Footer.js";
//googlemaps
import  MapContainer  from "../components/GoogleMaps.js";
import 'font-awesome/css/font-awesome.min.css';
import "../assets/css/Carousel.css";



axios.defaults.withCredentials = true;
//axios.defaults.headers.common['Auth-Token'] = 'foo bar';
const config = {
  withCredentials: true, 
  headers : {
  "Access-Control-Allow-Origin":"*",
  "Content-Type": "application/json",
  "Access-Control-Request-Headers":"authorization",
  },

};

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertpop, setAlertpop] = useState(false);
  
  const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);


const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(e);
   
axios.post('https://salty-anchorage-79079.herokuapp.com/api/v1/post-message', {
  config, name, email, message
}).then(res => {
  console.log(res);
  if (res.data.status === 200){
    setAlertpop(true);
    setEmail('');
    setName('');
    setMessage('');
  }
  else{

  }
   
}) 

}


  return (
    <div>
      <Helmet>
        <title>Home | AKA Productive Solutions Limited</title>
      </Helmet>
      <Navbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="services">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Our Services</h2>
                <h5 className="description">
                we provide highly qualified and skilled trades personnel for the
construction industry which include both temporary and permanent placements. We also offer
skilled and highly qualified staff with competitive rates with a personalised customer
service. Some of our clients include

                </h5>
                <Button
                  className="btn-round"
                  color="info"
                  href="/services"
                   
                >
                  See Details
                </Button>
               
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Lendlease</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Cilantro</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Ballymore</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    
                  </div>
                </div>

              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Service plan</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <a href="/services" style={{textDecoration:"none", color:"inherit",fontWeight:"600"}}>
                    <Button className="btn-link" color="info">
                    
                      See more
                      
                    </Button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" id="about-us">
          <Container>
          <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk About us</h2>
                
                <h5 className="description">
                Established on 10th July 2013<br/>
                Construction and
Recruitment company based in Ilford
greater london In the Essex area. Our target location includes ESSEX and London as a
whole. Our first client was Cilantro engineering
but our current client is JADEB other clients includes lendlease,
bellway homes and ballymore builders.
                </h5>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("../assets/img/faces/worker1.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Joseph Korsa-Acquah</CardTitle>
                        <h6 className="card-category">Founder</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    A visioned man with 20 years industrial experience. He is motivated to provide the right people to the right jobs and keep them
working. Satisfaction of placing the right
candidate to the right placement.


                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("../assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section" id="contact-us">
          <Container>
          <h2 className="text-center">Contact Us</h2>
          {/* {!alertpop?
              <div>
              
              </div>
              :
              <Alert color="info" isOpen={visible} toggle={onDismiss}>
              I am an alert and I can be dismissed!
              </Alert>
              } */}
            <Row>
            
            <Col className="ml-auto mr-auto" md="4">
            <div>
            <h3>Contact info</h3>
                      <p class="description"><i className="fa fa-home" style={{marginRight:"15px"}}/>Office # 38, Suite 54 Elizebth Street, Victoria State Newyork, USA 33026</p>
                      <p class="description"><i className="fa fa-phone" style={{marginRight:"15px"}}/>07956994221</p>   
                      <p class="description"><i className="fa fa-envelope" style={{marginRight:"15px"}}/>joseph@akaproductivesolutionsltd.co.uk</p>             
                  </div>
            </Col>
              <Col className="ml-auto mr-auto" md="6">
              
                
                <Form className="contact-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" name="name" value={name}
                onChange={e => setName(e.target.value)}
                require
                />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" name="email" value={email}
                onChange={e => setEmail(e.target.value)}
                require
                />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    name="message"
                    value={message}
                onChange={e => setMessage(e.target.value)}
                require
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="primary" size="lg" type="submit" onClick={toggle} disabled={!email||!message||!name}>
                        Send
                      </Button>

                      <Modal id="modal" isOpen={modal} toggle={toggle} style={{
                        width:"200px" ,
                        marginTop:"10%",
                         
                      }}>
                      
                      <div style={{alignContent:"center"}}>
                      {!alertpop?
                        <Spinner color="primary" style={{marginTop:"50px", marginRight:"50px", marginLeft:"80px", marginBottom:"50px"}}/>
                        :
                        <i className="fa fa-check-circle" style={{fontSize:"56px",color:"rgba(1, 137, 254, 0.9)",marginTop:"50px", marginRight:"50px", marginLeft:"80px", marginBottom:"50px"}}></i>
                      }
                      
                      </div>
                      </Modal>

                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center" style={{height:"350px", marginTop:"-70px"}}> 
           
           <MapContainer />
             
        </div>
        <div className="section text-center"
        
        style={{
          background: "linear-gradient(rgba(0, 161, 255, 0.58),rgba(0, 161, 255, 0.58)), url(" + require("../assets/img/image8.jpg") + ") no-repeat fixed",
          backgroundSize: "cover"
          
        }}
        data-parallax={true}        
        >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 style={{color:"white"}}>Need Help Finding trade Professionals?</h1>
            <h3 style={{color:"white"}}>We can help you!</h3>
            <p style={{color:"white"}}>Personalised customer service. We provide highly qualified and skilled trades personnel</p>
            </div>
            <br />
            <Link
            activeClass="active"
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
            >
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              REQUEST A CALLBACK
            </Button>
            </Link>
            </Container>

          </div>

      </div>
       <Footer/>
    </div>
  );
}

export default LandingPage;
