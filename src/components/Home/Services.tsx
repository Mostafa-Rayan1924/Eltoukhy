import MainTitle from "../sharable/MainTitle";
import ServBox from "./ServBox";

const Services = () => {
  return (
    <section className="container">
      <MainTitle title={"Services"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        <ServBox />
        <ServBox />
        <ServBox />
      </div>
    </section>
  );
};

export default Services;
