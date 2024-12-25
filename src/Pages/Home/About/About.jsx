import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero  mt-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white "
          />
        </div>
        <div className="lg:w-1/2  flex flex-col items-center ">
          <div className="space-y-5 w-4/5">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which Don&apos;t look even slightly
            believable.
            <br />
            <br />
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
