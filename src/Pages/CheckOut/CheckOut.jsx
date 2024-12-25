import { useLoaderData } from "react-router-dom";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";
const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, _id, img } = service;
  const trapezoidStyle = {
    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
  };

  const handleCheckOutService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const message = form.message.value;
    const email = form.email.value;
    const checkout = {
      customerName: name,
      email,
      date,
      service: title,
      service_id: _id,
      img,
      price: price,
      message,
    };
    // console.log(checkout);
    fetch("https://cardoctor-bdserver-sepia.vercel.app/checkout", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checkout),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
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
            title: "Service check out successfully",
          });
        }
      });
  };
  return (
    <div>
      <div className="mb-20 relative">
        <div>
          <img
            src={checkoutImg}
            alt="Checkout"
            className="w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white font-bold text-5xl w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.01) p-4 rounded-3xl flex flex-col justify-center pl-20">
            <p>Check Out</p>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end ">
          <div
            style={trapezoidStyle}
            className="text-white font-bold flex flex-col justify-end bg-[#FF3811] px-16 py-3 "
          >
            <p>Home/Checkout</p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl my-5 font-semibold">
        Check Out Service: {title}
      </h2>
      {/* checkout form */}
      <form
        onSubmit={handleCheckOutService}
        className="bg-[#F3F3F3] p-20 rounded-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              defaultValue={user?.displayName}
              className="input"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" className="input" name="date" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              name="email"
              className="input"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input"
              name="price"
              required
            />
          </div>
        </div>
        <div className="my-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              placeholder="Your Message"
              className="input h-60 p-4"
              name="message"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn font-inter bg-[#FF3811] hover:bg-[#FF3811] text-white btn-block text-xl"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
