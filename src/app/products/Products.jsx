import CardProduct from "@/components/CardProduct/CardProduct";

const fetchDataProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return data;
};

const Products = async () => {
  const fetchdata = await fetchDataProducts();

  return (
    <div className="flex flex-wrap gap-4 text-white bg-black">
      <h2 className="w-auto h-7">
        Estamos sobre `/products trabajando con Generación estatica - SSG
      </h2>
      <section className="flex flex-wrap gap-4 justify-evenly">
        {fetchdata.map((product) => {
          return (
            <CardProduct
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Products;
