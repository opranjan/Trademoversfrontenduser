'use client'
import Link from "next/link";
import categorylayoutstyles from "../styles/Categorylayout.module.css";
import CategoryCard from "./CategoryCard";
import {useState} from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import cardstyles from "../styles/CategoryCard.module.css";
import dynamic from "next/dynamic";



function Categorylayout(props){
    const [openCategory, setOpenCategory] = useState(false);
    return(
        
       <div>



          <div className={categorylayoutstyles.MainCardsection}>
          <p>Products Category</p>
          <div className={categorylayoutstyles.Cardsection}>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/drinkware" onClick={() => setOpenCategory(false)} className={categorylayoutstyles.categorylink}>
          {/* <CategoryCard categoryicon="drinkwear.png" categorytitle="Drinkware "/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="drinkwear.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}>Drinkware</Card.Title>
          
        </Card>
      </Col>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/emponboardkit" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="onboardkit.png" categorytitle="Employee Onboard Kit "/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="onboardkit.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}>Employee Onboard Kit</Card.Title>
          
        </Card>
      </Col>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/travelluggage" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="luggage.png" categorytitle="Travel Luggage"/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="luggage.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}>Travel Luggage</Card.Title>
          
        </Card>
      </Col>
          </Link>
          </div>

         

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/watches" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="watch.png" categorytitle="Watches" /> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="watch.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}>Watches</Card.Title>
          
        </Card>
      </Col>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/trophyrewards" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="trophy.png" categorytitle="Trophy & Rewards" /> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="trophy.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}>Trophy & Rewards</Card.Title>
        </Card>
      </Col>
          </Link>
          </div>


          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/stationery" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="stationery.png" categorytitle=" Stationery " /> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="stationery.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}>Stationery</Card.Title>
        </Card>
      </Col>
          </Link>
          </div>
          


          
        
          {/* </div>
          <div className={categorylayoutstyles.Cardsection}> */}
          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/officeessentials" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="office.png" categorytitle="Office Essentials"/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="office.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}>Office Essentials</Card.Title>
        </Card>
      </Col>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/garments" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="garment.png"  categorytitle=" Garments        "/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="garment.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}> Garments        </Card.Title>
        </Card>
      </Col>
          
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/gadgets" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="gadgets.png" categorytitle="Gadgets"/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="gadgets.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}> Gadgets</Card.Title>
        </Card>
      </Col>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/homeappliances" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="homeappliance.png" categorytitle="Home Appliances"/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="homeappliance.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}> Home Appliances</Card.Title>
        </Card>
      </Col>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/sweetschocolate" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="sweets.png" categorytitle="Sweets & Chocolate"/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="sweets.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}> Sweets & Chocolate</Card.Title>
        </Card>
      </Col>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/kitchenessentials" onClick={() => setOpenCategory(false)}>
          {/* <CategoryCard categoryicon="kitchen.png" categorytitle="Kitchen Essentials"/> */}
          <Col >
        <Card className={cardstyles.Card}>
        <Card className={cardstyles.CardImgholder}>
          <img   src="kitchen.png" className={cardstyles.CardImg}/>
          {/* <Image src={props.categoryicon} className={cardstyles.CardImg} width={50} height={50} priority={true}/> */}
          </Card>
          <Card.Title className={cardstyles.CardTitle}> Kitchen Essentials</Card.Title>
        </Card>
      </Col>
          </Link>
          </div>



          </div>
          </div>
       </div>

       

      
    )
}

export default dynamic(()=>Promise.resolve( Categorylayout),{ssr:false});