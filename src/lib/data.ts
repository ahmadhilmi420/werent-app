import { Product, Review } from "../types";

export const products: Product[] = [
  // {
  //   id: 1,
  //   name: "Luxury Evening Gown",
  //   price: 299.99,
  //   image: "/testimage.webp",
  //   description: "Exquisite evening gown with intricate beadwork and sequin details. Elegant design with a flattering silhouette. Perfect for formal events, wedding receptions, or gala dinners.",
  // },
  // {
  //   id: 2,
  //   name: "Premium Formal Suit",
  //   price: 199.99,
  //   image: "/testimage.webp",
  //   description: "Premium formal suit crafted from high-quality materials with impeccable tailoring. Available in classic black. Ideal for formal occasions, weddings, or important business presentations.",
  // },
  // {
  //   id: 3,
  //   name: "Modern Kebaya",
  //   price: 249.99,
  //   image: "/testimage.webp",
  //   description: "Contemporary kebaya with traditional elements. Made from premium fabrics with beautiful embroidery details. Perfect for weddings, graduation ceremonies, or other formal events.",
  // },
  // {
  //   id: 4,
  //   name: "Premium Batik",
  //   price: 149.99,
  //   image: "/testimage.webp",
  //   description: "Premium batik featuring exclusive patterns on high-quality silk. Comfortable to wear while maintaining an elegant appearance. Suitable for formal or semi-formal occasions.",
  // },

  {
    condition: "New",
    details: {
      description:
        "- Experience elegance in this double ruffle shoulder flowy evening dress.\n- Features an alluring off-shoulder neckline for a touch of sophistication.\n- The fit and flare silhouette flatters all body shapes.\n- Short sleeves add a chic detail to the overall design.\n- Easy slip-on style for effortless dressing.\n- Crafted from a comfortable polyester blend for all-night wear.",
      image1_url: "https://dynamic.zacdn.com/pIGBrZq5BcFXBAIJyzKQ5mIdeH8=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-9885-4164774-2.jpg",
      image2_url: "https://dynamic.zacdn.com/zwo3p6hywFCEGCm19MJ1ixhqQg8=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-9886-4164774-3.jpg",
      image3_url: "https://dynamic.zacdn.com/BbKJrKV0AoDf-6Y5Cdc2LeIr-rU=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-9886-4164774-6.jpg",
    },
    id: 2,
    image_url: "https://dynamic.zacdn.com/i7Advvml5cR9LnUMIRoV57bSV-4=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-9885-4164774-1.jpg",
    name: "Ruffle Maxi Dress - Red",
    price: 750000,
  },

  {
    condition: "Used",
    details: {
      description: "Bahan 88% Polyester, 12% Elastane | Warna: Black | Motif: Solid",
      image1_url: "https://dynamic.zacdn.com/1P7enO6ohnbH3lawdXCax1uW5Dg=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/belle-bloom-9920-6377734-1.jpg",
      image2_url: "https://dynamic.zacdn.com/c9kEcT71c06j665rlIz00LDIxMM=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/belle-bloom-9920-6377734-2.jpg",
      image3_url: "https://dynamic.zacdn.com/LD3myndqGTAF7jiULjmBxHjQxIs=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/belle-bloom-9920-6377734-3.jpg",
    },
    id: 3,
    image_url: "https://dynamic.zacdn.com/LD3myndqGTAF7jiULjmBxHjQxIs=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/belle-bloom-9920-6377734-1.jpg",
    name: "Belle & Bloom Diamond Heart Blazer Dress in Black",
    price: 500000,
  },
  {
    condition: "New",
    details: {
      description: "This is an updated product.",
      image1_url: "https://example.com/updated-image1.jpg",
      image2_url: "https://example.com/updated-image2.jpg",
      image3_url: "https://example.com/updated-image3.jpg",
    },
    id: 1,
    image_url: "https://dynamic.zacdn.com/V3KfsJOhges_9xGpA0V2xsNFr0U=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-6352-4520874-1.jpg",
    name: "Belted Layered Dress Edited",
    price: 500000,
  },
  {
    condition: "new",
    details: {
      description: "- Solid tone flowy drape front maxi dress /n - Cowl neckline/n - Slim fit/n - Sleeveless/n - Slip-on style/n - Side slit hem/n - Polyester blend",
      image1_url: "https://dynamic.zacdn.com/eSjKo6nmW7yhqQuXbLIsJLktiBk=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-5588-1221454-6.jpg",
      image2_url: "https://dynamic.zacdn.com/-imLKz5Pf7USogAwdcTUvWgKRhI=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-5588-1221454-7.jpg",
      image3_url: "https://dynamic.zacdn.com/P0Xav9P-RtsHG7dd-WRf2TavPHQ=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-5589-1221454-8.jpg",
    },
    id: 6,
    image_url: "https://dynamic.zacdn.com/R0mJaERxEX1Qy007dPkuGKxsMM0=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-5586-1221454-1.jpg",
    name: "Knitted Evening Dress",
    price: 499999,
  },
  {
    condition: "new",
    details: {
      description: "- Solid tone flowy drape front maxi dress /n - Cowl neckline/n - Slim fit/n - Sleeveless/n - Slip-on style/n - Side slit hem/n - Polyester blend",
      image1_url: "https://dynamic.zacdn.com/eSjKo6nmW7yhqQuXbLIsJLktiBk=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-5588-1221454-6.jpg",
      image2_url: "https://dynamic.zacdn.com/-imLKz5Pf7USogAwdcTUvWgKRhI=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-5588-1221454-7.jpg",
      image3_url: "https://dynamic.zacdn.com/P0Xav9P-RtsHG7dd-WRf2TavPHQ=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-5589-1221454-8.jpg",
    },
    id: 7,
    image_url: "https://dynamic.zacdn.com/R0mJaERxEX1Qy007dPkuGKxsMM0=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-5586-1221454-1.jpg",
    name: "Knitted Evening Dress New",
    price: 599999,
  },
  {
    condition: "new",
    details: {
      description:
        "A long dress with a V-neckline and thin shoulder straps. Features box pleats on the chest. Inner lining included. Made from tonal fabric with an asymmetrical robe-style design. Includes matching fabric pockets with buttons.",
      image1_url: "https://static.zara.net/assets/public/d571/9d61/cdcf4f7b9938/5eae80dde994/08260004401-e1/08260004401-e1.jpg?ts=1753870574581&w=1125",
      image2_url: "https://static.zara.net/assets/public/9da2/c4db/74934f8bb398/1b6ecf8b1191/08260004401-p/08260004401-p.jpg?ts=1753867330745&w=1024",
      image3_url: "https://static.zara.net/assets/public/9da2/c4db/74934f8bb398/1b6ecf8b1191/08260004401-p/08260004401-p.jpg?ts=1753867330745&w=1024",
    },
    id: 9,
    image_url: "https://static.zara.net/assets/public/9da2/c4db/74934f8bb398/1b6ecf8b1191/08260004401-p/08260004401-p.jpg?ts=1753867330745&w=1024",
    name: "Long Robe Dress",
    price: 999000,
  },
];

