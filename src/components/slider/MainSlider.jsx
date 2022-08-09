import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ItemSlider} from '../index';
import {LoaderSlide} from '../loader/index';
const  MainSlider = React.memo(({items,isFetching,type, ...props}) => {

    const settings = {
        arrows: false,
        className: 'col-12 slider-movie align-items-center',
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: props.showItem ? props.showItem : 6,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed: 5000,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              centerMode: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    }

    if (isFetching === true) {
      return (
      Array(6).fill(0).map((_,index)=> (  <LoaderSlide key={index} className={"p-1"} />  )  )
      )
    }

    return (  
        <Slider {...settings} >
          { items.map((item)=>( <ItemSlider key={item.id} type={type} {...item} /> )) }
        </Slider>
    )
})

export default MainSlider
