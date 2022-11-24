import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";


  var stopSlider=false;
  let timeout;

const Featured = () => {  

  const [index,setIndex]=useState(0); 

  const images=[
    require('../public/img/featured_adana.png'),
    require('../public/img/featured_ciger.png'),
    require('../public/img/featured_kusbasi.png'),
    require('../public/img/featured_yprk.png'),
    require('../public/img/featured_patlican.png'),
    require('../public/img/featured_tavuk.png'),
    require('../public/img/featured_kanat.png'),
  ];

  const handleArrow=(direction)=>{
    if(direction==="l"){
        setIndex(index !==0 ? index-1 :6);
        stopSlider=true;
        clearTimeout(timeout.current);
      }
    else if(direction==="r"){
        setIndex(index !==6 ? index+1 :0);
        stopSlider=true;
        clearTimeout(timeout.current);
    }
    else if(!stopSlider){
       setIndex(index !==6 ? index+1 :0);
    }
  }

  timeout=setTimeout(handleArrow,3000,"s");

  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:10}} onClick={()=>handleArrow("l")}>
            <Image  src={require('../public/img/arrowL.png')} alt="" layout="fill" objectFit="contain" priority={true} />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img,i)=>(
                    <div className={styles.imgContainer} key={i}>
                           <Image src={img}  alt="" layout="fill" objectFit="contain" priority={true}/>
                    </div>
                ))}
        </div>
        <div className={styles.arrowContainer} style={{right:10}} onClick={()=>handleArrow("r")}>
            <Image  src={require('../public/img/arrowR.png')} alt="" layout="fill" objectFit="contain"/>
        </div>
    </div>
  )
}

export default Featured