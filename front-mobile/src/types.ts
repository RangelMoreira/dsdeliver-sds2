export type Order = {
  id: 7;
  address: String;
  latitude: number;
  longitude: number;
  moment: string;
  status: String;
  total: number;
  products: Product[];
  
}

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUri: string;
}