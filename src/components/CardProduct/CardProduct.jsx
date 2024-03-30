/* eslint-disable @next/next/no-img-element */

const CardProduct = ({ id, title, price, image }) => {
  return (
    <div className="flex flex-col self-center w-full max-w-xs overflow-hidden bg-gray-700 border rounded-lg shadow-md max-h-96 group border-gray-100/30">
      <a
        className="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl"
        href="#"
      >
        <img
          className="absolute top-0 right-0 object-cover w-full h-full peer"
          src={image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5 mt-4">
        <a href="#">
          <h5 className="text-xl tracking-tight text-white">{title}</h5>
        </a>
        <div className="flex items-center justify-between mt-2 mb-5">
          <p>
            <span className="text-3xl font-bold text-white">{price}</span>
          </p>
        </div>
        <a
          href="#"
          className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
