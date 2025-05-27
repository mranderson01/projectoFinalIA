export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  salePrice: number | null;
  imageUrl: string;
  rating: number;
  ageRange: string;
  isPopular: boolean;
  isNew: boolean;
  onSale: boolean;
  colors: string[];
  sizes: number[];
  gender: 'boys' | 'girls' | 'unisex';
}