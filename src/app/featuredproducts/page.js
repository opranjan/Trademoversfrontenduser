import styles from '@/app/styles/common.module.css'
import Featuredproducts from "../components/featuredproducts";
import pageStylef from "../styles/featuredproduct.module.css"



async function getData() {
    const res = await fetch('https://trademovers.onrender.com/products/productCategory/featuredproducts', { cache: 'no-store' });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }


const Featuredproductspage = async() => {
    const data = await getData()
    return (
        <div className={pageStylef.movieSectionbackground}>
        <section className={styles.movieSection}>
        <div className={styles.container}>
            {/* <h2>Employee onboard kit</h2> */}
            <div className={styles.card_section}>
                {
                    data.map((curElem) => {
                        return <Featuredproducts key={curElem._id} {...curElem} />
                    })
                }
            </div>
        </div>
    </section>
    </div>
    );
};

export default Featuredproductspage;