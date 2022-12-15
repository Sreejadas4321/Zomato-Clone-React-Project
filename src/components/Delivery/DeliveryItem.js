import React from 'react'
import "./DeliveryItem.css"

export default function DeliveryItem({item}) {
  return (
    <div>
     <div className='delivery-item-cover'>
     <img src={item.cover} className="delivery-item-img" alt=''/>
     </div>
     <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}
