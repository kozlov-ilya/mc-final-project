import useEmblaCarousel from 'embla-carousel-react';
import Button from 'components/Button';
import Icon from 'components/Icon';
import { NAMED_CATEGORIES } from 'configs/consts';
import { useMatchMedia, useCurrentCategory } from 'hooks';
import Tab from './components/Tab';
import styles from './CategoryTabs.module.scss';

const CategoryTabs = () => {
  const { currentCategory, setCurrentCategory } = useCurrentCategory();

  const { isMobile } = useMatchMedia();

  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  const Tabs = NAMED_CATEGORIES.map((category) => (
    <Tab
      key={category.category}
      category={category}
      isActive={currentCategory === category.category}
      onClick={() => setCurrentCategory(category.category)}
    />
  ));

  return (
    <div className={styles['CategoryTabs']}>
      <Button className={styles['FiltersButton']} variant="soft" leftContent={<Icon icon="Sliders" size={18} />} />
      {isMobile ? (
        <div className={styles['Viewport']} ref={emblaRef}>
          <div className={styles['Container']}>{Tabs}</div>
        </div>
      ) : (
        Tabs
      )}
    </div>
  );
};

export default CategoryTabs;
