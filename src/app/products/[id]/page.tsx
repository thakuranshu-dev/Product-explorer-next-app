import { fetchProducts, fetchProductById } from "@/lib/api";
import { Rating,RatingButton } from "@/components/ui/shadcn-io/rating";
import AddToCartButton from "@/components/FavouriteButton";
import { Product } from "@/types";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams(){
  const products: Product[] = await fetchProducts();

  return products.map((product) =>({
    params: {
      id: product.id.toString()
    }
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = params;
  let product: Product | null = null;
  try {
    product = await fetchProductById(id);
    
  } catch (error) {
    console.error('Unable to fetch product details:', error);
  } 
  //not found handling
  if (product === null) {
    notFound();
  }else
  return (  
    <section id="product-page"
     className="p-6 w-full flex justify-center item-center mb-25">
      <div className="w-180 h-155">
        <div id='product-card'
        className='h-full rounded flex flex-col p-3 gap-1 shadow-lg bg-white/70 backdrop-blur-md text-[#3e4a3d]'>
          <img id='product-image'
          src={product.images || ''} 
          loading='lazy'
          className='w-full min-h-3/5 rounded lg:h-50 bg-[#29fd53]/80'/>
          <div className=" text-left block content-start">
            <h2 className=' text-[#00a6fb] text-lg text-left font-bold truncate'>{product.title || 'Product Title'}</h2> 
            <p className='text-left text-[#3e4a3d] py-1 line-clamp-2'>{product.description || 'Product Description'}</p> 
            <p className='text-left text-[#3e4a3d] py-1'>${product.price || 'Pricing | Off'}</p>
            <p className='text-sm text-left text-[#3e4a3d] py-1'>{product.deliveryFee || 'Delivery Fee'}</p>
            <div className="inline-flex products-center gap-1 mt-1.5 ">
              <Rating defaultValue={Math.floor(product.rating)} readOnly>
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton className="text-yellow-500 py-0" key={index}/>
                ))}
              </Rating>
              <span className={`text-sm ${product.rating>=3?'text-green-500': 'text-red-600'}`}>
                {`(${product.rating})`}
              </span>
            </div>
            <div className="mt-4 inline-flex justify-around w-full items-center">
              <AddToCartButton product={product}/>
              <button className="px-4 py-2 w-45 bg-[#29fd53] text-white rounded hover:bg-[#00deff] transition transition-all-duration-300">
                Buy now
              </button>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
} 