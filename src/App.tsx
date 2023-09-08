// @ts-ignore

import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import { useState, useEffect } from "react";

const App = () => {
  //
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor") || "blue"
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
  }, [themeColor]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  //
  if (themeColor === "red") {
    var themeClass = "red-theme";
  } else if (themeColor === "blue") {
    var themeClass = "blue-theme";
  } else if (themeColor === "purple") {
    var themeClass = "purple-theme";
  } else {
    var themeClass = "green-theme";
  }
  //
  return (
    <main className={`relative ${themeClass} ${!darkMode && "dark"}`}>
      <Nav
        setThemeColor={setThemeColor}
        themeColor={themeColor}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero
          themeColor={themeColor}
          darkMode={darkMode}
        />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="py-10 padding-x">
        <Services darkMode={darkMode} />
      </section>
      <section className="padding">
        <SpecialOffer themeColor={themeColor} />
      </section>
      <section
        className={`bg-pale-blue ${!darkMode && "bg-slate-800"}  padding`}>
        <CustomerReviews />
      </section>
      <section className="w-full py-16 padding-x sm:py-32">
        <Subscribe darkMode={darkMode} />
      </section>
      <section className="pb-8 colored-bg padding-x padding-t">
        <Footer />
      </section>
    </main>
  );
};

export default App;
