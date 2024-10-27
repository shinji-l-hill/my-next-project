import React from 'react'
import { Category as CategoryType, getContentDetail, getContents, News } from '../../../_libs/microcms';
import NewsList from '../../../_component/NewsList';
import { notFound } from 'next/navigation';
import Category from '@/app/_component/Category';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagenation from '@/app/_component/Pagenation';

type Props = {
  params: {
    id: string
  }
}

const NewsCategoryList = async ({params}: Props) => {
  const category = await getContentDetail<CategoryType>('categories', params.id).catch(notFound);
  const {contents: news, totalCount} = await getContents<News>("news", {
    filters: `category[equals]${params.id}` ,
    limit: NEWS_LIST_LIMIT
  });
  return (
    <>
      <p>
        <Category category={category}/> の一覧
      </p>
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} basePath={`/news/category/${category.id}`}/>
    </>
  )
  
}

export default NewsCategoryList