import React from 'react';
import { Routers } from './route';

//cookies
import { CookiesProvider } from 'react-cookie';

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";
 


function App() {
  return (
    <CookiesProvider>
    <div className="App">
      

      <Routers />

      


    </div>
    </CookiesProvider>
  );
}

export default App;
