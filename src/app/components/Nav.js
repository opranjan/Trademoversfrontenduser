"use client";

import styles from "@/app/styles/navbar.module.css";
import { CgCloseR, CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBContainer } from "mdb-react-ui-kit";


const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log("value " + openMenu);



 

  return (
    <>
      <nav className={styles.navbar}>
        <div className={ openMenu ? `${styles.active}` : ""}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                href="#"
                onClick={() => setOpenMenu(false)}
              >
                Home
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                href="/about"
                onClick={() => setOpenMenu(false)}
              >
                About
              </Link>
            </li>









            

            <li  id={styles.dropdown}><a href="#">Category</a>


              <ul className={styles.submenu}>
              <li> <Link href="/drinkware">Drinkware</Link>
                  {/* <ul className={styles.submenu2}>
                    <li>
                      <Link href="#">Bottle & Flask</Link>
                    </li>
                    <li>
                      <Link href="#">Mug</Link>
                    </li>
                    <li>
                      <Link href="#">gift set</Link>
                    </li>
                    
                  </ul> */}
                </li>


                

                <li>
                  <Link href="/emponboardkit">Employee Onboard Kit</Link>
                </li>




                
                <li><Link href="/gadgets">Gadgets</Link>
                  {/* <ul className={styles.submenu2}>
                    <li>
                      <Link href="#">Voice Assistance</Link>
                    </li>
                    <li>
                      <Link href="#">Earbuds</Link>
                    </li>
                    <li>
                      <Link href="#">Earbuds</Link>
                    </li>
                    <li>
                      <Link href="#">Neckbands</Link>
                    </li>
                    <li>
                      <Link href="#">Powerbank</Link>
                    </li>
                    <li>
                      <Link href="#">Speaker</Link>
                    </li>
                    <li>
                      <Link href="#">Wireless Charger</Link>
                    </li>
                  </ul> */}
                </li>



                <li>
                  <Link href="/garments">Garments</Link>
                  {/* <ul className={styles.submenu2}>
                    <li>
                      <Link href="#">Blazzers</Link>
                    </li>
                    <li>
                      <Link href="#">Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Jackets</Link>
                    </li>
                    <li>
                      <Link href="#">Shirts</Link>
                    </li>
                    <li>
                      <Link href="#">Sweatshirts</Link>
                    </li>
                    <li>
                      <Link href="#">T-shirts</Link>
                    </li>
                  </ul> */}
                </li>



                <li>
                  <Link href="/homeappliances">Home Appliances</Link>
                </li>

                <li>
                  <Link href="/kitchenessentials">Kitchen Essentials</Link>
                </li>



                <li>
                  <Link href="/officeessentials">Office Essentials</Link>
                  {/* <ul className={styles.submenu2}>
                    <li>
                      <Link href="#">Keyboard & Mouse</Link>
                    </li>
                    <li>
                      <Link href="#">Laptop Stands</Link>
                    </li>
                    <li>
                      <Link href="#">Mobile & Pen Stands</Link>
                    </li>
                    <li>
                      <Link href="#">Multiple Lamps</Link>
                    </li>
                    <li>
                      <Link href="#">Sweatshirts</Link>
                    </li>
                    <li>
                      <Link href="#">T-shirts</Link>
                    </li>
                  </ul> */}
                </li>



                <li>
                  <Link href="/stationery">Stationery</Link>
                  {/* <ul className={styles.submenu2}>
                    <li>
                      <Link href="#">Dairys</Link>
                    </li>
                    <li>
                      <Link href="#">Keychains</Link>
                    </li>
                    <li>
                      <Link href="#">Miscellameous</Link>
                    </li>
                    <li>
                      <Link href="#">Pens</Link>
                    </li>
                    <li>
                      <Link href="#">Pendrives</Link>
                    </li>
                    <li>
                      <Link href="#">Sets</Link>
                    </li>
                  </ul> */}
                </li>





                <li>
                  <Link href="/sweetschocolate">Sweets & Chocolate</Link>
                </li>

                <li>
                  <Link href="/travelluggage">Travel Luggage</Link>
                </li>


                <li> <Link href="/trophyrewards">Trophy & Rewards</Link>
                  {/* <ul className={styles.submenu2}>
                    <li>
                      <Link href="#">Certificates</Link>
                    </li>
                    <li>
                      <Link href="#">Medals</Link>
                    </li>
                    <li>
                      <Link href="#">Plaques</Link>
                    </li>
                    <li>
                      <Link href="#">Trophy</Link>
                    </li>
                  </ul> */}
                </li>


                <li>
                  <Link href="/watches">Watches</Link>
                </li>
              </ul>
            </li>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>


          {/* //nav icon */}
          <div className={styles["mobile-navbar-btn"]}>
            <CgMenu
              name="menu-outline"
              className={styles["mobile-nav-icon"]}
              onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
              name="close-outline"
              className={`${styles["mobile-nav-icon"]} ${styles["close-outline"]}`}
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
