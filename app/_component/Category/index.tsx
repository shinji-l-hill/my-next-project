import React from 'react'
import styles from './index.module.css'
import { Category } from '@/app/_libs/microcms';

type Props = {
  category: Category;
}

const Category = ({category}: Props) => {
  return (
    <span className={styles.tag}>{category.name}</span>
  )
}

export default Category