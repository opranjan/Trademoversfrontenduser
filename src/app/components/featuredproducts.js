"use client";
import styles from "@/app/styles/common.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pageStylef from "../styles/featuredproduct.module.css"

const Featuredproducts = (curElem) => {
    const { _id,productname, productmaterial, productcstegory,image} = curElem;


  return (
    
        <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={`https://trademovers.onrender.com/uploads/${image}`} alt="Image" width={260} height={200} />
        </div>
        <div className={styles.card_data}>
        <h2 id={pageStylef.fpheading}>{productname}</h2>
            <p className={pageStylef.para}>
                {productmaterial}
            </p>
            <p>{productcstegory}</p>

            <Link href={`/drinkware/${_id}`}>
                <button>
                    Read More
                </button>
            </Link>
        </div>
    </div>


);
};

export default Featuredproducts;
