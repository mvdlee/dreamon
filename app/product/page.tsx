import HomeController from "../controller/HomeController";
import { Product } from "../domain/Product";
import ProductList from "../components/product/ProductList";

export default async function productPage() {
  
    const products: Product[] = await HomeController.getAllProducts();
  
    return (

        <div>
            
            <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground"> Product list page </h1>

            <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                { 
                    products.map((product) => {
                     return <ProductList product={product} />
                    })
                }
            </ul>

        </div>

    );

  }