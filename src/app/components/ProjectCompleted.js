'use client'


import pcompletedStyle from "../styles/ProjectCompletd.module.css"
import dynamic from "next/dynamic";

function ProjectCompleted() {
  return (
    <div className={pcompletedStyle.pcompletedContainerMain}>

        <div className={pcompletedStyle.pcompletedContainer}>
        <img src="/TOTALEXPERIENCE.png" alt="tripppp" className={pcompletedStyle.pcompletedimage}/>
        <span className={pcompletedStyle.pcompletedTitle}>12+</span>
        <span className={pcompletedStyle.pcompletedText}>TOTAL EXPERIENCE</span>
        </div>

        <div className={pcompletedStyle.pcompletedContainer}>
        <img src="/HAPPYCUSTOMERS.png" alt="tripppp" className={pcompletedStyle.pcompletedimage} />
        <span className={pcompletedStyle.pcompletedTitle}>600+</span>
        <span className={pcompletedStyle.pcompletedText}>HAPPY CUSTOMERS</span>
        </div>

        <div className={pcompletedStyle.pcompletedContainer}>
        <img src="/TEAMMEMBERS.png" alt="tripppp" className={pcompletedStyle.pcompletedimage}/>
        <span className={pcompletedStyle.pcompletedTitle}>7+</span>
        <span className={pcompletedStyle.pcompletedText}>TEAM MEMBERS</span>
        </div>

        <div className={pcompletedStyle.pcompletedContainer}>
        <img src="/PRODUCTDELIVERY.png" alt="tripppp" className={pcompletedStyle.pcompletedimage}/>
        <span className={pcompletedStyle.pcompletedTitle}>12lac+</span>
        <span className={pcompletedStyle.pcompletedText}>PRODUCT DELIVERY</span>
        </div>
        
        <div className={pcompletedStyle.pcompletedContainer}>
        <img src="/PRODUCTPORTFOLIO.png" alt="tripppp" className={pcompletedStyle.pcompletedimage}/>
        <span className={pcompletedStyle.pcompletedTitle}>700+</span>
        <span className={pcompletedStyle.pcompletedText}>PRODUCT PORTFOLIO</span>
        </div>
    </div>
  );
}

export default dynamic(()=>Promise.resolve( ProjectCompleted),{ssr:false});