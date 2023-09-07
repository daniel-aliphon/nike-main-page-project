import { useState } from "react";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import bigShoe2 from "../assets/images/big-shoe2.png";
import { arrowRight } from "../assets/icons";

const Hero = ({ themeColor, darkMode }: any) => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe2);

  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container">
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat colored">
          a world of comfort and sleek design with the latest release of our new
          collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span
            className={` ${
              darkMode === false ? "xl:bg-slate-900" : "xl:bg-white"
            } rounded-full xl:whitespace-nowrap relative z-[2] pr-10`}>
            Creating the next
          </span>
          <br />
          <span className="inline-block mt-3 colored">Trends</span>
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Explore the latest releases, featuring both chic designs and
          cutting-edge performance enhancements tailored or customised to your
          need.
        </p>
        <div className="transition-all duration-700 hover:translate-x-6 hover:duration-150">
          <Button
            label="Shop now"
            iconURL={arrowRight}
            themeColor={themeColor}
          />
        </div>
        <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center flex-1 bg-center bg-cover xl:min-h-screen max-xl:py-40 bg-primary bg-hero">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="relative z-[2] object-contain"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe: any) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
