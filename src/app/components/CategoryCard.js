"use client";
import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import cardstyles from "../styles/CategoryCard.module.css";

const CategoryCard = (props) => {
  return (
    <main>
       <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <Card.Img   src={props.categoryicon} className={cardstyles.CardImg}/>
          </Card>
          <Card.Title className={cardstyles.CardTitle}>{props.categorytitle}</Card.Title>
          
        </Card>
      </Col>
    </main>
  );
};

export default CategoryCard;
