'use client'
import { useState } from "react";
// import  {items} from "public/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
import dynamic from "next/dynamic";


const MyCarousel = () => {




  
    
    const  bootstrap = [
        {
          "id": 1,
          "title": "Photography",
          "body": "Bootstrap Carousel Example",
          "imageUrl": "brandedluggage.jpg",
          "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
        },
        {
          "id": 2,
          "title": "City Views",
          "body": "Bootstrap Carousel Example",
          "imageUrl": "brandedtshirt.jpg",
          "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
        },
        {
          "id": 3,
          "title": "Wild Life",
          "body": "Bootstrap Carousel Example",
          "imageUrl": "analogwatch.jpg",
          "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
        },
        {
          "id": 4,
          "title": "Foods and Culture",
          "body": "Bootstrap Carousel Example",
          "imageUrl": "brandedtshirt.jpg",
          "docs": "https://getbootstrap.com/docs/4.0/components/carousel/"
        }
      ]
      
    
  
  



    // const  {bootstrap}  = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <> 
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={3000}>
          <img src={item.imageUrl} alt="slides" />
        </Carousel.Item>
      ))}
    </Carousel>

    

    </>
  );
};

export default dynamic(()=>Promise.resolve( MyCarousel),{ssr:false});
