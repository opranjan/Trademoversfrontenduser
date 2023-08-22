import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";
import { MdEmail, MdVoiceChat, MdForum, MdPhone, MdHome } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        

        <section className={styles.contact_section}>
          <section>
            <h1>
              We'd love to hear  from you 
            </h1>
          </section>
          <section className={styles.formsection}>
            <div className={styles.contact_form}>
              <div className={styles.contact_address}>


                <div className={styles.contact_addressspandiv}>
                  <span><MdEmail /></span>
                  <span >Email :</span>
                  <span >trade.movers@gmail.com</span>
                </div>


                <div className={styles.contact_addressspandiv}>
                  <span ><MdPhone /></span>
                  <span >Mobile number :</span>
                  <span >+91 9867001622 </span>
                </div>

                <div className={styles.contact_addressspandiv}>
                  <span ><MdHome /></span>
                  <span >Office Address :</span>
                  <span >
                    A 301 silver palace akal society JB Nagar andheri east
                    mumbai 400059
                  </span>
                </div>


              </div>
            </div>
            <div>
            <ContactForm />
            </div>

          </section>
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30159.845891824953!2d72.863809!3d19.108501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8382263d201%3A0xa20278000c2eea2e!2sSilver%20Palace%2C%20Akal%20Society%2C%20J.B.%20Nagar%2C%20Tarun%20Bharat%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059%2C%20India!5e0!3m2!1sen!2sus!4v1689145655315!5m2!1sen!2sus" 
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;



