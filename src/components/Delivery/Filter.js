import React from 'react'
import "./Filter.css"

export default function Filter({filterlist}) {
  return ( <div className='filters'>
     {filterlist && filterlist.map((filters)=>{
        return <div key={filters.id} className='filter-item'>
            {filters.icon && filters.icon}
            <div className='filter-name'>{filters.title}</div>
        </div>
    })}  
    </div>
  )
}