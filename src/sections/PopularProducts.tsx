import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="colored"> Proud </span> and{" "}
          <span className="colored"> Popular </span> Products
        </h2>
        <p className="mt-2 lg:max-w-lg font-montserrat text-slate-gray">
          Embark on a journey of premium quality and style through our highly
          sought-after collections. Delve into a realm of comfort, exquisite
          design, and exceptional value.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
