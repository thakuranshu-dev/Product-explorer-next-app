import { fetchProducts, fetchProductById } from "@/lib/api";
import ProductDetailCard from "@/components/ProductDetailCard";
import ReviewCard from "@/components/ReviewCard";
import { Product, ProductDetail } from "@/types";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams(){
  const products: Product[] = await fetchProducts();

  return products.map((product) =>({
    params: {
      id: product.id.toString()
    }
  }));
}

export default async function ProductPage({ params }: { params: { id: Promise<string> } }) {
  const { id } = params;
  let product: ProductDetail | null = null;
  try {
    product = await fetchProductById(await id);
    console.log(product);
  } catch (error) {
    console.error('Unable to fetch product details:', error);
  } 
  //not found handling
  if (product === null) {
    notFound();
  }else
  return (  
    <section id={product.title}     
    className="w-full p-6 pb-10 flex flex-col lg:flex-row  lg:px-10 gap-5 shadow-lg bg-white/90 backdrop-blur-md text-[#3e4a3d]">
      {/* Product info */}
      <div className="lg:w-1/2">
        <ProductDetailCard props={product} />
      </div>
      
      {/* Product reviews*/}
      <div className="lg:w-1/2 flex flex-col gap-5 lg:pl-10 ">
        <h1 className="text-3xl font-bold text-green-800">Customer Reviews</h1>
        {product.reviews?.map((review,idx)=>(
          <ReviewCard key={idx} review={review} />
        ))}
      </div>
    </section>
    
  );
} 