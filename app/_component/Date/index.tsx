import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import { formatDate } from '@/app/_libs/utils';

type Props = {
  date: string;
}

const Date = ({date}: Props) => {
  const formatedDate = formatDate(date);
  return (
    <span className={styles.date}>
    <Image
      src="/clock.svg"
      alt="no image"
      width={16}
      height={16}
      priority
    />
    {formatedDate}
  </span>
  )
}

export default Date