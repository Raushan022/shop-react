import React, { useState } from "react";
import MainLayout from "./MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
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
        <header>
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src="/images/p1.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/p2.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/p3.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/p4.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/p5.jpg" />
            </SwiperSlide>
          </Swiper>
        </header>

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
