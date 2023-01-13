import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ItemPreview from '../../pages/Home/ItemPreview';
import { Button } from '../../components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MainCarousel = React.memo(({items}) => {

    const settings = {
      nextArrow: <Button nav className={"nav-btn"}><FaArrowRight /></Button>,
      prevArrow: <Button nav className={"nav-btn"}><FaArrowLeft /></Button>,
      dots: false,
      className:'slider d-flex align-items-center',
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };

    if (items.length === 0) {
      return null;
    }
    console.log(items);
    return (
        <Slider {...settings} >
          { items.map((item)=> <ItemPreview key={item.id} {...item} />  ) }
        </Slider>
    )
})

export default MainCarousel;
