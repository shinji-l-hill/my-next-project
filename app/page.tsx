import styles from "./page.module.css";
import ButtonLink from './_component/ButtonLink'
import NewsList from "./_component/NewsList";
import Hero from "./_component/Hero";
import { getContents, News } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";

export const revalidate = 0;


export default async function Home() {
  const data = await getContents<News>("news", {limit: TOP_NEWS_LIMIT});
  return (
    <>
      <Hero title="テクノロジーの力で世界を変える" sub="私たちはせ市場をリードしているグローバルテックカンパニーです" />
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents}/>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">
            もっと見る
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
