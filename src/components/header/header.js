import "./header.css"

import React from 'react'

export default function Header() {
  return (
   <div className="max-width header">
    <img 
    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    alt=""
    className="zomato-black-logo"
    />
    <div className="header-right">
      <div className="header-location">
        <div className="location-wrapper">
         <div className="location-icon-name">
         <i class="fa fa-map-marker absolute-center location-icon"></i>
         <div>Kolkata</div>
         </div>
         <i class="fa fa-caret-down absolute-center"></i>
      </div>
      <div className="separator"></div>
      <div className="header-search">
      <i class="fa fa-search absolute-center search-icon"></i>
      <input type="text" placeholder="search for resturant, cusine or dish" className="search-input"/>
      </div>
    </div>
    <div className="profile-wrapper">
     <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
     alt=""
     className="profile-img"
     />
     <span className="username">Sreeja</span>
     <i class="fa fa-angle-down absolute-center down-icon"></i>
    </div>
   </div>
   </div>
  )
}

          
       