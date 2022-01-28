import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <div className="section">
      <div
        className="section-header"
        style={{
          margin: "0 0 6vh",
          //   textAlign: "left",
          paddingLeft: "0",
          width: "auto",
          display: "inline-block",
        }}
      >
        <h1 className="section-heading">Contact Us</h1>
      </div>
      <form className={styles.form}>
        <input type="text" className={styles.input} placeholder="Full Name" />
        <input type="text" className={styles.input} placeholder="Email" />
        <textarea
          className={styles.input}
          rows="5"
          placeholder="Type in your message here"
        ></textarea>
        <button
          className="secondary-button"
          style={{ padding: "2vmin 3vmax", fontSize: "1.2rem" }}
        >
          Contact
        </button>
      </form>
    </div>
  );
};

export default Contact;
