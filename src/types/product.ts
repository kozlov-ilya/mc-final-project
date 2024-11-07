export type TCategory = 'jackets' | 'tshirts' | 'bottoms' | 'footwear' | 'accesories';

export type TNamedCategory = { name: string; category: TCategory };

export type TProduct = {
  id: string;
  name: string;
  category: TCategory;
  brand: string;
  description: string;
  price: number;
  imgUrls: string[];
};
