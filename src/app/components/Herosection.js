"use client";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import pcompletedStyle from "../styles/ProjectCompletd.module.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import dynamic from "next/dynamic";

const Herosection = () => {
  return (
    <>
      <div className={heroStyles.mastercardContainer}>
        <Card className={heroStyles.cardContainer}>


          <Card style={{ width: "50%" }} className={heroStyles.card}>
            <Card.Body className={heroStyles.cardbodyicon}>
              <Card.Img
                variant="top"
                src="/vission.png"
                className={heroStyles.cardbodyiconimg}
              />
            </Card.Body>

            <Card.Body className={heroStyles.cardbodytext}>
              <Card.Title className={heroStyles.cardbodytexttitle}>
                Our Vision
              </Card.Title>
              <Card.Text className={heroStyles.cardtext}>
                At Trade Movers, we aspire to become the most trusted and
                reliable corporate gifting partner for businesses across India&
                Globe. Our vision is to achieve this by consistently delivering
                exceptional products and services that exceed our clients'
                expectations.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "50%" }} className={heroStyles.card}>
            <Card.Body className={heroStyles.cardbodyicon}>
              <Card.Img
                variant="top"
                src="/mission.png"
                className={heroStyles.cardbodyiconimg}
              />
            </Card.Body>

            <Card.Body className={heroStyles.cardbodytext}>
              <Card.Title className={heroStyles.cardbodytexttitle}>
                Our Mission
              </Card.Title>
              <Card.Text className={heroStyles.cardtext}>
                Our mission is to help businesses strengthen their relationships
                through thoughtful and personalized gifts that leave a lasting
                impression. We believe that every occasion and every age group
                deserves a special and unique gift that reflects your brand and
                values.
              </Card.Text>
            </Card.Body>
          </Card>
        </Card>

        <Card  className={heroStyles.cardstory}>
          <Card.Body className={heroStyles.cardbodyiconstory}>
            <Card.Img
              variant="top"
              src="/storyimg.png"
              className={heroStyles.cardbodyiconstoryimg}
            />
          </Card.Body>

          <Card.Body className={heroStyles.cardbodytextstory}>
            <Card.Title className={heroStyles.cardbodytexttitle}>
              Our Story
            </Card.Title>
            <Card.Text className={heroStyles.cardtext}>
              Trade Movers Started its journey in the year 2011, Since then We
              had been redefining merchandising & promotional gifting trends to
              strengthen our customer businesses, by offering innovative,
              Quality & reasonably priced products . Our thought-process and
              commitments made us a prominent corporate gifts supplier in
              industry, Our dedicated team, who understand the ever-changing
              needs of clients and come out with solutions true to their
              satisfaction.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className={heroStyles.pcompletedContainerMain}>
        <div className={heroStyles.pcompletedContainer}>
          <img
            src="/Genuinegiftsicon.png"
            alt="tripppp"
            className={heroStyles.pcompletedimage}
          />
          <span className={heroStyles.pcompletedText}>GENUINE GIFTS</span>
        </div>

        <div className={heroStyles.pcompletedContainer}>
          <img
            src="/Reasonablepriceicon.png"
            alt="tripppp"
            className={heroStyles.pcompletedimage}
          />
          <span className={heroStyles.pcompletedText}>RESONABLE PRICE</span>
        </div>

        <div className={heroStyles.pcompletedContainer}>
          <img
            src="/Timelydeliveryicon.png"
            alt="tripppp"
            className={heroStyles.pcompletedimage}
          />
          <span className={heroStyles.pcompletedText}>TIMELY DELIVERY</span>
        </div>

        <div className={heroStyles.pcompletedContainer}>
          <img
            src="/Personalizedserviceicon.png"
            alt="tripppp"
            className={heroStyles.pcompletedimage}
          />
          <span className={heroStyles.pcompletedText}>PERSONALISED</span>
          <span className={heroStyles.pcompletedText}> SERVICE</span>
        </div>

        <div className={heroStyles.pcompletedContainer}>
          <img
            src="/Valueourcustomericon.png"
            alt="tripppp"
            className={heroStyles.pcompletedimage}
          />
          <span className={heroStyles.pcompletedText}>VALUSE OUR</span>
          <span className={heroStyles.pcompletedText}> CUSTOMER</span>
        </div>
      </div>
    </>
  );
};

export default dynamic(()=>Promise.resolve( Herosection),{ssr:false});
