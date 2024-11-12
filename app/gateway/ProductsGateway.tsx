import { ProductService } from "../domain/ProductService";
import { ProductListData } from "../controller/ProductMapper";
import { Product } from "../domain/Product";

const ProductsGateway = () : ProductService =>{

    const produdctsUrl = process.env.NEXT_PUBLIC_PRODUCTS_API_URL;

    if (!produdctsUrl) {
        
       console.error('Error: PRODUCTS_API_URL environment variable not set!');
       return ; // Or throw an error
        
    }

    const getAllProducts = async():Promise<Product[]>=>{
        const res = await fetch(produdctsUrl);
        const data = await res.json();
        return ProductListData(data);
    }
    
   return { getAllProducts };

} 

export { ProductsGateway }