import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import Head from 'next/head'

const Navbar=()=>{

    return(

        <div className={styles.container}>

            <style jsx>{`
                .checkbox:checked ~ .list{
                }

                @media screen and (max-width:480px) {
   
                }
            `}</style>

        <Head>
          <title>Şehri Ziyafet</title>
          <link rel="icon" href="/favico.ico" />
        </Head>

        {/* <input type="checkbox" className="checkbox"/> */}

            <div className={styles.item}>
                    <div className={styles.menuDiv} tabIndex="1">
                                <Image 
                                    alt="" 
                                    src={require('../public/img/menu_icon3.png')} 
                                    width={"35"} 
                                    height={"35"}
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
                        <a href="/contact" target="blank">
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
                    <Image 
                        className={styles.manImage}
                        src={require('../public/img/chef.png')} 
                        alt="" 
                        height={"100"} 
                        />
                    <a href="../../#productList">
                        <li  style={{cursor:"pointer"}} className={styles.listItemPC}>Ürünler</li>
                    </a>
                    <a href="/contact" target="blank">
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
                            <Image src={require('../public/img/phone.png')}
                            alt=""
                            className={styles.phoneImage} />     
                        </a>
                    </div>

                </div>
            </div>
 
        </div>
    )
}

export default Navbar