import { copyrightSign } from "../assets/icons";
import footerLogo from "../assets/images/footer-logo.svg";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 text-black font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-full colored-bg hover:cursor-pointer hover:bg-slate-100"
                key={icon.alt}>
                <a
                  target="_blank"
                  href={icon.link}>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-black font-montserrat">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-base leading-normal text-black font-montserrat hover:text-slate-gray"
                    key={link.name}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-24 text-black max-sm:flex-col max-sm:items-center">
        <div className="flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
