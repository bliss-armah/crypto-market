import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon from "../assets/CryptoMart.svg";
import { Input } from "../component";
import { loginUser, storeUser } from "../features/user/userSlice";
import { loginSchema } from "../Validations/UserLogin";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate()
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
      dispatch(storeUser({ email: values.email }));
       dispatch(loginUser(values));
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  useEffect(()=>{
      if (user) {
       setTimeout(() => {
         navigate('/')
       }, 1500);
      }
     },[user])
  

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="">
        <img src={icon} alt="" className="ml-[200px]" />
        <div className="shadow-inner w-[626px] flex flex-col justify-center items-center pt-[48px] pb-[55px] text-[#101828]">
          <div className="">
            <div className=" flex flex-col justify-center items-center ">
              <h1 className="font-bold text-[rgba(12,60,76,0.81)] text-[26px] mb-[35.22px] text-center">
                Login
              </h1>
              <form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  label="Email Address*"
                  type="email"
                  name="email"
                  value={values.email}
                  handleChange={handleChange}
                  placeholder="Enter your email "
                  onBlur={handleBlur}
                  error={errors.email}
                  touch={touched.email}
                />
                <Input
                  label="Password*"
                  type="password"
                  name="password"
                  value={values.password}
                  handleChange={handleChange}
                  placeholder="Enter your password "
                  onBlur={handleBlur}
                  error={errors.password}
                  touch={touched.password}
                />

                <Link to="/signUp" className="text-[#0000ffb3] ml-[210px] ">
                  Forgot password?
                </Link>
                <div className="mt-[46px]  h-[42px] text-center  ">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className=" h-[42px] w-[268px] rounded-lg bg-[#0c3c4cce] font-normal text-white text-[17px] mb-[16px]"
                  >
                    Login
                  </button>
                  <p>
                    Don’t have an account?
                    <Link to="/signUp" className="text-[#0000ffb3]">
                      SignUp
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
