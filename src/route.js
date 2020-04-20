import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from "react-router-scroll-top";

//components


// pages
import LandingPage from "./pages/LandingPage.js";
import ServicesPage from "./pages/ServicesPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import PageNotFound from "./pages/PageNotFound.js";
import ShoppingPage from "./pages/ShoppingPage.js";
import CurrentJobsPage from "./pages/CurrentJobsPage";


export const Routers =() => 
    <BrowserRouter>
    <ScrollToTop />
        <Switch>
         <Route exact path='/' component={ LandingPage } />
         <Route exact path='/services' component={ ServicesPage } />
         <Route exact path='/gallery' component={ GalleryPage } />
         <Route exact path='/shop' component={ ShoppingPage } />
         <Route exact path="/currentjobs" component={ CurrentJobsPage } />
         <Route path ="*" component ={PageNotFound} />
        </Switch>
        
    
    </BrowserRouter>