export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
  type: 'made' | 'processed';
}