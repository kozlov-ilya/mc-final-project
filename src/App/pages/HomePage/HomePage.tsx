import Skeleton from 'components/Skeleton';
import { useGetCategoryProducts, useCurrentCategory } from 'hooks';
import CategoryTabs from './components/CategoryTabs';
import ProductList from './components/ProductList';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { currentCategory } = useCurrentCategory();

  const { products, isPending } = useGetCategoryProducts(currentCategory);

  return (
    <div className={styles['HomePage']}>
      <div className={styles['CategoryTabsContainer']}>
        <CategoryTabs />
      </div>
      {isPending && <Skeleton />}
      {products && (
        <div className={styles['ProductListContainer']}>
          <ProductList products={products} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
