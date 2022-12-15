import React from 'react'
import "./MainHeader.css"

export default function MainHeader() {
  return (
    <header> 
    <div className="header-box">
    <div>
     <h4>Get The App</h4>
     </div>
        <ul className="nav-bar">
        <li>Add Resturant</li>
        <li>Log in</li>
        <li>Sign up</li>
        </ul>
     </div>
     <div className="logo-box">
     <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
        alt=""
        className="header-logo"/> 
        <h3>Discover the best food & drinks in Kolkata</h3> 
        <div className="search">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
          <p></p>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Search for resturant, cuisine or a dish"/>
        </div>
    </div>
     <div className="header-img">
     <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" 
     alt=""
     />
     </div>
    </header>
  )
}
