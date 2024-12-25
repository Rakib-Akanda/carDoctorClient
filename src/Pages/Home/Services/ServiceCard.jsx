import PropTypes from "prop-types";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl w-[364px] h-[215px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center text-xl text-[#FF3811]">
            <p>Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
              <LuArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
