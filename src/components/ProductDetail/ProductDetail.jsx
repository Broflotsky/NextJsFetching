/* eslint-disable @next/next/no-img-element */

const ProductDetail = ({ id, title, price, description, image }) => {
  return (
    <div>
      <section className="overflow-hidden text-gray-700 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full border border-gray-200 rounded lg:w-1/2"
              src={image}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                HENRY STORE
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {title}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{description}</p>
              <div className="flex pt-8">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  {`$ ${price}`}
                </span>
                <button className="flex px-6 py-2 ml-auto text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
                  Button
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
