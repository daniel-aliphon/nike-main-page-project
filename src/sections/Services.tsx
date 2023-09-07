import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = ({ darkMode }: any) => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          {...service}
          darkMode={darkMode}
        />
      ))}
    </section>
  );
};

export default Services;
