import Emponboardkit from "../components/Emponboardkit";
import Link from "next/link";
import Image from "next/image";
import styles from '@/app/styles/common.module.css'



async function getData() {
    const res = await fetch('https://trademovers.onrender.com/products/productCategory/emponboardkit', { cache: 'no-store' });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const Emponboardkitpage = async() => {

      const data = await getData()

    return (
        <section className={styles.movieSection}>
        <div className={styles.container}>
            <h2>Employee onboard kit</h2>
            <div className={styles.card_section}>
                {
                    data.map((curElem) => {
                        return <Emponboardkit key={curElem._id} {...curElem} />
                    })
                }
            </div>
        </div>
    </section>
    );
};

export default Emponboardkitpage;