export type Product = {
  id: number,
  title: string,
  
  price: number,
  rating: number,
  thumbnail: string,
  images: string,
  deliveryFee: string,
}

export type ProductDetail = Product & {
  brand: string,
  category: string,
  description: string,
  stock: number,
  availabilityStatus: string,
  discountPercentage: number,
  dimensions?: {width: number, height: number, depth: number},
  returnPolicy?: string,
  reviews?: {reviewerName: string, comment: string, rating: number, date: string}[],
  shippingInfo?: string,
  weight?: number,
  warranty?: string,
  images: string[],
}

export type Category ={
  slug: string,
  name: string,
  url: string
}

export type SetKW = {
  setKW: (value: string) => void;
}