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

const getReviews = () => {
  axios
    .get("https://indirect-yasmin-ananana-483e9951.koyeb.app/reviews")
    .then((res) => {
      console.log("Reviews fetched:", res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
      throw error;
    });
};

const getReviewsById = (user_id: number) => {
  axios
    .get(`https://indirect-yasmin-ananana-483e9951.koyeb.app/reviews/user/${user_id}`)
    .then((res) => {
      console.log("Reviews fetched:", res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
      throw error;
    });
};

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
