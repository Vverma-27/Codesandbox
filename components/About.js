import styles from "../styles/About.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect, useLayoutEffect } from "react";

const About = () => {
  const panelsArrayRef = useRef([]);
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => (document.body.style.overflowX = "initial");
  }, []);
  useLayoutEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    gsap.to(panelsArrayRef.current, {
      xPercent: -100 * (panelsArrayRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: `.${styles.container}`,
        pin: true,
        scrub: 2,
        snap: 1 / (panelsArrayRef.current.length - 1),
        id: "panels",
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: "+=3500",
      },
    });
    console.log(ScrollTrigger.getAll());
    return () => {
      // console.log(, ScrollTrigger.getAll());
      ScrollTrigger.getById("panels").kill();
      // ScrollTrigger.getAll().forEach((instance) => {
      //   console.log(instance);
      //   instance.kill();
      // });
    };
  }, []);
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.panel} ${styles.goals}`}
        ref={(e) => (panelsArrayRef.current[0] = e)}
      >
        <div
          className="section-header"
          // ref={(el) => (revealRefArray.current[0] = el)}
        >
          <h1 className="section-heading reveal--fromTop">Our Objectives</h1>
        </div>
        <p className={styles.bannerTextSubtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          distinctio minima magni doloribus dolores sint quasi quo corporis
          atque sequi animi eveniet cumque iure ipsa nulla architecto alias, ad
          mollitia. Voluptatum incidunt doloremque quas recusandae quia porro.
          Perspiciatis consequuntur voluptate fugiat nesciunt dolor, libero
          quisquam? Adipisci ullam vero quam voluptatibus modi, corporis nostrum
          possimus illo odio ipsam consectetur, beatae at. Dolorem a praesentium
          omnis. Ducimus, temporibus voluptate doloribus dignissimos saepe
          voluptatibus maiores pariatur hic accusamus sunt quos aliquid
          assumenda cumque totam quae reprehenderit ut suscipit repellat
          incidunt quasi vero possimus. Impedit iste illum ipsa atque minus
          rerum? Animi tempore recusandae accusamus nisi dolores maxime
          consequatur numquam quaerat ex beatae facilis quas suscipit, nam natus
          totam soluta porro, debitis tempora corporis! Hic, tenetur commodi
          dolore sapiente quia ducimus enim dolorem vel! Illum voluptas
          laudantium exercitationem voluptatum aperiam! Fugiat, atque temporibus
          eius sunt impedit eum doloremque totam perspiciatis sed, voluptas iste
          eligendi. Odio sunt voluptate laudantium? Quisquam maxime, amet
          dolorum, cum aliquid quo repellat temporibus, sit facilis at ipsam
        </p>
      </div>

      <div
        className={`${styles.panel} ${styles.vision}`}
        ref={(e) => (panelsArrayRef.current[1] = e)}
      >
        <div
          className="section-header"
          // ref={(el) => (revealRefArray.current[0] = el)}
        >
          <h1 className="section-heading reveal--fromTop">Our Vision</h1>
        </div>
        <p className={styles.bannerTextSubtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          distinctio minima magni doloribus dolores sint quasi quo corporis
          atque sequi animi eveniet cumque iure ipsa nulla architecto alias, ad
          mollitia. Voluptatum incidunt doloremque quas recusandae quia porro.
          Perspiciatis consequuntur voluptate fugiat nesciunt dolor, libero
          quisquam? Adipisci ullam vero quam voluptatibus modi, corporis nostrum
          possimus illo odio ipsam consectetur, beatae at. Dolorem a praesentium
          omnis. Ducimus, temporibus voluptate doloribus dignissimos saepe
          voluptatibus maiores pariatur hic accusamus sunt quos aliquid
          assumenda cumque totam quae reprehenderit ut suscipit repellat
          incidunt quasi vero possimus. Impedit iste illum ipsa atque minus
          rerum? Animi tempore recusandae accusamus nisi dolores maxime
          consequatur numquam quaerat ex beatae facilis quas suscipit, nam natus
          totam soluta porro, debitis tempora corporis! Hic, tenetur commodi
          dolore sapiente quia ducimus enim dolorem vel! Illum voluptas
          laudantium exercitationem voluptatum aperiam! Fugiat, atque temporibus
          eius sunt impedit eum doloremque totam perspiciatis sed, voluptas iste
          eligendi. Odio sunt voluptate laudantium? Quisquam maxime, amet
          dolorum, cum aliquid quo repellat temporibus, sit facilis at ipsam
        </p>
      </div>
      <div
        className={`${styles.panel} ${styles.team}`}
        ref={(e) => (panelsArrayRef.current[2] = e)}
        style={{
          background: "linear-gradient(to right bottom, #2ecc70de, #16a084d8)",
        }}
      >
        <div
          className="section-header"
          // ref={(el) => (revealRefArray.current[0] = el)}
        >
          <h1 className="section-heading reveal--fromTop">Our CEO</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "0 auto",
            alignItems: "center",
            gap: "2vmax",
          }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.ellipses}>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
            </div>
            <div className={styles["greySquare"]}></div>
            <div className={styles.ellipses}>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
            </div>
          </div>
          <div style={{ width: "50vmax" }}>
            <p className={styles.bannerTextTitle} style={{ width: "100%" }}>
              Krish Kumar Gupta
            </p>
            <p className={styles.bannerTextSubtitle} style={{ width: "100%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, corporis. Corrupti, laudantium? Animi aliquam
              laudantium velit architecto, neque totam esse recusandae
              voluptates veniam, modi provident, cupiditate culpa? Eligendi,
              reprehenderit reiciendis.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.panel} ${styles.team}`}
        ref={(e) => (panelsArrayRef.current[3] = e)}
      >
        <div
          className="section-header"
          // ref={(el) => (revealRefArray.current[0] = el)}
        >
          <h1 className="section-heading reveal--fromTop">Our CTO</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "0 auto",
            alignItems: "center",
            gap: "2vmax",
          }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.ellipses}>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
            </div>
            <div className={styles["greySquare"]}></div>
            <div className={styles.ellipses}>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
            </div>
          </div>
          <div style={{ width: "50vmax" }}>
            <p className={styles.bannerTextTitle} style={{ width: "100%" }}>
              Vihaan Verma
            </p>
            <p className={styles.bannerTextSubtitle} style={{ width: "100%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, corporis. Corrupti, laudantium? Animi aliquam
              laudantium velit architecto, neque totam esse recusandae
              voluptates veniam, modi provident, cupiditate culpa? Eligendi,
              reprehenderit reiciendis.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.panel} ${styles.team}`}
        ref={(e) => (panelsArrayRef.current[4] = e)}
      >
        <div
          className="section-header"
          // ref={(el) => (revealRefArray.current[0] = el)}
        >
          <h1 className="section-heading reveal--fromTop">
            Lead Frontend Developer
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "0 auto",
            alignItems: "center",
            gap: "2vmax",
          }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.ellipses}>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
            </div>
            <div className={styles["greySquare"]}></div>
            <div className={styles.ellipses}>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
              <div className={styles.ellipse}></div>
            </div>
          </div>
          <div style={{ width: "50vmax" }}>
            <p className={styles.bannerTextTitle} style={{ width: "100%" }}>
              Rijak Singh Malhotra
            </p>
            <p className={styles.bannerTextSubtitle} style={{ width: "100%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, corporis. Corrupti, laudantium? Animi aliquam
              laudantium velit architecto, neque totam esse recusandae
              voluptates veniam, modi provident, cupiditate culpa? Eligendi,
              reprehenderit reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
