import React from "react";
import { NaviBar } from "../component";
import Pimg from "../assets/Profile-picture.png";
import Epi from "../assets/edit picture.svg";
import Home from "../assets/home vector.svg";
import Che from "../assets/chevron 1.svg";
import Psi from "../assets/Vector.svg";
import Plok from "../assets/lock vector.svg";
import notification from "../assets/Notification icon.svg";
import Pv1 from "../assets/Password vector 1.svg";
import { useFormik } from "formik";
import { passswordSchema } from "../schema";
import { NavLink } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  actions.resetForm();
};

const Password = () => {
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
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: passswordSchema,
    onSubmit,
  });
  console.log(values);

  return (
    <div className="bg-[#FCFCFD] ">
      <NaviBar />
      <div className="ml-[43px]">
        <div className="mt-2 flex items-center justify-center w-[261px] h-[30px]">
          <div className="mr-[25px]">
            <img src={Home} alt="" className="w-[16px] h-[18px] " />
          </div>
          <div className="mr-[12px]">
            <img src={Che} alt="" className="w-[7px] h-[12px]" />
          </div>
          <h6 className=" w-[200px] h-[30px] text-[25px] font-normal flex justify-center items-center">
            Account settings
          </h6>
        </div>
        <div className="flex mt-[36px] ">
          <div className="w-[268px] h-[213px] bg-[rgba(255,255,255,0.05)] shadow   ">
            <div className="flex flex-col">
                <NavLink id="settings" to='/profile-page' className='py-[0.5rem]'>
              <div className="flex items-center w-[268px] h-[39px] mt-[20px] pl-8">

                <span className=" flex justify-center items-center w-[17px] h-[17px] border border-[#000000] rounded-full mr-8">
                  <img src={Psi} alt="" />
                </span>
                Profile Settings
              </div>
                </NavLink>
              <NavLink id="settings" to="/password"className='mt-[20px] py-[0.5rem]'>
                <div className=" flex items-center pl-8">
                  <span className=" flex justify-center items-center w-[17px] h-[17px]  mr-8">
                    <img src={Plok} alt="" />
                  </span>
                  Password
                </div>
              </NavLink>
              <div className=" flex items-center pl-8 mt-[36px] mb-[35px]">
                <span className=" flex justify-center items-center w-[17px] h-[17px]  mr-8">
                  <img src={notification} alt="" className="w-[9px] h-[9px]" />
                </span>
                Notification
              </div>
            </div>
          </div>

          {/* Profile picture */}
          <div className="ml-[71px] w-[969px] h-[748px] bg-[rgba(255,255,255,0.05)] shadow">
            <div className="ml-[280px] mt-[32px]">
              <div className="w-[525px] h-[127px] flex justify-between items-center">
                <div className="h-[127px] rounded-full flex flex-row items-center  ">
                  <img src={Pimg} alt="" className="w-[127px] " />
                  <div className="ml-[25px]">
                    <div>
                      <h6 className="text-[#344054] text-[25px] font-normal ">
                        Smith Johnson
                      </h6>
                    </div>
                    <div className="text-[#7C7D7D] text-[14px] ">
                      johnsonsmith@gmail.com
                    </div>
                  </div>
                  <div className="absolute flex justify-center align-middle right-[8px] bottom-[10px] w-6 h-6"></div>
                </div>
              </div>

              {/* fields */}
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mt-[34px] flex flex-col ">
                  <label>Current password*</label>
                  <div className="flex flex-row relative  w-[360px]">
                    <input
                      type="password"
                      placeholder="Enter current password"
                      className={`border w-[360px] h-[44px] pl-[2rem] rounded-lg mt-[6px]
                    ${
                      errors.currentPassword && touched.currentPassword
                        ? "border-[red]"
                        : "border-[#53352d80]"
                    }`}
                      name="currentPassword"
                      value={values.currentPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="absolute top-[40%] left-[3%]">
                      <img src={Pv1} alt="" />
                    </div>
                  </div>
                  {errors.currentPassword && touched.currentPassword && (
                    <p className="text-[#F04438] mb-4">
                      {errors.currentPassword}
                    </p>
                  )}
                  <label className="mt-[32px]">New Password*</label>
                  <div className="flex flex-row relative  w-[360px]">
                    <input
                      type="password"
                      placeholder="Create new passsword"
                      className={`border w-[360px] h-[44px] pl-[2rem] rounded-lg mt-[6px] 
                    ${
                      errors.newPassword && touched.newPassword
                        ? "border-[red]"
                        : "border-[#53352d80]"
                    }`}
                      name="newPassword"
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="absolute top-[40%] left-[3%]">
                      <img src={Pv1} alt="" />
                    </div>
                  </div>
                  {errors.newPassword && touched.newPassword && (
                    <p className="text-[#F04438] mb-4">{errors.newPassword}</p>
                  )}
                  <label className="mt-[32px]">Confirm new password*</label>
                  <div className="flex flex-row relative  w-[360px]">
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className={`border w-[360px] h-[44px] pl-[2rem] rounded-lg mt-[6px]
                    ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-[red]"
                        : "border-[#53352d80]"
                    }`}
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="absolute top-[40%] left-[3%]">
                      <img src={Pv1} alt="" />
                    </div>
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-[#F04438] mb-4">
                      {errors.confirmPassword}
                    </p>
                  )}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="mt-[42px] w-[128px] h-[40px] bg-gradient-to-r from-[#0C3C4C] to-[#1495C0] rounded-lg ml-[235px] text-white"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
