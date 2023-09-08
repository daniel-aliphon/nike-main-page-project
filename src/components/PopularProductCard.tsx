import { star } from "../assets/icons";

const PopularProductCard = ({
  imgURL,
  name,
  price,
  rating,
  title,
  description,
}: any) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <div className="card-container">
        <div className="inner-card">
          <div className="front-card">
            <img
              src={imgURL}
              alt={name}
              className="w-[282px] h-[282px]"
            />
          </div>
          <div className="flex flex-col justify-evenly w-[282px] h-[282px] text-center rounded-2xl p-3 items-center back-card colored-bg">
            <h3 className="text-2xl text-white ">{title}</h3>
            <p className="text-lg text-white">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={star}
          alt="rating icon"
          width={24}
          height={24}
        />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat colored">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
