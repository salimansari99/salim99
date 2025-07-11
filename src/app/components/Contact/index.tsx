'use client';
import { useEffect, useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setShowThankMsg(true);
    setTimeout(() => {
      setShowThankMsg(false);
    }, 2000);
  };

  return (
    <section className={styles.contactContainer}>
      <h2 className={styles.ttl}>Contact Me</h2>

      <form className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder="What should I call you ?"
            value={formData.name}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Where can I reach you ?"
            value={formData.email}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.msg}`}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            className={styles.msgArea}
            cols={30}
            rows={5}
            placeholder="Typing..."
            value={formData.message}
          ></textarea>
        </div>
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <button type="submit" onClick={handleSubmit} className={styles.sendBtn}>
            SEND
          </button>
        </div>
      </form>

      <div className={styles.sendEmail}>
        <p className={styles.mailTxt}>Or send me a direct email at</p>
        <p className={styles.mailId}>salim99.official@gmail.com</p>
      </div>

      <div
        className={styles.successMsgOverlay}
        style={{ display: showThankMsg ? 'block' : 'none' }}
      >
        <div className={styles.successModal}>
          <p className={styles.greetingMsg}>Thanks for reaching out!</p>
        </div>
      </div>
    </section>
  );
}