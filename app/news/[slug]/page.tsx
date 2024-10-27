import React from 'react'
import styles from './page.module.css';
import Article from "@/app/_component/Article"
import { getContentDetail, News } from '@/app/_libs/microcms'
import ButtonLink from '@/app/_component/ButtonLink';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string
  },
  searchParams: {
    dk?: string
  }
}

export const revalidate = 60;

const NewsDetail = async ({params, searchParams}: Props) => {
  const newsDetail = await getContentDetail<News>('news', params.slug, {
    draftKey: searchParams.dk
  }).catch(notFound);
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