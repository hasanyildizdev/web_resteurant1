import styles from "../styles/Navbar.module.css"
import Head from 'next/head'
import NextImage from "next/image";

const Navbar=()=>{

    return(

        <div className={styles.container}>

        <Head>
          <title>Şehri Ziyafet</title>
          <link rel="icon" href="/favico.ico" />
        </Head>

        {/* <input type="checkbox" className="checkbox"/> */}

            <div className={styles.item}>
                    <div className={styles.menuDiv} tabIndex="1">
                                <NextImage 
                                    alt="" 
                                    src={require('../img/menu_icon3.png')} 
                                    width={"35"} 
                                    height={"35"}
                                    loading="lazy"
                                />
                    </div> 
                    <ul className={styles.listMobile} >
                        <a href="/" target="blank">
                            <li className={styles.listItemMobile}>Anasayfa</li>
                        </a>
                        <a href="/menu" target="blank">
                            <li className={styles.listItemMobile}>Menu</li>
                        </a>
                        <a href="../../#productList">
                            <li  style={{cursor:"pointer"}} className={styles.listItemMobile}>Ürünler</li>
                        </a>
                        <a href="../../#footer" target="blank">
                            <li className={styles.listItemMobile}>İletişim</li>
                        </a>
                    </ul>

                <div className={styles.name}> ~ŞEHRİ ZİYAFET~ </div>

                <ul className={styles.listPC} >
                    <a href="/" target="blank">
                         <li className={styles.listItemPC}>Anasayfa</li>
                    </a>
                    <a href="/menu" target="blank">
                        <li className={styles.listItemPC}>Menu</li>
                    </a>
                    <NextImage 
                        className={styles.manImage}
                        src={require('../img/chef.png')} 
                        alt="" 
                        height={"100"} 
                        loading="lazy"
                        />
                    <a href="../../#productList">
                        <li  style={{cursor:"pointer"}} className={styles.listItemPC}>Ürünler</li>
                    </a>
                    <a href="../../#footer" target="blank">
                        <li className={styles.listItemPC}>İletişim</li>
                    </a>
                </ul>
            </div>

            <div className={styles.item}>
                <div className={styles.call}>

                    <div className={styles.texts}>
                        <div className={styles.text}>ŞİMDİ SİPARİŞ ET!</div>
                        <div className={styles.text}>0539 307 2580</div>
                    </div>
                    <div className={styles.callButton}>
                        <a href="tel:+905393072580">
                            <NextImage src={require('../img/phone.png')}
                            alt=""
                            loading="lazy"
                            className={styles.phoneImage} />     
                        </a>
                    </div>

                </div>
            </div>
 
        </div>
    )
}

export default Navbar