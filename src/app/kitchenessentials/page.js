import Kitchenessentials from "../components/Kitchenessentials";
import styles from "@/app/styles/common.module.css"


async function getData() {
    const res = await fetch('https://trademovers.onrender.com/products/productCategory/kitchenessentials', { cache: 'no-store' });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }


const Kitchenessentialspage = async() => {
    const data = await getData()
    return (
        <section className={styles.movieSection}>
        <div className={styles.container}>
            <h2>Kitchenessentials products</h2>
            <div className={styles.card_section}>
                {
                    data.map((curElem) => {
                        return <Kitchenessentials key={curElem._id} {...curElem} />
                    })
                }
            </div>
        </div>
    </section>
    );
};

export default Kitchenessentialspage;