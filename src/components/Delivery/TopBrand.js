import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../style/Arrow/NextArrow';
import PrevArrow from '../style/Arrow/PrevArrow';
import BrandItem from './BrandItem';
import "./TopBrand.css"


const branditem=[
    {
    id: 1,
    title: "KFC",
    time: "35 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589432700.png" 
},
{
    id: 2,
    title: "Pizza Hut",
    time: "30 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png" 
},
{
    id: 3,
    title: "Fat Belly",
    time: "29 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1b9260f5570e4ba9b5329d8ebd24f2cf_1617919965.png" 
},
{
    id: 4,
    title: "Burger King",
    time: "35min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ed98726fbff199f8920f8dce2926a32a_1648739641.png" 
},
{
    id: 5,
    title: "Rolls Mania",
    time: "35min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6e6071113ba6574e35d2beab4bbde88a_1505799124.png" 
},
{
    id: 6,
    title: "Kori's",
    time: "35min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/83c2adc6a861ba1a1ede70a21080513b_1612156110.png" 
},
{
    id: 7,
    title: "Baskin Robbins",
    time: "35min",
    cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png" 
},
{
    id: 8,
    title: "UBQ by Barbeque Nation",
    time: "35min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c91c13a3faf9232920d09fd3d9d79b3c_1630660522.png" 
},
{
    id: 9,
    title: "Gopal Maharaj",
    time: "35min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ea711b1c3601825bea03a0ab1e228f28_1593082248.png" 
},
{
    id: 10,
    title: "Chick N chilly",
    time: "35min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ebe428165a1b376feefc6f4d646f2840_1611309255.png" 
},
]
const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };
export default function TopBrand() {
  return (
    <div>
<div className='brand-collection'>
   <div className='max-width'>
    <div className='collection-title'>Top brands for you</div>
    <Slider {...settings}>
    {branditem.map((item)=>{
        return <BrandItem item={item} key={item.id}/>
    })}
    </Slider>
   </div>
    </div>
    </div>
  )
}
