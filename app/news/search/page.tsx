import NewsList from '@/app/_component/NewsList'
import SearchField from '@/app/_component/searchField'
import { NEWS_LIST_LIMIT } from '@/app/_constants'
import { getContents, News } from '@/app/_libs/microcms'
import React from 'react'

type Props = {
  searchParams: {
    q?: string
  }
}

const SearchPage = async ({searchParams}: Props) => {
  const {contents: news} = await getContents<News>('news', {
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q, 
  })
  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  )
}

export default SearchPage