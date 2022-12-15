import React from 'react'
import { dining } from '../../data/dining';
import Filter from '../Delivery/Filter';
import Collection from '../style/Collection/Collection'
import Explore from '../style/ExploreSection/Explore';
import "./DiningOut.css"


const collectionList = [
    {
      id: 1,
      title: "Newly Opened Restaurants",
      cover:
        "https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618484.jpg?output-format=webp",
      places: "6 Places",
    },
    {
      id: 2,
      title: "Finest Buffet Places",
      cover:
        "https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg?output-format=webp",
      places: "8 Places",
    },
    {
      id: 3,
      title: "Best Insta-worthy Places",
      cover:
        "https://b.zmtcdn.com/data/collections/c6446d626ba68217c01d4318cebf4a1d_1665729718.jpg?output-format=webp",
      places: "9 Places",
    },
    {
      id: 4,
      title: "Best Bars & Pubs",
      cover:
        "https://b.zmtcdn.com/data/collections/815d25493a0f8760dba79e1ce5a60f02_1665730400.jpg?output-format=webp",
      places: "17 Places",
    },
    {
      id: 5,
      title: "Places for Lip-smacking Fish",
      cover:
        "https://b.zmtcdn.com/data/collections/4357cc5382783a70c00a33c1c5cc2ed6_1665728005.jpg?output-format=webp",
      places: "8 Places",
    },
    {
      id: 6,
      title: "Serene Rooftop Places",
      cover:
        "https://b.zmtcdn.com/data/collections/3dfd3a9082b04d661891abd003eef3eb_1666068271.jpg?output-format=webp",
      places: "10 Places",
    },
    {
      id: 7,
      title: "Iconic Places in Kolkata",
      cover:
        "https://b.zmtcdn.com/data/collections/32d2fdf2536f92ce9dec7b3789749f1f_1665753956.jpg?output-format=webp",
      places: "14 Places",
    },
    {
      id: 8,
      title: "Finest Microbreweries in Town",
      cover:
        "https://b.zmtcdn.com/data/collections/06ec1c3471d9d7f7047298eb9ef2de56_1665733300.jpg?output-format=webp",
      places: "7 Places",
    },
  ];
  
  const diningFilters = [
    {
      id: 1,
      icon: <i className="fa fa-sliders absolute-center"></i>,
      title: "Filters",
    },
    {
      id: 2,
      title: "Pro Offers",
      icon: <i className="fa fa-angle-down absolute-center"></i>,
    },
    {
      id: 3,
      title: "Distance",
      icon: <i className="fa fa-clock-o absolute-center"></i>,
    },
    {
      id: 5,
      title: "Online Bookings",
    },
    {
      id: 4,
      title: "Outdoor Seating",
    },
    {
      id: 6,
      title: "Rating: 4.0+",
    },
    {
      id: 7,
      title: "Cuisines",
      icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
    },
    {
      id: 8,
      title: "Cafes",
    },
    {
      id: 9,
      title: "Open Now",
    },
  ];
const restaurantlist = dining;
export default function DiningOut() {
  return (
    <div>
        <Collection list={collectionList}/>
        <div className='max-width'>
         <Filter filterlist={diningFilters}/>
        </div>
        <Explore list={restaurantlist}
     collectionName='Best Dining Restaurants near you in Kolkata'/>
    </div>
  )
}