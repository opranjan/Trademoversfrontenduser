// pages/testimonials.js

import Testimonial from '../components/Testimonials';
import dynamic from 'next/dynamic';

const testimonialsData = [
  {
    text: "I had an amazing experience with this company!",
    author: "John Doe",
    image: "/images/john.jpg",
  },
  {
    text: "Their services exceeded my expectations. Highly recommended!",
    author: "Jane Smith",
    image: "/images/jane.jpg",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="testimonials-container">
      {testimonialsData.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default dynamic(()=>Promise.resolve( TestimonialsPage),{ssr:false});