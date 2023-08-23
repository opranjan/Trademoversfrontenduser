'use client'
import Link from "next/link";
import categorylayoutstyles from "../styles/Categorylayout.module.css";
import CategoryCard from "./CategoryCard";
import {useState} from "react";



function Categorylayout(props){
    const [openCategory, setOpenCategory] = useState(false);
    return(
        
       <div>



          <div className={categorylayoutstyles.MainCardsection}>
          <p>Products Category</p>
          <div className={categorylayoutstyles.Cardsection}>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/drinkware" onClick={() => setOpenCategory(false)} className={categorylayoutstyles.categorylink}>
          <CategoryCard categoryicon="drinkwear.png" categorytitle="Drinkware "/>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/emponboardkit" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="onboardkit.png" categorytitle="Employee Onboard Kit "/>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/travelluggage" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="luggage.png" categorytitle="Travel Luggage"/>
          </Link>
          </div>

         

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/watches" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="watch.png" categorytitle="Watches" />
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/trophyrewards" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="trophy.png" categorytitle="Trophy & Rewards" />
          </Link>
          </div>


          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/stationery" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="stationery.png" categorytitle=" Stationery " />
          </Link>
          </div>
          


          
        
          {/* </div>
          <div className={categorylayoutstyles.Cardsection}> */}
          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/officeessentials" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="office.png" categorytitle="Office Essentials"/>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/garments" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="garment.png"  categorytitle=" Garments        "/>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/gadgets" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="gadgets.png" categorytitle="Gadgets"/>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/homeappliances" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="homeappliance.png" categorytitle="Home Appliances"/>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/sweetschocolate" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="sweets.png" categorytitle="Sweets & Chocolate"/>
          </Link>
          </div>

          <div className={categorylayoutstyles.CardsectionElement}>
          <Link href="/kitchenessentials" onClick={() => setOpenCategory(false)}>
          <CategoryCard categoryicon="kitchen.png" categorytitle="Kitchen Essentials"/>
          </Link>
          </div>



          </div>
          </div>
       </div>

       

      
    )
}

export default Categorylayout;