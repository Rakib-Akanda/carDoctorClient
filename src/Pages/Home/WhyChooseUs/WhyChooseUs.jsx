import Check from "../../../assets/icons/check.svg";
import delivery from "../../../assets/icons/deliveryt.svg";
import team from "../../../assets/icons/group.svg";
import person from "../../../assets/icons/person.svg";
import Wrench from "../../../assets/icons/Wrench.svg";
import { FaRegClock } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className="my-24">
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-bold text-[#FF3811]">Core Features</h3>
        <h2 className="text-5xl font-bold">Why Choose Us</h2>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <div className="border w-max p-[35px] flex flex-col items-center rounded-xl border-[#E8E8E8] hover:bg-[#FF3811] group">
          <img src={team} alt="" />
          <p className="group-hover:text-white text-[#444444]  text-lg font-bold mt-3">
            Expert Team
          </p>
        </div>
        <div className="border w-max p-[35px] flex flex-col items-center rounded-xl border-[#E8E8E8] hover:bg-[#FF3811] group">
        <FaRegClock className="w-[53px] h-[53px]" />
          <p className="group-hover:text-white text-[#444444]  text-lg font-bold mt-3">
            Timely Delivery
          </p>
        </div>
        <div className="border w-max p-[35px] flex flex-col items-center rounded-xl border-[#E8E8E8] hover:bg-[#FF3811] group">
          <img src={person} alt="" />
          <p className="group-hover:text-white text-[#444444]  text-lg font-bold mt-3">
            24/7 Support
          </p>
        </div>
        <div className="border w-max p-[35px] flex flex-col items-center rounded-xl border-[#E8E8E8] hover:bg-[#FF3811] group">
          <img src={Wrench} alt="" />
          <p className="group-hover:text-white text-[#444444]  text-lg font-bold mt-3">
            Best Equipment
          </p>
        </div>
        <div className="border w-max p-[35px] flex flex-col items-center rounded-xl border-[#E8E8E8] hover:bg-[#FF3811] group">
          <img src={Check} alt="" />
          <p className="group-hover:text-white text-[#444444]  text-lg font-bold mt-3">
            100% Guaranty
          </p>
        </div>
        <div className="border w-max p-[35px] flex flex-col items-center rounded-xl border-[#E8E8E8] hover:bg-[#FF3811] group">
          <img src={delivery} alt="" />
          <p className="group-hover:text-white text-[#444444]  text-lg font-bold mt-3">
            Timely Delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
