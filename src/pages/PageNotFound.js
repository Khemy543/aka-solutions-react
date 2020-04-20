import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const PageNotFound = () => (
<div>
<Helmet>
        <title>404 | AKA Productive Solutions Limited</title>
 </Helmet>

<img src={require("../assets/img/pagenotfound2.png")} alt="" style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative', marginTop:60 , right:20}} />
<center><Link to="/" style={{textDecoration:"none"}}><h3>Return to Home Page</h3></Link></center>
</div>
);
export default PageNotFound;