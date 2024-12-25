import PropTypes from "prop-types";
const BookingRow = ({ booking, handleDelete, handleCheckOutConfirm }) => {
  const { _id, date, service, img, price, status } = booking;

  return (
    <tr>
      <th>
        {status ? (
          " "
        ) : (
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </th>
      <td>
        <div className="avatar">
          <div className="rounded h-24 w-24">
            {img && <img src={img} alt="Empty" />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{price}</td>
      {/* <td>{email}</td> */}
      <th>
        {status === "confirm" ? (
          <span className="px-5 py-2 border border-[#29B170] text-[#29B170] rounded">
            Confirmed
          </span>
        ) : (
          <button
            onClick={() => handleCheckOutConfirm(_id)}
            className="btn  bg-[#FF3811] px-5 py-2 text-white"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;

BookingRow.propTypes = {
  booking: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheckOutConfirm: PropTypes.func.isRequired,
};
