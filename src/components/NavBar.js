
import React from "react";
//import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import { Link } from "react-scroll";
import classnames from "classnames";



// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function NavBar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
      
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
          >
            <img className="img-responsive"
            src={require("../assets/img/logo.png")}
            alt=""
            style={{
                width:"auto", 
                height:"30px",
                
            }}
            />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink  href="#">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
>
                Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="#">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
>
                Services
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="#">
              <Link
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
>
                About Us
                </Link>
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink  href="#">
              <Link
                activeClass="active"
                to="clients"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
>
                Clients
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
              <Link
                activeClass="active"
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
>
              
                Contact Us
               </Link> 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/currentjobs">
              
                Jobs
                
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
