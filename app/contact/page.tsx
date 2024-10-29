import React from 'react'
import styles from './page.module.css'; 
import ContactForm from '../_component/ContactForm';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問、ご相談は以下のフォームよりお問い合わせください
        <br />
        内容を確認後、担当者より通常3営業日以内にご連絡いたします。
      </p>
      <ContactForm />
    </div>
  )
}

export default ContactPage