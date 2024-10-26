import React from 'react'
import { getContents, News } from '../_libs/microcms';
import NewsList from '../_component/NewsList';

const Members = async () => {
  const {contents: news} = await getContents<News>("news");
  console.log(news);
  return <NewsList news={news} />
}

export default Members