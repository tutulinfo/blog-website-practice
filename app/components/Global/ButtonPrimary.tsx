import React from "react";

interface Props {
  label?: string;
}

const ButtonPrimary = ({ label = "Click me" }: Props) => {
  return (
    <button className="px-4 py-2  bg-sky-600 hover:bg-sky-900 text-sm font-medium text-white whitespace-nowrap ">
      {label}
    </button>
  );
};

export default ButtonPrimary;
