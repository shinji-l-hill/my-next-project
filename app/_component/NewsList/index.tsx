import Image from 'next/image';
import styles from './index.module.css';
import React from 'react'
import { News } from '@/app/_libs/microcms';
import Category from '../Category';
import Date from '../Date';

type Props = {
  news: News[]
}

const NewsList = ({ news }: Props) => {
  if(news.length <= 0) {
    return  <p>記事がありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <div className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="no image"
              width={1200}
              height={630}
            />
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category}/>
                <Date date={article.pablishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default NewsList