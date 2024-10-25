import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import { getContents, Member } from '../_libs/microcms';
import { MEMBERS_LIST_LIMIT } from '../_constants';

const Members = async () => {
  const data = await getContents<Member>("members", {limit: MEMBERS_LIST_LIMIT});
  return (
    <div className={styles.container}>
      {data.contents.length <= 0 ? (
        <p className={styles.empty}>メンバーが登録されていません</p>
      ) : (
        <ul className="">
          {data.contents.map(member => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Members