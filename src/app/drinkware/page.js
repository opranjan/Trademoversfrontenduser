import Drinkware from "../components/Drinkware";
import styles from "@/app/styles/common.module.css"
import Drinkwaresubcategory from "../components/drinkwaresubcategory";

async function getData() {
    
    const res = await fetch('https://trademovers.onrender.com/products/productCategory/drinkware', { cache: 'no-store' });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function  Drinkwarepage(){
    const data = await getData()
    return (
        <section className={styles.movieSection}>
        <div className={styles.container}>
            <h2>Drinkware products</h2>
            {/* <Drinkwaresubcategory/> */}
            <div className={styles.card_section}>
                {
                    data.map((curElem) => {
                        return <Drinkware key={curElem._id} {...curElem} />
                    })
                }
            </div>
        </div>
    </section>
    );
};
