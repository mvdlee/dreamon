import { Product } from "./Product"

interface ProductService {
    getAllProducts():Promise<Product[]>
}

export type { ProductService }