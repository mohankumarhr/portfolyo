import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../CSS/testimonials.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Testimonials(props) {

  return (
    <div className='testimonial-section' id='testimonials'> 
    <h2>Testimonials</h2>
        <div className='testimonial-wrapper'>
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {props.testimonials.map((item)=>{
        return item.enabled&&<SwiperSlide>
            <p className='testimonial-review'>{item.review}</p>
            <p className='author-name'>- {item.name}, {item.position}</p>
            <img src={item.image.url} alt=''></img>
        </SwiperSlide>
      })}
        
      </Swiper>
    </>


        </div>
    </div>
  )
}

export default Testimonials