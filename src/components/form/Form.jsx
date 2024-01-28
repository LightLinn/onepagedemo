import React, { useState } from 'react';
import styles from './form.module.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.textContainer}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>留下您的資料</h3>
        <h3 className={styles.title}>讓我們為您服務</h3>
      </div>
    
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <br />
        <div className={styles.formGroup}>
          <label htmlFor="name">姓名：</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">电话：</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobile">手机：</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">电子邮箱：</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">留言：</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitButton}>送出</button>
      </form>
    </div>
  );
};

export default ContactForm;
