"use client";

import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import axios from "axios";
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ContactForm = () => {
  const [name_of_person, setName_of_person] = useState("");
  const [name_of_company, setName_of_company] = useState("");
  const [mobileno_of_person, setMobileno_of_person] = useState("");
  const [email_of_person, setEmail_of_person] = useState("");
  const [product_required, setProduct_required] = useState("");
  const [place, setPlace] = useState("");
  const [designation,setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

  const handlepersonnameChange = (e) => {
    setName_of_person(e.target.value);
  };

  const handlecompanynameChange = (e) => {
    setName_of_company(e.target.value);
  };

  const handlemobilenoChange = (e) => {
    setMobileno_of_person(e.target.value);
  };

  const handleemailChange = (e) => {
    setEmail_of_person(e.target.value);
  };

  const handleproductrequiredChange = (e) => {
    setProduct_required(e.target.value);
  };

  const handleplaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handledesignationChange = (e) =>{
    setDesignation(e.target.value)
  }

  const handledescriptionChange = (e) => {
    setDescription(e.target.value);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/contact",
        {
            name_of_person,
            name_of_company,
            mobileno_of_person,
            email_of_person,
            email_of_person,
            product_required,
            place,
            designation,
            description
        }
      );
      console.log(response.data);
      // Reset form after successful upload
      setName_of_person("");
      setName_of_company("");
      setMobileno_of_person("");
      setEmail_of_person("");
      setProduct_required("");
      setPlace("");
      setDesignation("")
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className={styles.contact_form}
      onSubmit={handleSubmit}
    >
      <div className={styles.input_field}>
        <label htmlFor="name_of_person" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="name_of_person"
            id="name_of_person"
            placeholder="Enter your name"
            className={mulish.className}
            onChange={handlepersonnameChange}
            value={name_of_person}
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="name_of_company" className={styles.label}>
          Enter company name
          <input
            type="text"
            name="name_of_company"
            id="name_of_company"
            placeholder="Enter company name"
            className={mulish.className}
            onChange={handlecompanynameChange}
            value={name_of_company}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="mobileno_of_person" className={styles.label}>
          Phone Number
          <input
            type="number"
            name="mobileno_of_person"
            id="mobileno_of_person"
            placeholder="Enter your phone"
            className={mulish.className}
            onChange={handlemobilenoChange}
            value={mobileno_of_person}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email_of_person" className={styles.label}>
          Email
          <input
            type="text"
            name="email_of_person"
            id="email_of_person"
            placeholder="Enter your email"
            className={mulish.className}
            onChange={handleemailChange}
            value={email_of_person}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="product_required" className={styles.label}>
          Enter quantity
          <input
            type="text"
            name="product_required"
            id="product_required"
            placeholder="Enter quantity"
            className={mulish.className}
            onChange={handleproductrequiredChange}
            value={product_required}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="place" className={styles.label}>
          Enter your City
          <input
            type="text"
            name="place"
            id="place"
            placeholder="Enter your City"
            className={mulish.className}
            onChange={handleplaceChange}
            value={place}
            required
          />
        </label>
      </div>


      <div className={styles.input_field}>
        <label htmlFor="designation" className={styles.label}>
          Enter your designation
          <input
            type="text"
            name="designation"
            id="designation"
            placeholder="Enter your designation"
            className={mulish.className}
            onChange={handledesignationChange}
            value={designation}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="description" className={styles.label}>
          Message
          <textarea
            name="description"
            id="description"
            rows={5}
            placeholder="Enter your description"
            className={mulish.className}
            onChange={handledescriptionChange}
            value={description}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
