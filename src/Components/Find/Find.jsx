import React from "react";
import styles from "./Find.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Live Free Ride Free </h1>
        <div className={styles.text_bg}>
          <p>
            Explore the world's largest car marketplace and drive with your
            loved once
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          breakpoints={{
            340: {
              width: 200,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 4,
            },

            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          
        >
          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            make='Porsche'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1
            &ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
            make='Masrati'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1
            &ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
            make='Mercedies'
            />
          </SwiperSlide>
           
          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-1.2.1
            &ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
            make='Audi A8'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1620547316190-289b3899e010?ixlib=rb-1.2.1&
            ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZ2UlMjByb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            make='Range Rover'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1583692717320-0c9661d49d9a?ixlib=rb-1.2.1&
            ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            make='BMW'
            />
          </SwiperSlide>


          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1589134723101-5abd32593adf?ixlib=rb-1.2.1
            &ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFzZXJhdGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            make='Masrati'
            />
          </SwiperSlide>
          
          
          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1
            &ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
            make='Sports Car'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1
            &ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            make='Luxury Car'
            />
          </SwiperSlide>
          

          <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-1.2.1
            &ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
            make='Slad Lapusnac'
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Find;
