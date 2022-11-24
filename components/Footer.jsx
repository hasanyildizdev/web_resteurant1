import styles from "../styles/Footer.module.css";
import NextImage from "next/image";

const Footer=()=>{
    return(
        <div className={styles.container} id="footer">
            <div className={styles.item}>
                    <NextImage className={styles.imageBg} src={require("../img/bg.png")} loading="lazy" alt=""/>
            </div>
            <div className={styles.item}>
                <div className={styles.rightContainer}>

                    <div className={styles.item2}>
                        <div className={styles.card}>
                        <h2 className={styles.motto}> 
                            BUYRUN BEKLERİZ,<br/>
                            SİZİN İÇİN HAZIRLANDIK,<br/>
                            ŞEHRİ ZİYAFET,<br/>
                            EN LEZZETLİ KEBAPLAR...
                        </h2>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.title}>RESTORAN ADRESİ</h1>
                            <p className={styles.text}>
                                Beyler Mahallesi, <br/>
                                Şamil Tayyar Bulvarı <br/>
                                No:114<br/><br/>
                                İslahiye / Gaziantep
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.title}>ÇALIŞMA SAATLERİMİZ</h1>
                            <p className={styles.text}>
                                HAFTANIN HERGÜNÜ <br/>
                                09:00 - 22:00
                                <br/> <br/>
                            </p>
                            <div >
                            <h1 className={styles.title}>TELEFON NUMARASI</h1>
                            <p className={styles.text}>
                                +90 539 307 2580
                            </p>
                        </div>
                        </div>
                    </div>


                    <div className={styles.item2}>
                        <div className={styles.buttom}>
                            <div className={styles.iyiapp}>
                                <p>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.iyiapp.com">www.iyiapp.com</a><br/>
                                hasanyildiz.97@hotmail.com<br/>
                                ©2022 created by Hasan YILDIZ
                                </p>
                            </div>
                            <div className={styles.map}>
                                <iframe className={styles.mapImage} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6555.901410879422!2d36.62973759530109!3d37.04237454436871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152e557129a12e5f%3A0x629dcb419add2a3a!2s%C5%9Eehr-i%20Ziyafet!5e0!3m2!1str!2str!4v1669153846756!5m2!1str!2str" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer