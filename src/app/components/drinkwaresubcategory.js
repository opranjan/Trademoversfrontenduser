"use client";
import styles from "@/app/styles/common.module.css"
import Drinkwaresubcategorydisplay from "./drinkwaresubcategorydisplay";
import React, { useState } from 'react';



// async function getData() {
    
//     const res = await fetch('http://localhost:4000/products', { cache: 'no-store' });
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
//     return res.json()
//   }

export default async function  Drinkwaresubcategory(){
    
    const [apiData, setApiData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  
    // Function to fetch API data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/products');
        const data = await response.json();
        setApiData(data);
        setFilteredData(data); // Initially, set filtered data to the full data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Function to handle filtering on button click
    const handleFilter = () => {
      // Apply your filtering logic here
      // For example, let's assume we want to filter items that meet a certain condition (e.g., item.category === 'some_category')
      const filteredItems = apiData.filter(item => item.category === 'bag');
      setFilteredData(filteredItems);
    };

    return (
        <section className={styles.movieSection}>
        <div className={styles.container}>
            <h2>Drinkware products</h2>
            <button onClick={handleFilter}>Filter Data</button>
            <div className={styles.card_section}>
                {
                    filteredData.map((curElem) => {
                        return <Drinkwaresubcategorydisplay key={curElem._id} {...curElem} />
                    })
                }
            </div>
        </div>
    </section>
    );
};
