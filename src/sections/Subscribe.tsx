import { Button } from "../components";

const Subscribe = ({ darkMode }: any) => {
  return (
    <section
      id="contact-us"
      className="flex flex-col items-center justify-between gap-10 max-container max-lg:flex-col">
      <h3 className="text-4xl leading-[68px] lg:max-w-xl font-palanquin font-bold">
        Subscribe to our Newsletter for monthly
        <span className="colored"> Updates, </span>
        <span className="colored"> News </span>&
        <span className="colored"> Specials </span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className={`input ${!darkMode ? " bg-slate-900 text-white" : ""}`}
        />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button
            label="Sign Up"
            fullWidth
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
