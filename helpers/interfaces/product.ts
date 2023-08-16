interface VariantType {
  variant_id: Number;
  id: Number;
  sku: string;
  size?: string;
  color?: string;
  image_id: Number;
}

interface ImageType {
  image_id: Number;
  id: Number;
  alt: string;
  src: string;
}

export interface product {
  id: number;
  title: string;
  description: string;
  type: string;
  brand: string;
  category: string;
  price: string | number;
  new: boolean;
  sale: boolean;
  discount: string | number;
  stock: string | number;
  variants: VariantType[];
  images: ImageType[];
  createdAt: Date;
  qty: number;
  total: number;
}
