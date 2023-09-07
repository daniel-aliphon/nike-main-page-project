const ServiceCard = ({ imgURL, label, subtext, darkMode }: any) => {
  return (
    <div
      className={`flex-1 sm:w-[350px] sm:min-w-[350px] w-full ${
        !darkMode && "dark-services"
      }  rounded-[20px] ${
        !darkMode
          ? "shadow-3xl shadow-gray-800"
          : " shadow-slate-300 shadow-3xl"
      }  px-10 py-16`}>
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="mt-5 text-3xl font-bold leading-normal font-palanquin">
            {label}
          </h3>
        </div>
        <div className="w-11 h-11 ${} flex justify-center items-center colored-bg rounded-full">
          <img
            src={imgURL}
            alt={label}
            width={24}
            height={24}
          />
        </div>
      </div>
      <p className="mt-3 text-lg leading-normal break-words font-montserrat text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
