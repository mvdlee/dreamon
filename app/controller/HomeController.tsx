import { Product } from "../domain/Product";
import { getAllProduct } from "../useCases/GetProducts";
import { ProductsGateway } from "../gateway/ProductsGateway";

type HomeController = {
    getAllProducts: () => Promise<Product[]>
}

const homeController: HomeController = {
    getAllProducts: async () => {
        return await getAllProduct(ProductsGateway());
    }
};

export default homeController;