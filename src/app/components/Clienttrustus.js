'use client'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


import { useState } from "react";
import { items } from "public/Clientitem.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Clienttrustus.module.css";


const Clienttrustus = () => {

    const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <> 
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={2000}>
        <p>Client Who Trust Us</p>
          <img src={item.imageUrl} alt="slides" />
        </Carousel.Item>
      ))}
    </Carousel>

    

    </>
  );
};

export default Clienttrustus;
