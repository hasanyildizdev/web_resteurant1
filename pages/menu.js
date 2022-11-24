import styles from "../styles/Menu.module.css"

const menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>-MENU-</div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th scope="col" className={styles.th}>#</th>
            <th scope="col" className={styles.th}>ÜRÜN TÜRÜ</th>
            <th scope="col" className={styles.th}>ÜRÜN ADI</th>
            <th scope="col"className={styles.th}>ÜRÜN FİYATI</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>1</th>
            <td className={styles.td}>Kebap</td>
            <td className={styles.td}>Adana Kebabı</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>2</th>
            <td className={styles.td}>Kebap</td>
            <td className={styles.td}>Kuşbaşı Kebabı</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>3</th>
            <td className={styles.td}>Kebap</td>
            <td className={styles.td}>Ciğer Kebabı</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>4</th>
            <td className={styles.td}>Kebap</td>
            <td className={styles.td}>Yaprak Kebabı</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>5</th>
            <td className={styles.td}>Kebap</td>
            <td className={styles.td}>Tavuk Şiş</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>6</th>
            <td className={styles.td}>Kebap</td>
            <td className={styles.td}>Tavuk Kanat</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>7</th>
            <td className={styles.td}>Çorba</td>
            <td className={styles.td}>Mercimek Çorbası</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>8</th>
            <td className={styles.td}>Salata</td>
            <td className={styles.td}>Çoban Salata</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>9</th>
            <td className={styles.td}>İçeçek</td>
            <td className={styles.td}>Pepsi Kutu Kola(200ml)</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>10</th>
            <td className={styles.td}>İçeçek</td>
            <td className={styles.td}>Ayran(200ml)</td>
            <td className={styles.td}>- TL</td>
          </tr>
          <tr className={styles.tr}>
            <th scope="row" className={styles.th}>11</th>
            <td className={styles.td}>İçeçek</td>
            <td className={styles.td}>Şalgam(200ml)</td>
            <td className={styles.td}>- TL</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.explanation}>
        Dikkat!: Fiyat güncel olmayabilir, lütfen bilgi için iletişime geçin.
      </div>
    </div>
  )
}

export default menu