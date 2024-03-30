import Link from "next/link";
import React from "react";

const CategoriesUI = ({ categories }) => {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      {categories.map((category) => {
        return (
          //* EN ESTE CASO EL HREF DE NUESTRO LINK LLEVARA A UNA RUTA INEXISTENTE, ESTO ES SOLO UN EJEMPLO.
          <Link
            key={category}
            href={`/products/categories/${category}`}
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoriesUI;
