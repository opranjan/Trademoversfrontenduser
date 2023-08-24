"use client";
import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import cardstyles from "../styles/CategoryCard.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const CategoryCard = (props) => {
  return (
    <main>
       <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src={props.categoryicon} className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}>{props.categorytitle}</Card.Title>
          
        </Card>
      </Col>
    </main>
  );
};

export default dynamic(()=>Promise.resolve(CategoryCard),{ssr:false});;
