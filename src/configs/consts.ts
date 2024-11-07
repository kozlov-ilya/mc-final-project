import { TNamedCategory } from 'types';

export const BREAKPOINTS = { xs: 520, sm: 768, md: 1024, lg: 1280, xl: 1640 } as const;

export const PRODUCT_IMAGES_BASE_PATH = '/images/products';

export const NAMED_CATEGORIES: TNamedCategory[] = [
  { name: 'Куртки', category: 'jackets' },
  { name: 'Футболки', category: 'tshirts' },
  { name: 'Брюки', category: 'bottoms' },
  { name: 'Обувь', category: 'footwear' },
  { name: 'Аксесуары', category: 'accesories' },
] as const;

export const DEFAULT_CATEGORY: TNamedCategory = { name: 'Куртки', category: 'jackets' } as const;
