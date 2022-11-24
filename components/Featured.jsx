import styles from "../styles/Featured.module.css";
import { useState } from "react";
import React from "react";
import NextImage from "next/image";

  var stopSlider=false;
  let timeout;

const Featured = () => {  

  const [index,setIndex]=useState(0); 

  const images=[
    require('../img/featured_adana.png'),
    require('../img/featured_ciger.png'),
    require('../img/featured_kusbasi.png'),
    require('../img/featured_yprk.png'),
    require('../img/featured_patlican.png'),
    require('../img/featured_tavuk.png'),
    require('../img/featured_kanat.png'),
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
               <NextImage  src={require('../img/arrowL.png')} alt="" layout="fill" objectFit="contain" loading="lazy" />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img,i)=>(
                    <div className={styles.imgContainer} key={i}>
                           <NextImage src={img}  alt="" layout="fill" objectFit="contain"  loading="lazy"/>
                    </div>
                ))}
        </div>
        <div className={styles.arrowContainer} style={{right:10}} onClick={()=>handleArrow("r")}>
            <NextImage  src={require('../img/arrowR.png')} alt="" layout="fill" objectFit="contain" loading="lazy"/>
        </div>
    </div>
  )
}

export default Featured