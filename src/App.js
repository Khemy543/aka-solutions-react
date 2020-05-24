import React from 'react';
import { Routers } from './route';

//cookies
import { CookiesProvider } from 'react-cookie';

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";
 
//AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";


class App extends React.Component {

  componentDidMount(){
    AOS.init({
        duration: 1000
    })
}
  render(){
    return(
      <CookiesProvider>
      <div className="App">
        
  
        <Routers />
  
        
  
  
      </div>
      </CookiesProvider>
  
    );
  }
}

export default App;
