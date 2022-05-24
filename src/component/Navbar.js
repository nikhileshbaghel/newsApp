import React from 'react';
import {
    Link,useLocation
} from 'react-router-dom';

const Navbar = ()=> {
     let location = useLocation();
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className= {`nav-link ${(location.pathname==='/')?"active":""}`} to="/">General News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className= {`nav-link ${(location.pathname==='/health')?"active":""}`} aria-current="page" to="/health"><b>Health</b></Link>
        </li>
        <li className="nav-item">
          <Link className= {`nav-link ${(location.pathname==='/technology')?"active":""}`} aria-current="page" to="/technology"><b>Technology</b> </Link>
        </li>
        <li className="nav-item">
          <Link className= {`nav-link ${(location.pathname==='/entertainment')?"active":""}`} aria-current="page" to="/entertainment"><b>Entertainment</b></Link>
        </li>
        <li className="nav-item">
          <Link className= {`nav-link ${(location.pathname==='/sport')?"active":""}`} aria-current="page" to="/sport"><b>Sport</b></Link>
        </li>
        <li className="nav-item">
          <Link className= {`nav-link ${(location.pathname==='/science')?"active":""}`} to="/science"><b>Science</b></Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        )
}

export default Navbar;