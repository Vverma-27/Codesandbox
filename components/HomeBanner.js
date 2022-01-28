import styles from "../styles/HomeBanner.module.css";
const HomeBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.bannerImg} src="/banner.png" />
      <div className={styles.bannerTextContainer}>
        <h1 className={styles.bannerTextHeading}>
          Make Your Custom
          <br />
          PC with ease.
        </h1>
        <div className={styles.bannerTextLine}></div>
        <p className={styles.bannerTextSubtitle}>
          With Atrox stop your search for a trusted computer marketplace. We
          provide the best prices, most reputed reatilers and the most reliable
          platform possible. So building a custom PC has never been this easy.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
