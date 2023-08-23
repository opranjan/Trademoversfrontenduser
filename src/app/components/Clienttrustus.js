'use client'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


import { useState } from "react";
// import { items } from "public/Clientitem.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Clienttrustus.module.css";


const Clienttrustus = () => {


     const bootstrap = [
        {
          "id": 1,
          "title": "Photography",
          "body": "Bootstrap Carousel Example",
          "imageUrl": "customers2.jpg",
          "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
        },
        {
          "id": 2,
          "title": "City Views",
          "body": "Bootstrap Carousel Example",
          "imageUrl": "customers 3.jpg",
          "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
        },
        {
          "id": 3,
          "title": "Wild Life",
          "body": "Bootstrap Carousel Example",
          "imageUrl": "customers5.jpg",
          "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
        },
        {
          "id": 4,
          "title": "Foods and Culture",
          "body": "Bootstrap Carousel Example",
          "imageUrl": "customers6.jpg",
          "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
        }
      ]
      
    
  
  





    // const { bootstrap } = items;
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
