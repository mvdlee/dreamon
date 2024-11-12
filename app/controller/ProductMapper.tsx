import { Product } from "../domain/Product";

export function ProductListData(apiData:any):Product[]{
    
    const result:Product[] = new Array;
    
    apiData.elements.forEach((element:any) => {
        const Product:Product = {
            name: element.title,
            uri: element.uri,
            description: element.description
        }
        result.push(Product);
    });

    return result;
}
