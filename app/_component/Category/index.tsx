import React from 'react'
import styles from './index.module.css'
import { Category as CategoryType } from '@/app/_libs/microcms';

type Props = {
  category: CategoryType;
}

const Category = ({category}: Props) => {
  return (
    <span className={styles.tag}>{category.name}</span>
  )
}

export default Category