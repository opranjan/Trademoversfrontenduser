"use client"
import styles from '@/app/styles/common.module.css'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';

const Stationery = (curElem) => {

  const { _id, productname, productmaterial, productcstegory,image} = curElem;
      
    return (
      <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={`https://trademovers.onrender.com/uploads/${image}`} alt="Image" width={260} height={200}  priority={true}/>
        </div>
        <div className={styles.card_data}>
            <h2>{productname}</h2>
            <p>
                {productmaterial}
            </p>
            <p>{productcstegory}</p>

            <Link href={`/stationery/${_id}`}>
                <button>
                    Read More
                </button>
            </Link>
        </div>
    </div>
    );
};

export default dynamic(()=>Promise.resolve( Stationery),{ssr:false});