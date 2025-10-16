import React, { useState } from "react";
import MainLayout from "./MainLayout";

const Category = () => {
  const [category, setCategory] = useState([
    {
      title: "electronics",
    },
    {
      title: "Fashion",
    },
    {
      title: "Smartphones",
    },
    {
      title: "Furniture",
    },
    {
      title: "Men's",
    },
    {
      title: "Women's",
    },
    {
      title: "Women's",
    },
    {
      title: "Women's",
    },
  ]);
  return (
    <MainLayout>
      <div className="md:p-16 p-8">
        <div className="md:w-10/12 mx-auto grid md:grid-cols-4 md:gap-16 gap-8">
          {category.map((item, index) => (
            <div
              key={index}
              className="hover:bg-orange-400 hover:text-white border rounded-lg bg-white shadow-lg flex flex-col p-8 justify-center items-center"
            >
              <i className="ri-menu-search-line text-6xl"></i>
              <h1 className="text-2xl font-semibold">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Category;
