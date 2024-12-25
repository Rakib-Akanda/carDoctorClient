import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL:
    "https://cardoctor-bdserver-sepia.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // console.log("Error tracked in the interceptor ", error.response);
        if (error.response.status === 404 || error.response.status === 403) {
          //   console.log("Logout User");
          logOut()
            .then(() => {
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
                title: "Logout successfully",
              });
              navigate("/login");
            })
            .catch((error) => alert(`You got an error ${error.message}`));
        }
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
