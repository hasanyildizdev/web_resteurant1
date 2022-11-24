import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList=()=>{  

  return (
    <div id="productList" className={styles.container}>
        <h1 className={styles.title}> ŞEHRİ ZİYAFET POPÜLER LEZZETLER </h1>
        <p className={styles.desc}>
            Benzersiz ortam ve samimi hizmet ile evinizde gibi hissedin.<br/>
            Ondan fazla kebap çeşidiyle müşterilerimize aradıkları lezzeti sunmaktayız.<br/>
            Ailenizle yada arkadaşlarınızla iyi zaman geçirebileceğiniz bir mekan... 
        </p>
      <div className={styles.wrapper}>
        <ProductCard />
      </div> 
      <div className={styles.menu}>
            <a href="/menu" target={"blank"}
               style={{
                        cursor:"pointer",
                        color:"#000",
                        fontsize:"20px",
                        fontWeight:"bold",
                        }}>Detaylı fiyat listesi için tıklayın!</a>
        </div>
    </div>
  )
}

export default ProductList