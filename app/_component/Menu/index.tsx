"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import cx from 'classnames';


const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items} >
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.button} onClick={menuHandler}>
        {isOpen ? (
          <Image 
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        ) : (
          <Image 
            src="/menu.svg"
            alt="メニュー"
            width={24}
            height={24}
            priority
          />
        )}
      </button>
    </div>
  )
}

export default Menu