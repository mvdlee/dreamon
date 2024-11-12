import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ProductImageProps } from "../../domain/Image";

const ProductImage = ({ product }: ProductImageProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const produdctsUrl = process.env.NEXT_PUBLIC_PRODUCTS_API_URL;

  useEffect(() => {
    const fetchImage = async () => {
        const productID = product.uri.split('/').pop();

      if (!productID) {
        console.error("Invalid product ID:", product.uri);
        return;
      }

      try {

        const res = await fetch(`${produdctsUrl}/${productID}`);

        if (!res.ok) {
          throw new Error(`Error fetching image data: ${res.status}`);
        }

        const data = await res.json();
        const effectiveUrl = data.images?.[1]?.effectiveUrl;

        if (effectiveUrl) {
          setImageSrc(new URL(effectiveUrl, 'https://demo.icm.intershop.de').toString());
        } else {
          setImageSrc(null); 
        }
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchImage();
  }, [product]); 

  if (!imageSrc) {
    return <div>Loading...</div>; 
  }

  return (
    
      <Image
        src={imageSrc}
        alt={product.name || "Product Image"}
        width={500}
        height={500}
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        priority
      />
      
  );
};

export default ProductImage;