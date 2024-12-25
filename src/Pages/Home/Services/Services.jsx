// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../Hooks/useServices";

const Services = () => {
  // DRY --> Do not Repeat Yourself-
  const services = useServices();
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("https://cardoctor-bdserver-sepia.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);
  return (
    <div className="mt-24 ">
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
        <h2 className="text-5xl font-bold">Our Services Area</h2>
        <p className="text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center">
        <button className="btn btn-outline border text-[#FF3811] hover:bg-white hover:text-[#FF3811] hover:border-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
