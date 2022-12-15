import React from 'react'
import "./BrandItem.css"

export default function BrandItem({item}) {
  return (
    <div>
        <div className='brand-item-cover'>
     <img src={item.cover} className="brand-item-img" alt=''/>
     </div>
     <div className='brand-item-title'>{item.title}</div>
     <div className='brand-item-title'>{item.time}</div>
    </div>
  )
}
