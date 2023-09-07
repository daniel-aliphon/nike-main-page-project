import { DarkLight } from "./DarkLight";

export const ColorSelection = ({ setThemeColor, setDarkMode }: any) => {
  //
  return (
    <ul className="flex items-center justify-center gap-3 ">
      <li>
        <div
          onClick={() => setThemeColor("purple")}
          className="p-3 transition-all rounded-full bg-purple hover:scale-125 hover:cursor-pointer"></div>
      </li>
      <li>
        <div
          onClick={() => setThemeColor("green")}
          className="p-3 transition-all rounded-full bg-green hover:scale-125 hover:cursor-pointer"></div>
      </li>
      <li>
        <div
          onClick={() => setThemeColor("red")}
          className="p-3 transition-all rounded-full bg-red hover:scale-125 hover:cursor-pointer"></div>
      </li>
      <li>
        <div
          onClick={() => setThemeColor("blue")}
          className="p-3 transition-all rounded-full bg-blue hover:scale-125 hover:cursor-pointer"></div>
      </li>
      <li>
        <DarkLight setDarkMode={setDarkMode} />
      </li>
    </ul>
  );
};
