import { Product } from "../domain/Product";
import { ProductService } from "../domain/ProductService";

const getAllProduct = async (service:ProductService):Promise<Product[]> =>{
    return await service.getAllProducts();
}

export {getAllProduct}