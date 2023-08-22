"use client";
import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */

 const Whatsapp=()=> {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="+919867001622"
        accountName="Trademovers"
        
      />
    </div>
  );
}


export default Whatsapp;
