'use client';

import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: string;
  img: string;
  title: string;
  desc: string;
}

async function getData(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog: React.FC = () => {
  const [data, setData] = React.useState<Post[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const posts = await getData();
      setData(posts);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>

          <div>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
