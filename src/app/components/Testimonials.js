"use client";
import testimonialStyle from "../styles/Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import dynamic from "next/dynamic";

const Testimonials = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
                1500:{slidesPerView:3},
                1450: { slidesPerView: 2},
                720:{slidesPerView:1},
                300:{slidesPerView:1}
              }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={testimonialStyle.testimonialSwiper}
      >
        <SwiperSlide>
          <div className={testimonialStyle.testimonialContainer}>
            <div className={testimonialStyle.testimonialContainerfirst}>
            <div className={testimonialStyle.testimonialContainerImageContainer}>
              <img
                src="winscomp.jpeg"
                position="top"
                alt="..."
                className={testimonialStyle.testimonialContainerImage}
              />
              </div>
              <div
                className={testimonialStyle.testimonialContainersecond}
              >
                <p className={testimonialStyle.testimonialName} >Ronak Bhatia </p>
                <p className={testimonialStyle.testimonialdesignition}>Senior group manager</p>
              </div>
            </div>
            <div>
              <p>
              Trade Movers has been a fantastic organization to work with. They go the extra mile to ensure the Quality of goods is sent to Pan India in the time frame mentioned. I have worked with them multiple times and looking forward to many more collaborations with them. Thanks
              </p>
              {/* <MDBBtn href='#'>Button</MDBBtn> */}
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className={testimonialStyle.testimonialContainer}>
            <div className={testimonialStyle.testimonialContainerfirst}>
            <div className={testimonialStyle.testimonialContainerImageContainer}>
              <img
                src="shriramcomp.jpeg"
                position="top"
                alt="..."
                className={testimonialStyle.testimonialContainerImage}
              />
              </div>
              <div
                className={testimonialStyle.testimonialContainersecond}
              >
                <p className={testimonialStyle.testimonialName}>Amit</p>
                <p className={testimonialStyle.testimonialdesignition}>Assistant vice president</p>
              </div>
            </div>
            <div>
              <p>
              From the moment we reached out to discuss our merchandise needs, they demonstrated a deep understanding of our brand and vision. Their team took the time to listen attentively to our requirements and worked closely with us to develop a customized solution that perfectly aligned with our objectives. 
              </p>
              {/* <MDBBtn href='#'>Button</MDBBtn> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={testimonialStyle.testimonialContainer}>
            <div className={testimonialStyle.testimonialContainerfirst}>
            <div className={testimonialStyle.testimonialContainerImageContainer}>
              <img
                src="nivacomp.jpeg"
                position="top"
                alt="..."
                className={testimonialStyle.testimonialContainerImage}
              />
              </div>
              <div
                className={testimonialStyle.testimonialContainersecond}
              >
                <p className={testimonialStyle.testimonialName}>Jatin Malhotra </p>
                <p className={testimonialStyle.testimonialdesignition}>Procurement</p>
              </div>
            </div>
            <div>
              <p>
              You are too cool personality with good business ethics .keep up the good work.
              </p>
              {/* <MDBBtn href='#'>Button</MDBBtn> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={testimonialStyle.testimonialContainer}>
            <div className={testimonialStyle.testimonialContainerfirst}>
            <div className={testimonialStyle.testimonialContainerImageContainer}>
              <img
                src="ehcomp.jpeg"
                position="top"
                alt="..."
                className={testimonialStyle.testimonialContainerImage}
              />
              </div>
              <div
                className={testimonialStyle.testimonialContainersecond}
              >
                <p className={testimonialStyle.testimonialName}>Mr. Poonam J. Poladia</p>
                <p className={testimonialStyle.testimonialdesignition}>Asst. Director Marcom</p>
              </div>
            </div>
            <div>
              <p>
              The Trade gifting company exceeded my expectations with their exceptional service and unique gift selection. Their attention to detail and prompt delivery made the entire experience seamless. I highly recommend them to anyone looking to find the perfect gift for any occasion. They truly go above and beyond to ensure customer satisfaction
              </p>
              {/* <MDBBtn href='#'>Button</MDBBtn> */}
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className={testimonialStyle.testimonialContainer}>
            <div className={testimonialStyle.testimonialContainerfirst}>
            <div className={testimonialStyle.testimonialContainerImageContainer}>
              <img
                src="godrej.jpeg"
                position="top"
                alt="..."
                className={testimonialStyle.testimonialContainerImage}
              />
              </div>
              <div
                className={testimonialStyle.testimonialContainersecond}
              >
                <p className={testimonialStyle.testimonialName}>Bipin Shringarpure</p>
                <p className={testimonialStyle.testimonialdesignition}>Corporate Procurement Department </p>
              </div>
            </div>
            <div>
              <p>
              “Latest Gifting Products with Variety  , Delivery Schedules have always been maintained , Everything From Response to Quality to Service is commendable…”
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
};

export default dynamic(()=>Promise.resolve( Testimonials),{ssr:false});