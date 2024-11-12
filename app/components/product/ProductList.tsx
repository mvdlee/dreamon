"use client"
import { Product } from "../../domain/Product";
import Link from 'next/link';
import ProductImage from "./Image";

const ProductList = ({ product }: {product: Product}) => {
  
  const productID = product.uri.split('/').pop();
  
  return (
      <li 
        className="group" 
        key="{productID}"
      > 
        <Link 
          href={`/product/${productID}`}
        >
        
          <article className="overflow-hidden rounded border bg-white">

            <div className="aspect-square w-full overflow-hidden">

              <ProductImage 
                product = { product } 
              />

            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-neutral-700"> 
                { product.name } 
              </h2>
            </div>

          </article>

        </Link>

      </li>
  ); 
};

export default ProductList;
