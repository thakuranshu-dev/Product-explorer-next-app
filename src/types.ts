export type Product = {
  id: number,
  title: string,
  description: string,
  price: number,
  rating: number,
  thumbnail: string,
  images: string,
  deliveryFee: string,
}

export type Category ={
  slug: string,
  name: string,
  url: string
}

export type SetKW = {
  setKW: (value: string) => void;
}