
import React from 'react'
import "./HomePageCard.css"
import { useNavigate} from 'react-router-dom'


const tabs=[
    {
      id:1,
      name: "Order Online",
      cover: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      title:"Stay home and order to your doorstep",      
    },
    {
      id:1,
      name: "Dining",
      cover: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      title:"View the city's favourite dining venues",
    },
    {
      id:1,
      name: "Nightlife and Clubs",
      cover: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      title:"Explore the city's top nightlife outlets",
    }
  ]
 

export default function HomePageCard({link}) {
 
 
const navigate= useNavigate() 
const pageHandler=(name)=>{
  if(name==="Dining"){
    navigate("/details",{state:{name: "Dining Out"}})
  }
  else if(name==="Order Online"){
    navigate("/details", {state:{name:"Delivery"}})
  }
  else if(name==="Nightlife and Clubs"){
    navigate("/details", {state:{name:"Nightlife"}})
  }
}
  return (
    <div className='box'>
<div className=' max-width imgBox'>
           {tabs.map((item)=>(
            <div>
            <div onClick={()=>pageHandler(item.name)} className="img-cover">
              <img 
              src={item.cover}
               alt={item.name}
               className='card-img'/>
               <div className='cover'>
               <div className='card-name'>{item.name}</div>
               <div className='card-title'>{item.title}</div>
               </div>
               </div>
            </div>
           ))}
        </div>
</div>
   
  )
}
