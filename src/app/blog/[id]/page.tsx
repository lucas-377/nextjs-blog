import React from 'react';
import { useRouter } from 'next/router';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Post {
  id: string;
  title: string;
  desc: string;
  img: string;
  username: string;
  content: string;
}

async function getData(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = React.useState<Post | null>(null);

  React.useEffect(() => {
    if (id) {
      fetchData();
    }

    async function fetchData() {
      const post = await getData(id as string);
      setData(post);
    }
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </>
  );
};

export default BlogPost;
