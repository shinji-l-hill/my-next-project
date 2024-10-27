import React from 'react'
import { getContents, News } from '@/app/_libs/microcms';
import NewsList from '@/app/_component/NewsList';
import { notFound } from 'next/navigation';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagenation from '@/app/_component/Pagenation';

type Props = {
  params: {
    current: string
  }
}

const NewsPagenatePage = async ({params}: Props) => {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const {contents: news, totalCount} = await getContents<News>("news", {
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1)
  });
  return (
    <>
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} current={current}/>
    </>
  )
}

export default NewsPagenatePage