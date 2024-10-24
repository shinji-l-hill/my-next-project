import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from './_component/ButtonLink'
import { News } from '@/app/_libs/microcms';
import NewsList from "./_component/NewsList";

const data: {
  contents: News[]
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報"
      },
      pablishedAt: "2023/05/19",
      createdAt: "2023/05/19"
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOS30に選出されました",
      category: {
        name: "更新情報"
      },
      pablishedAt: "2023/05/19",
      createdAt: "2023/05/19"
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報"
      },
      pablishedAt: "2023/04/19",
      createdAt: "2023/04/19"
    }
  ]
}

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>私たちはせ市場をリードしているグローバルテックカンパニーです</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData}/>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">
            もっと見る
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
