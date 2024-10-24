import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';

type Props = {
  date: string;
}

const Date = ({date}: Props) => {
  return (
    <span className={styles.date}>
    <Image
      src="/clock.svg"
      alt="no image"
      width={16}
      height={16}
      priority
    />
    {date}
  </span>
  )
}

export default Date