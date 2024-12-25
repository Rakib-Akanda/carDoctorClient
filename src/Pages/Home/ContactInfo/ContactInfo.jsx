import { BiSolidPhoneCall } from "react-icons/bi";
import { FaBusinessTime } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const ContactInfo = () => {
  return (
    <div className="my-24 bg-[#151515] px-[72px] py-24 rounded-lg flex justify-between gap-14">
      <div className="flex items-center gap-5 text-white">
        <div>
          <FaBusinessTime className="text-5xl"/>
        </div>
        <div>
          <p>We are open monday-friday</p>
          <h3 className="font-bold text-2xl">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex  gap-5 text-white">
        <div>
          <BiSolidPhoneCall className="text-5xl" />
        </div>
        <div>
          <p>Have a question?</p>
          <h3 className="font-bold text-2xl">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex  gap-5 text-white">
        <div>
          <ImLocation2 className="text-5xl"/>
        </div>
        <div>
          <p>Need a repair? our address</p>
          <h3 className="font-bold text-2xl">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
