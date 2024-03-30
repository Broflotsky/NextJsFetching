"use client";
import CategoriesUI from "@/components/CategoriesUI/CategoriesUI";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-600">
      {categories.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <CategoriesUI categories={categories} />
      )}
    </div>
  );
};

export default Categories;
