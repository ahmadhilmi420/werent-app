import React from "react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import axios from "axios";

// const putProductsDetailsById = (id: number) => {
//   axios
//     .put(`https://indirect-yasmin-ananana-483e9951.koyeb.app/product-details/${id}`, {
//       name: "Updated Product",
//       price: 39.99,
//       condition: "Used",
//       image_url: "https://example.com/updated-image.jpg",
//       description: "This is an updated product.",
//       image1_url: "https://example.com/updated-image1.jpg",
//       image2_url: "https://example.com/updated-image2.jpg",
//       image3_url: "https://example.com/updated-image3.jpg",
//     })
//     .then((res) => {
//       console.log("Products fetched:", res.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//       throw error;
//     });
// };

// putProductsDetailsById(1); // Example usage, replace with actual ID

const postReviews = () => {
  axios
    .post("https://indirect-yasmin-ananana-483e9951.koyeb.app/reviews", {
      id: 3,
      product_id: 1,
      rating: 5,
      comment: "Great product!",
      user_id: 7,
      created_at: "2023-10-01T12:00:00Z",
      updated_at: "2023-10-01T12:00:00Z",
    })
    .then((res) => {
      console.log("Reviews posted:", res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("Error posting reviews:", error);
      throw error;
    });
};

postReviews(); // Example usage, replace with actual data

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="h-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
