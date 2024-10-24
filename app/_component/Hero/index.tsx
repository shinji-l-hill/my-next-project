import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';

type Props = {
  title: string;
  sub: string;
}

const Hero = ({title, sub}: Props) => {
  return (
    <section className={styles.top}>
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{sub}</p>
    </div>
    <Image
      className={styles.bgimg}
      src="/img-mv.jpg"
      alt=""
      width={4000}
      height={1200}
    />
  </section>
  )
}

export default Hero