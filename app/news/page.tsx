import React from 'react'
import { getContents, News } from '../_libs/microcms';
import NewsList from '../_component/NewsList';
import { NEWS_LIST_LIMIT } from '../_constants';
import Pagenation from '../_component/Pagenation';
import SearchField from '../_component/searchField';

const NewsListPage = async () => {
  const {contents: news, totalCount} = await getContents<News>("news", {
    limit: NEWS_LIST_LIMIT
  });
  return (
    <>
    <SearchField />
      <NewsList news={news} />
      <Pagenation totalCount={totalCount}/>
    </>
  )
}

export default NewsListPage