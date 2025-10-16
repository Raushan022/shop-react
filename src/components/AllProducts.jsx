import React, { useState } from "react";
import MainLayout from "./MainLayout";

const AllProducts = () => {
  const [products, setProducts] = useState([
    {
      title: "Men's shirt blue denim",
      price: 2000,
      discount: 15,
      thumbnail: "/products/a.jpg",
    },
    {
      title: "Women's Floral Dress",
      price: 2500,
      discount: 10,
      thumbnail: "/products/b.jpg",
    },
    {
      title: "Leather Wallet - Black",
      price: 1500,
      discount: 20,
      thumbnail: "/products/c.jpg",
    },
    {
      title: "Running Shoes - Red",
      price: 3500,
      discount: 25,
      thumbnail: "/products/d.jpg",
    },
    {
      title: "Smartwatch - Black",
      price: 8000,
      discount: 30,
      thumbnail: "/products/e.jpg",
    },
    {
      title: "Men's Casual Jacket - Navy",
      price: 3500,
      discount: 15,
      thumbnail: "/products/f.jpg",
    },
    {
      title: "Women's Handbag - Beige",
      price: 2800,
      discount: 12,
      thumbnail: "/products/g.jpg",
    },
    {
      title: "Outdoor Backpack - Green",
      price: 2200,
      discount: 22,
      thumbnail: "/products/i.jpg",
    },
    {
      title: "Laptop Sleeve - Grey",
      price: 1200,
      discount: 5,
      thumbnail: "/products/j.jpg",
    },
    {
      title: "Men's Sunglasses - Aviator",
      price: 1800,
      discount: 10,
      thumbnail: "/products/k.jpg",
    },
    {
      title: "Wireless Mouse - Black",
      price: 1000,
      discount: 15,
      thumbnail: "/products/l.jpg",
    },
    {
      title: "Wireless Mouse - Black",
      price: 1000,
      discount: 15,
      thumbnail: "/products/a.jpg",
    },
  ]);
  return (
    <MainLayout>
      <div>
        <div className="md:p-16 p-8">
          <h1 className="text-3xl font-bold text-center">Latest Products</h1>
          <p className="mx-auto text-center text-gray-600 md:w-7/12 mt-2 mb-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eius
            incidunt iusto, impedit placeat velit esse, temporibus consectetur
            maiores molestias accusantiumo.
          </p>

          <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-12">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border border-gray-200"
              >
                <img src={item.thumbnail} alt={item.thumbnail} />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">
                    {item.title.slice(0, 30)}
                  </h1>
                  <div className="space-x-2">
                    <label className="font-semibold text-lg">
                      {item.price - (item.price * item.discount) / 100}
                    </label>
                    <del className="text-gray-600">{item.price}</del>
                    <label className="text-gray-600">({item.discount}%)</label>
                  </div>
                  <button className="bg-green-500 py-2 w-full rounded text-white font-semibold mt-4">
                    Buy Now
                  </button>
                  <button className="bg-rose-500 py-2 w-full rounded text-white font-semibold mt-2">
                    <i className="ri-shopping-cart-line mr-2"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AllProducts;
