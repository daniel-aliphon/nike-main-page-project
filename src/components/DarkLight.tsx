import { useState } from "react";

export const DarkLight = ({ setDarkMode }: any) => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleCheck = () => {
    isChecked === true ? setDarkMode(true) : setDarkMode(false);
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <>
      <input
        className="hidden"
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheck}
      />
      <label
        htmlFor="checkbox"
        className={`flex items-center w-12 p-1 transition-all ${
          isChecked ? " bg-slate-800" : ""
        } rounded-full hover:cursor-pointer hover:scale-125 bg-slate-400`}>
        <div
          className={`p-2 bg-white rounded-full ${
            isChecked ? " ml-auto" : " mr-auto"
          } `}></div>
      </label>
    </>
  );
};
