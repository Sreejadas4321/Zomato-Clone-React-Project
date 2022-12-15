import React from 'react'
import { resturants } from '../../../data/restaurant'

import "./Explore.css"
import ExploreCard from './ExploreCard'

export default function Explore({list, collectionName}) {
  return (
    <div className='max-width explore-section'>
      <div className='collection-title'>{collectionName}</div>
      <div className='explore-grid'>
        {list.map((restaurant)=>{
            return <ExploreCard restaurant={restaurant}/>
        })}
      </div>
    </div>
  )
}
