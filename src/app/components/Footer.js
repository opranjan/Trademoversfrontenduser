import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaWhatsappSquare,FaInstagram,FaLinkedinIn ,FaWhatsapp,FaPhone} from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>Trade Movers</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="#"><i > <FaFacebookF/> </i></Link>
                            <Link href="https://wa.me/919867001622"><i > <FaWhatsapp/> </i> </Link>
                            <Link href="https://www.instagram.com/trademoverss" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="https://www.linkedin.com/in/trade-movers-3b376527"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="tel:+919324483088"><i > <FaPhone />  </i></Link>
                        </div>
                    </div>
                    
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Categories</li>
                            <li><a href="#">Drinkwear</a></li>
                            <li><a href="#">Garment & Accessories</a></li>
                            <li><a href="#">Gadgets</a></li>
                            <li><a href="#">Office Accessories</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Categories</li>
                            <li><a href="#">Stationery</a></li>
                            <li><a href="#">Watches</a></li>
                            <li><a href="#">Kitchen Essentials</a></li>
                            <li><a href="#">Office Essentials</a></li>
                        </ul>
                        {/* <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Courses</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Photoshop</a></li>
                        </ul> */}
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>

                        
                    </div>

                    
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"> Trade Movers.</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>

                </div>
            </footer>

        </>
    );
}

export default Footer;