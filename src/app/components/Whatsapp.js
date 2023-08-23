"use client";
import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import dynamic from "next/dynamic";

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


export default dynamic(()=>Promise.resolve( Whatsapp),{ssr:false});