export const reviews: Record<number, Review[]> = {
  // 1: [
  //   {
  //     id: 1,
  //     name: "Anisa Wijaya",
  //     rating: 5,
  //     comment: "This gown is absolutely stunning! The quality of the fabric and the beadwork details are exquisite. I received countless compliments when I wore it to my friend's wedding.",
  //     date: "2024-01-15",
  //   },
  //   {
  //     id: 2,
  //     name: "Dian Permata",
  //     rating: 4,
  //     comment: "An elegant gown that's comfortable to wear. The sizing was perfect and the delivery was right on schedule.",
  //     date: "2024-01-10",
  //   },
  //   {
  //     id: 3,
  //     name: "Ratna Sari",
  //     rating: 5,
  //     comment: "Renting this gown was absolutely worth it! The condition was like new and the price was very reasonable.",
  //     date: "2024-01-08",
  //   },
  // ],
  // 2: [
  //   {
  //     id: 1,
  //     name: "Budi Santoso",
  //     rating: 5,
  //     comment: "Exceptional quality suit! It was perfect for my formal event. Many people asked where I rented such an impressive suit.",
  //     date: "2024-01-20",
  //   },
  //   {
  //     id: 2,
  //     name: "Andi Pratama",
  //     rating: 4,
  //     comment: "Beautiful suit with impeccable tailoring. The fit was perfect and the rental service was outstanding.",
  //     date: "2024-01-18",
  //   },
  // ],
  // 3: [
  //   {
  //     id: 1,
  //     name: "Maya Indah",
  //     rating: 5,
  //     comment: "The modern kebaya is absolutely beautiful! The embroidery details are exquisite and the fabric was comfortable to wear all day. Perfect for my graduation ceremony.",
  //     date: "2024-01-22",
  //   },
  // ],
  // 4: [
  //   {
  //     id: 1,
  //     name: "Jessica Lee",
  //     rating: 4,
  //     comment: "The batik ensemble is elegant and comfortable to wear. The pattern is unique and I received many compliments at my office event.",
  //     date: "2024-01-25",
  //   },
  //   {
  //     id: 2,
  //     name: "Robert Brown",
  //     rating: 5,
  //     comment: "The quality of this premium batik is extraordinary. The fabric is smooth and the design is captivating. I will definitely rent again.",
  //     date: "2024-01-23",
  //   },
  // ],

  5: [
    {
      id: 1,
      name: "John Doe",
      comment: "Very good product and clean sekale.",
      created_at: "2025-07-30T11:33:38.504472",
      product_id: 1,
      rating: 5,
      updated_at: "2025-07-30T11:33:53.463915",
      user_id: 7,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "This dress was stunning and fit perfectly! Highly recommended.",
      created_at: "2025-07-30T11:51:23.579689",
      product_id: 1,
      rating: 5,
      updated_at: "2025-07-30T11:51:35.461446",
      user_id: 8,
    },
  ],
};

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getReviewsForProduct(productId: number): Review[] {
  return reviews[productId] || [];
}
