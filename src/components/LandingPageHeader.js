
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

// core components
//Others
import Typical from "react-typical";

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div id="home">
      <div
        style={{
          backgroundImage: "url(" + require("../assets/img/image13.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
        
          <span className="white"  style={{
            fontSize: "3.6em",
            color:"rgba(0, 90, 255, 0.82)",
            fontWeight:"bold"
            }}>AKA </span>&nbsp;<span className="red"  style={{
                fontSize: "3.6em",
                color:"#00a1ff",
                fontWeight:"bold"
            }}>SOLUTIONS</span>
            <h3>
            <Typical
            loop={Infinity}
            wrapper = "b"
            steps={[
                'Highly qualified and skilled trades personnel',1000
            ]}
            >
            </Typical>
            </h3>
            <br />
            <Link to="/gallery">
            <Button
              className="btn-round mr-1"
              color="neutral"
              outline
            >
              <i className="fa fa-play" />
              Gallery
            </Button>
            </Link>
            <Link to="/shop">
            <Button className="btn-round" color="neutral" type="button" outline>
              Shop
            </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default LandingPageHeader;
