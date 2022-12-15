import React from 'react'
import MainHeader from '../components/header/MainHeader'
import HomePageCard from '../components/style/Bar/HomePageCard'
import Collection from '../components/style/Collection/Collection'




const collectionList = [
    {
      id: 1,
      title: "Top picks of the week",
      cover:
        "https://b.zmtcdn.com/data/collections/c46add7d3b90a477399c29de0705d3cf_1670661569.jpg?output-format=webp",
      places: "29 Places",
    },
    {
      id: 2,
      title: "Lit Party Places",
      cover:
        "https://b.zmtcdn.com/data/collections/8e46a581134a20b56489e22029095060_1669368003.jpg?output-format=webp",
      places: "22 Places",
    },
    {
      id: 3,
      title: "Romantic Dining Places",
      cover:
        "https://b.zmtcdn.com/data/collections/a9e8377fce9b702add08c5305100f8ec_1669367619.jpg?output-format=webp",
      places: "20 Places",
    },
    {
      id: 4,
      title: "Winter Menus to try this season",
      cover:
        "https://b.zmtcdn.com/data/collections/2d3801933fc0cf3aefad7de8fff94562_1670588147.jpg",
      places: "12 Places",
    },
  ];

export default function MainHomePage() {


    return( <>
    <MainHeader/>
    {/* <div className='max-width'>
        <HomePageCard/>
    </div> */}<div >
    <HomePageCard/>
    </div>
    <div>
    <Collection list={collectionList}/>
    </div>
    </>
    )
}
