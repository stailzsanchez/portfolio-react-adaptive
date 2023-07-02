import './Testemonials.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { EffectCube, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import AVATAR1 from '../../assets/Testmonials/avatar1.jpg';
import AVATAR2 from '../../assets/Testmonials/avatar2.jpg';
import AVATAR3 from '../../assets/Testmonials/avatar3.jpg';
import AVATAR4 from '../../assets/Testmonials/avatar4.jpg';
import AVATAR5 from '../../assets/Testmonials/avatar5.jpg';
import AVATAR6 from '../../assets/Testmonials/avatar6.jpg';
import AVATAR7 from '../../assets/Testmonials/avatar7.jpg';
import React from 'react';

const Testemonials = () => {
  const testmonialsList = [
    {
      name: 'Peter Banks',
      img: AVATAR1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet nostrum cupiditate corrupti repellendus optio esse minus impedit illo necessitatibus!',
    },
    {
      name: 'Josephine Smith',
      img: AVATAR2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet nostrum cupiditate corrupti repellendus optio esse minus impedit illo necessitatibus!',
    },
    {
      name: 'Joan Harrison',
      img: AVATAR3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet nostrum cupiditate corrupti repellendus optio esse minus impedit illo necessitatibus!',
    },
    {
      name: 'John Maxwell',
      img: AVATAR4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet nostrum cupiditate corrupti repellendus optio esse minus impedit illo necessitatibus!',
    },
    {
      name: 'Paul Scott',
      img: AVATAR5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet nostrum cupiditate corrupti repellendus optio esse minus impedit illo necessitatibus!',
    },
    {
      name: 'Garey Murphy',
      img: AVATAR6,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet nostrum cupiditate corrupti repellendus optio esse minus impedit illo necessitatibus!',
    },
    {
      name: 'Grace Porter',
      img: AVATAR7,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet nostrum cupiditate corrupti repellendus optio esse minus impedit illo necessitatibus!',
    },
  ];
  const swiperParams = {
    modules: [Pagination, EffectCube],
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: { clickable: true },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 20 },
      600: { slidesPerView: 1.5, spaceBetween: 20 },
      900: { slidesPerView: 2, spaceBetween: 30 },
      1050: { slidesPerView: 2.5, spaceBetween: 30 },
      1200: { slidesPerView: 3, spaceBetween: 40 },
    },
  };

  return (
    <section id="testemonials">
      <h5>Review from clients</h5>
      <h2>Testemonials</h2>

      <Swiper {...swiperParams} className="container testemonials__container">
        {testmonialsList.map((testmonial, index) => (
          <SwiperSlide key={index} className="testemonial">
            <div className="client__avatar">
              <img src={testmonial.img} alt="Avatar One" />
            </div>
            <h5 className="client__name">{testmonial.name}</h5>
            <small className="client__review">{testmonial.text}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testemonials;
