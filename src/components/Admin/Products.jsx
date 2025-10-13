import React, { useState } from "react";
import Layout from "./Layout";

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "Men's shirt blue denim",
      description: "cotton shirt with fine texture",
      price: 2000,
      discount: 15,
      image: "/products/a.jpg",
    },
    {
      title: "Women's Floral Dress",
      description: "Elegant floral print dress perfect for summer outings.",
      price: 2500,
      discount: 10,
      image: "/products/b.jpg",
    },
    {
      title: "Leather Wallet - Black",
      description: "Premium quality leather wallet with multiple card slots.",
      price: 1500,
      discount: 20,
      image: "/products/c.jpg",
    },
    {
      title: "Running Shoes - Red",
      description:
        "Comfortable and stylish running shoes with breathable mesh.",
      price: 3500,
      discount: 25,
      image: "/products/d.jpg",
    },
    {
      title: "Smartwatch - Black",
      description:
        "Advanced smartwatch with fitness tracking and notifications.",
      price: 8000,
      discount: 30,
      image: "/products/e.jpg",
    },
    {
      title: "Men's Casual Jacket - Navy",
      description: "Soft, lightweight jacket ideal for casual wear.",
      price: 3500,
      discount: 15,
      image: "/products/f.jpg",
    },
    {
      title: "Women's Handbag - Beige",
      description: "Chic and stylish handbag for everyday use.",
      price: 2800,
      discount: 12,
      image: "/products/g.jpg",
    },
    {
      title: "Outdoor Backpack - Green",
      description: "Durable and spacious backpack for hiking and travel.",
      price: 2200,
      discount: 22,
      image: "/products/i.jpg",
    },
    {
      title: "Laptop Sleeve - Grey",
      description: "Sleek, protective laptop sleeve for up to 15-inch laptops.",
      price: 1200,
      discount: 5,
      image: "/products/j.jpg",
    },
    {
      title: "Men's Sunglasses - Aviator",
      description: "Classic aviator sunglasses with UV protection.",
      price: 1800,
      discount: 10,
      image: "/products/k.jpg",
    },
    {
      title: "Wireless Mouse - Black",
      description: "Ergonomic wireless mouse with long battery life.",
      price: 1000,
      discount: 15,
      image: "/products/l.jpg",
    },
    {
      title: "Wireless Mouse - Black",
      description: "Ergonomic wireless mouse with long battery life.",
      price: 1000,
      discount: 15,
      image: "/products/a.jpg",
    },
  ]);
  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">Products</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <div key={index} className="bg-white rounded-md shadow-lg">
            <img
              src={item.image}
              alt={item.image}
              className="rounded-t-xl w-full h-[310px] object-cover"
            />
            <div className="p-4">
              <h1 className="font-semibold text-md">{item.title}</h1>
              <p className="text-gray-600">
                {item.description.slice(0, 50)}...
              </p>
              <div className="flex gap-2 mt-1">
                <label className="font-semibold">
                  {item.price - (item.price * item.discount) / 100}
                </label>
                <del>{item.price}</del>
                <label className="text-gray-600">({item.discount}%off)</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
