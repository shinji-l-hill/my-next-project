import React from 'react'
import styles from './index.module.css';
import Category from '@/app/_component/Category';
import Date from '@/app/_component/Date';
import Image from 'next/image';
import { News } from '@/app/_libs/microcms';

type Props = {
  data: News
}

const Article = async ({data}: Props) => {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
          <Image
            className={styles.thumbnail}
            src={data.thumbnail.url}
            alt=""
            width={1200}
            height={630}
          />
        )}
        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        />
    </main>
  )
}

export default Article