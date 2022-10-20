import Image from 'next/image';
import styles from '../../styles/Products.module.css';
import { data } from './../../data';
import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image
              src={img.url}
              alt=""
              objectFit="cover"
              layout='fill'
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/Contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name }, //context
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const product = data.filter((item) => item.name === name)[0];

  return {
    props: { product },
  };
};
export default Product;
