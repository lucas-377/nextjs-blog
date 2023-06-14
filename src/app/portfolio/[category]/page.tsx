import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { items, Item } from './data';

const getData = (cat: string): Item[] => {
  const data = items[cat];
  return data || null;
};

const Category: React.FC<{ params: { category: string } }> = ({ params }) => {
  const data = getData(params.category);

  if (!data) {
    // Handle data not found
    return <h1>Data not found</h1>;
  }

  return (
    <>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>

          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Category;
