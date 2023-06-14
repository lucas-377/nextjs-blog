/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

export const metadata = {
  title: 'Lucas Santana - Contact Information',
  description: 'This is Contact Page',
};

const Contact: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
