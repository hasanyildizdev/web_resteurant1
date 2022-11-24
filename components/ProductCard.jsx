import styles from "../styles/ProductCard.module.css";
import NextImage from "next/image";

const ProductCard = ()=> {

  const images=[
    {img: require('../img/a_adana.png'),price:"- TL",name:"ADANA KEBABI"},
    {img: require('../img/a_kusbasi.png'),price:"-  TL",name:"KUŞBAŞI"},
    {img: require('../img/a_patlican.png'),price:"-  TL",name:"PATLICAN KEBABI"},
    {img: require('../img/a_yaprak.png'),price:"-  TL",name:"YAPRAK KEBAP"},
    {img: require('../img/a_tavuk.png'),price:"-  TL",name:"TAVUK ŞİŞ"}, 
  ];

  return (
    <div className={styles.container}>
      {images.map((item,i)=>(
        <div className={styles.card} key={i}>
          <NextImage src={item.img} alt="" width={"200"} objectFit="contain" loading="lazy"/>
          <h1 className={styles.title}>{item.name}</h1>
          <h3 className={styles.price}>{item.price}</h3>
          <p className={styles.desc}>
              Benzersiz tadıyla lezzetin farkına varın.
          </p>
        </div>
      ))}
    </div>
  )
}

export default ProductCard