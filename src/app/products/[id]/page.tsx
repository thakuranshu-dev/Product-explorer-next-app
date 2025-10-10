import { fetchProducts } from "@/lib/api";
type Product = {
  id: number,
  title: string,
  price: number,
  rating: number,
  thumbnail: string,
  deliveryFee: string,
}

type Params = {
  params: {
    id: string;
  }
}

export const revalidate = 60;

export async function generateStaticParams(){
  const products: Product[] = await fetchProducts();

  return products.map((product) =>({
    id: product.id.toString()
  }));
}

export default async function ProductPage({ params }: Params) {
  const { id } = params;
  let product: Product | null = null; 
  try {
    const products = await fetchProducts();
    product = products.find((p) => p.id.toString() === id) || null;
  } catch (error) {
    console.error('Unable to fetch product details:', error);
  } 
  if (!product) {
    return <div className="p-4">Product not found.</div>;
  }
  return (  
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover mb-4 rounded"/>
      <p className="text-lg text-gray-700 mb-2">Price: ${product.price}</p>
      <p className="text-lg text-gray-700 mb-2">Delivery Fee: {product.deliveryFee}</p>
      <p className="text-lg text-gray-700 mb-2">Rating: {product.rating} / 5</p>  
      {/* Additional product details can be added here */}
    </div>
  );
} 