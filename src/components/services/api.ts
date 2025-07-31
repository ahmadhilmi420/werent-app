import axios from "axios";
import { Product } from "@/types"; // Adjust the import path as necessary

export const getProducts = async (data: Product[]): Promise<Product[]> => {
  const response = await axios.get("https://indirect-yasmin-ananana-483e9951.koyeb.app/products");
  return response.data;
};

// export const getProducts = () => {
//   axios
//     .get("https://indirect-yasmin-ananana-483e9951.koyeb.app/products")
//     .then((res) => {
//       console.log("Products fetched:", res.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//       throw error;
//     });
// };

// export const products = getProducts();

export const getProductsId = async (id: number) => {
  try {
    const response = await axios.get(`https://indirect-yasmin-ananana-483e9951.koyeb.app/products/${id}`);
    console.log("Products fetched:", response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const postProducts = () => {
  return axios
    .post("https://indirect-yasmin-ananana-483e9951.koyeb.app/products", {
      name: "New Product",
      price: 29.99,
      condition: "New",
      image_url: "https://example.com/image.jpg",
      description: "This is a new product.",
      image1_url: "https://example.com/image1.jpg",
      image2_url: "https://example.com/image2.jpg",
      image3_url: "https://example.com/image3.jpg",
    })
    .then((res) => {
      console.log("Product created:", res.data);
    })
    .catch((error) => {
      console.error("Error creating product:", error);
      throw error;
    });
};

const putProducts = (id: number) => {
  return axios
    .put(`https://indirect-yasmin-ananana-483e9951.koyeb.app/products/${id}`, {
      name: "Updated Product",
      price: 39.99,
      condition: "Used",
      image_url: "https://example.com/updated-image.jpg",
      description: "This is an updated product.",
      image1_url: "https://example.com/updated-image1.jpg",
      image2_url: "https://example.com/updated-image2.jpg",
      image3_url: "https://example.com/updated-image3.jpg",
    })
    .then((res) => {
      console.log("Product updated:", res.data);
    })
    .catch((error) => {
      console.error("Error updating product:", error);
      throw error;
    });
};

const delProducts = (id: number) => {
  return axios
    .delete(`https://indirect-yasmin-ananana-483e9951.koyeb.app/products/${id}`)
    .then((res) => {
      console.log("Product deleted:", res.data);
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
      throw error;
    });
};

//Product Details
const getProductsDetails = () => {
  axios
    .get("https://indirect-yasmin-ananana-483e9951.koyeb.app/product-details/")
    .then((res) => {
      console.log("Products fetched:", res.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
};

const getProductsDetailsById = (id: number) => {
  axios
    .get(`https://indirect-yasmin-ananana-483e9951.koyeb.app/product-details/${id}`)
    .then((res) => {
      console.log("Products fetched:", res.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
};

const putProductsDetailsById = (id: number) => {
  axios
    .put(`https://indirect-yasmin-ananana-483e9951.koyeb.app/product-details/${id}`, {
      name: "Updated Product",
      price: 39.99,
      condition: "Used",
      image_url: "https://example.com/updated-image.jpg",
      description: "This is an updated product.",
      image1_url: "https://example.com/updated-image1.jpg",
      image2_url: "https://example.com/updated-image2.jpg",
      image3_url: "https://example.com/updated-image3.jpg",
    })
    .then((res) => {
      console.log("Products fetched:", res.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
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

const getReviewsProductById = (product_id: number) => {
  axios
    .get(`https://indirect-yasmin-ananana-483e9951.koyeb.app/reviews/product/${product_id}`)
    .then((res) => {
      console.log("Reviews fetched:", res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
      throw error;
    });
};

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
