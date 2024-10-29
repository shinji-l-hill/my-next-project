'use client';

import React from 'react'
import styles from './index.module.css';
import { useFormState } from 'react-dom';
import { createContactData } from '@/app/_actions/contact';

const initialState = {
  status: "",
  message: ""
}

const ContactForm = () => {
  const [state, formAction ] = useFormState(createContactData, initialState); 
  console.log(state);

  if(state.status === 'success') {
    return (
      <p className={styles.success}>
        お問い合わせいただきありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    )
  }
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            姓
          </label>
          <input className={styles.textfield} type="text" name="lastname" id="lastname" />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input className={styles.textfield} type="text" name="firstname" id="firstname" />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
        </label>
        <input className={styles.textfield} type="text" name="company" id="company" />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input className={styles.textfield} type="text" name="email" id="email" />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ
        </label>
        <textarea className={styles.textfield} name="message" id="message" />
      </div>
      <div className={styles.actions}>
        {state.status === 'error' && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  )
}

export default ContactForm