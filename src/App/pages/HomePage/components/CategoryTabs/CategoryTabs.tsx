import classNames from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from 'components/Button';
import Icon from 'components/Icon';
import { categories } from 'configs/consts';
import { useMatchMedia } from 'hooks';
import styles from './CategoryTabs.module.scss';

const CategoryTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isMobile } = useMatchMedia();
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  const currentCategory = searchParams.get('category') || 'jackets';

  useEffect(() => {
    if (!searchParams.get('category')) {
      setSearchParams({ category: 'jackets' });
    }
  }, [searchParams, setSearchParams]);

  const cn = classNames(styles['CategoryTabs']);

  return isMobile ? (
    <div className={cn}>
      <Button className={styles['FiltersButton']} variant="soft" leftContent={<Icon icon="Sliders" size={18} />} />
      <div className={styles['Viewport']} ref={emblaRef}>
        <div className={styles['Container']}>
          {categories.map((category) => (
            <Button
              className={styles['TabButton']}
              text={category.name}
              variant={currentCategory === category.value ? 'solid' : 'soft'}
              key={category.value}
              onClick={() => {
                setSearchParams({ category: category.value });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={cn}>
      {categories.map((category) => (
        <Button
          className={styles['TabButton']}
          text={category.name}
          variant={currentCategory === category.value ? 'solid' : 'soft'}
          key={category.value}
          onClick={() => {
            setSearchParams({ category: category.value });
          }}
        />
      ))}
      <Button className={styles['FiltersButton']} variant="soft" leftContent={<Icon icon="Sliders" size={18} />} />
    </div>
  );
};

export default CategoryTabs;
