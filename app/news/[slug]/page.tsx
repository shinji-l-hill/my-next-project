import React from 'react'
import styles from './page.module.css';
import Article from "@/app/_component/Article"
import { getNewsDetail } from '@/app/_libs/microcms'
import ButtonLink from '@/app/_component/ButtonLink';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string
  }
}

const NewsDetail = async ({params}: Props) => {
  const newsDetail = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      <Article data={newsDetail}/>
      <div className={styles.footer}>
        <ButtonLink href={'/news'} >ニュース一覧へ</ButtonLink>
      </div>
    </>
  )
}

export default NewsDetail