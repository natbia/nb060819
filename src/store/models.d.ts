export interface Product {
    name: string;
    price: string;
    category: string;
    description: string;
    id: number;
  }

  export interface Products {
    products?: (Product)[] | null;
  }
