import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/logo.svg";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#151515] w-full">
      <div className="flex justify-between max-w-7xl mx-auto text-white  mt-20 py-16">
        <div>
          <div className="relative">
            <img src={logo} alt="" />
            <p className="bg-[#151515] text-[21px] absolute bottom-0 pl-[5px] pt-[2px]">
              Car Doctor
            </p>
          </div>
          <p className="text-[#E8E8E8] mt-2">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
          <ul className="text-xl flex gap-2 mt-5 ">
            <Link to={"/"} className="bg-[#FFFFFF1A] p-3 rounded-full">
              <FaGoogle />
            </Link>
            <Link to={"/"} className="bg-[#FFFFFF1A] p-3 rounded-full">
              <FaTwitter />
            </Link>
            <Link to={"/"} className="bg-[#FFFFFF1A] p-3 rounded-full">
              <FaInstagram />
            </Link>
            <Link to={"/"} className="bg-[#FFFFFF1A] p-3 rounded-full">
              <FaLinkedin />
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-semibold text-xl">About</h6>
          <div className="flex flex-col space-y-6 mt-10">
            <Link className="link-hover text-[#E8E8E8]">Home</Link>
            <Link className="link-hover text-[#E8E8E8]">Service</Link>
            <Link className="link-hover text-[#E8E8E8]">Contact</Link>
          </div>
        </div>
        <div>
          <h6 className="text-white font-semibold text-xl">Company</h6>
          <div className="flex flex-col space-y-6 mt-10">
            <Link className="link link-hover text-[#E8E8E8]">
              Why Car Doctor
            </Link>
            <Link className="link-hover text-[#E8E8E8]">About</Link>
          </div>
        </div>
        <div>
          <h6 className="text-white font-semibold text-xl">Support</h6>
          <div className="flex flex-col space-y-6 mt-10">
            <Link className="link-hover text-[#E8E8E8]">Support Center</Link>
            <Link className="link-hover text-[#E8E8E8]">Feedback</Link>
            <Link className="link-hover text-[#E8E8E8]">Accessibility</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
