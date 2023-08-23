import Herosection from "@/app/components/Herosection";
import Carasole from "@/app/components/Carasole";
import Categorylayout from "./components/Categorylayout";
import pageStyle from "./styles/Cardsection.module.css"
import Clienttrustus from "./components/Clienttrustus";
import Testimonials from "./components/Testimonials";
import TestimonialsPage from "./components/TestimonialsPage";
import ProjectCompleted from "./components/ProjectCompleted";
import Whatsapp from "./components/Whatsapp";
import Featuredproductspage from "./featuredproducts/page";




const Page = () => {
    return (
        <>
          <Carasole/>
          <div className={pageStyle.CategorylayoutContainer}>
            <Categorylayout/>
          </div>


          <div className={pageStyle.featuredproductsContainer}>
          Featured Products
            <Featuredproductspage/>
          </div>


          <div className={pageStyle.ClienttrustusContainer}>
          <Clienttrustus/>
          </div>

          <div className={pageStyle.TestimonialsContainer}>
           <p className={pageStyle.Testimonialsheading}>Testimonials</p>
          <Testimonials />
          </div>


          <div className={pageStyle.OurAchievementsContainer}>
          Our Achievements
          <ProjectCompleted/>
          </div>

          {/* <Whatsapp/> */}
          
        </>
    );
};

export default Page;