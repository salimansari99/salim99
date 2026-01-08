"use client";
import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showThankMsg, setShowThankMsg] = useState(false);

  //   const fetchRandomUser = async () => {
  //     try {
  //       const res = await fetch('https://randomuser.me/api/');
  //       const data = await res.json();
  //       const user = data.results[0];

  //       setFormData((prev) => ({
  //         ...prev,
  //         name: `${user.name.first} ${user.name.last}`,
  //         email: user.email,
  //         message: `Hi Salim, I'm reaching out to connect with you.`,
  //       }));
  //     } catch (err) {
  //       console.error('Failed to fetch user:', err);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchRandomUser();
  //   }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setShowThankMsg(true);
    setTimeout(() => {
      setShowThankMsg(false);
    }, 2000);
  };

  return (
    <section className={styles.contactContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.ttl}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Let's collaborate and build something amazing together
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              <span className={styles.labelIcon}>👤</span> Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="What should I call you?"
              value={formData.name}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              <span className={styles.labelIcon}>✉️</span> Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Where can I reach you?"
              value={formData.email}
              className={styles.inputField}
            />
          </div>
          <div className={`${styles.formGroup} ${styles.msg}`}>
            <label htmlFor="message">
              <span className={styles.labelIcon}>💬</span> Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              className={styles.msgArea}
              cols={30}
              rows={6}
              placeholder="Tell me about your project or just say hello..."
              value={formData.message}
            ></textarea>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.sendBtn}
            >
              <span>Send Message</span>
              <span className={styles.sendIcon}>→</span>
            </button>
          </div>
        </form>

        <div className={styles.sendEmail}>
          <div className={styles.divider}>
            <span className={styles.dividerText}>OR</span>
          </div>
          <p className={styles.mailTxt}>Send me a direct email at</p>
          <a href="mailto:salim99.official@gmail.com" className={styles.mailId}>
            salim99.official@gmail.com
          </a>
        </div>
      </div>

      <div
        className={styles.successMsgOverlay}
        style={{ display: showThankMsg ? "flex" : "none" }}
      >
        <div className={styles.successModal}>
          <div className={styles.successIcon}>✓</div>
          <p className={styles.greetingMsg}>Thanks for reaching out!</p>
          <p className={styles.successSubtext}>I'll get back to you soon.</p>
        </div>
      </div>
    </section>
  );
}
