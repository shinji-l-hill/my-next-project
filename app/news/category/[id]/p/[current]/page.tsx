import React from 'react'
import { getContentDetail, getContents, News, Category as CategoryType } from '@/app/_libs/microcms';
import NewsList from '@/app/_component/NewsList';
import { notFound } from 'next/navigation';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagenation from '@/app/_component/Pagenation';

type Props = {
  params: {
    id: string;
    current: string;
  }
}

const NewsCategoryPagenatePage = async ({params}: Props) => {
  const current = parseInt(params.current, 10);
  const category = await getContentDetail<CategoryType>('categories', params.id).catch(notFound);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const {contents: news, totalCount} = await getContents<News>("news", {
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1)
  });
  return (
    <>
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} current={current} basePath={`/news/category/${category.id}`}/>
    </>
  )
}

export default NewsCategoryPagenatePage