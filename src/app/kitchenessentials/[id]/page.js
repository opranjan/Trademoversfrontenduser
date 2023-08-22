import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";



async function getData(id) {
    const res = await fetch(`https://trademovers.onrender.com/products/productCategory/kitchenessentials/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const Page = async ({params}) => {
    const id = params.id;
    const data = await getData(id)
   

    return (

            <div className={styles.container}>
                <h2 className={styles.movie_title}>   Drink ware \ <span> {data.productname} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={`https://trademovers.onrender.com/uploads/${data.image}`} alt={data.productname} width={600} height={500} />
                    </div>
                    <div>
                        <h1>{data.productname}</h1>
                        <p>{data.productmaterial}</p>
                    </div>
                </div>
            </div>

    );
};

export default Page;