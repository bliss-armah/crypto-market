import React from "react";

const Input = ({label,placeholder,name,value,handleChange,type}) => {
  return (
        <div className="">

      <label htmlFor="" className="font-normal text-[20.7px] pl-3">
        {label}
      </label>
      <br />
      <input
      id={name}
        type={type}
        className="w-[339px] h-[51px] rounded-lg border-[rgba(83,53,45,0.5)] border-[1px] mb-[21px] pl-3"
        placeholder={placeholder}

        name={name}
        value={value}
        onChange={handleChange}
        />
        </div>
  );
};

export default Input;
