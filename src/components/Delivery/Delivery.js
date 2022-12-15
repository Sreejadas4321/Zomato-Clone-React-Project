import React from 'react'
import { restaurants } from '../../data/restaurant';
import Explore from '../style/ExploreSection/Explore';
import './Delivery.css'
import DeliveryCollection from './DeliveryCollection';
import Filter from './Filter';
import TopBrand from './TopBrand';


const deliveryFilters=[
  {
   id: 1,
   icon: <i class="fa fa-sliders absolute-center"></i>,
   title: "Filter"
  },
  {
    id: 2,
    icon: <i class="fa fa-clock-o absolute-center"></i>,
    title: "Delivery Time"
   },
   {
    id: 3,
   title: "Rating 4.0+"
   },
   {
    id: 4,
    title: "Pure Veg"
   },
   {
    id: 5,
    icon: <i class="fa fa-angle-down absolute-center"></i>,
    title: "Cuisines"
   },
   {
    id: 6,
    icon: <i class="fa fa-angle-down absolute-center"></i>,
    title: "More Filters"
   }
];
const restaurantlist = restaurants;
export default function Delivery() {
  return (
    <>
    <div className='max-width'>
      <Filter filterlist={deliveryFilters}/>
    </div>
    <DeliveryCollection/>
    <TopBrand/>
    <Explore  list={restaurantlist}
     collectionName= 'Delivery Resturants in Kolkata'/>
    </>
  )
}