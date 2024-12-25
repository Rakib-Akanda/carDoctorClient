import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// require('crypto').randomBytes(64).toString('hex')""
const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const url = `https://cardoctor-bdserver-sepia.vercel.app/checkout?email=${user?.email}`;
  const url = `/checkout?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setBookings(res.data));

    // method 1
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);
    // });
    // method2
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data);
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure, You want to delete");
    if (proceed) {
      fetch(`https://cardoctor-bdserver-sepia.vercel.app/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "Order delete successfully!",
            });
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleCheckOutConfirm = (id) => {
    fetch(`https://cardoctor-bdserver-sepia.vercel.app/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleCheckOutConfirm={handleCheckOutConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
