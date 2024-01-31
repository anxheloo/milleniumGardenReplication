import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    text: "",
  });

  const printElements = (event) => {
    event.preventDefault();
    console.log(values);

    setValues({
      fullName: "",
      email: "",
      text: "",
    });
  };

  return (
    <div className="flex flex-col  md:flex-row space-x-8 items-end  ">
      <form className="w-full lg:w-[700px] flex flex-col gap-4">
        {/* lg:4/5 xl:3/5 2xl:w-2/5  */}
        <div className="flex flex-1 gap-4">
          <input
            type="text"
            placeholder="FULL NAME"
            className="border border-gray-400 bg-transparent outline-none w-1/2 px-5 py-4  caret-white text-white"
            value={values.fullName}
            onChange={(event) =>
              setValues((prevValues) => ({
                ...prevValues,
                fullName: event.target.value,
              }))
            }
          ></input>
          <input
            type="email"
            placeholder="EMAIL"
            className="border border-gray-400 bg-transparent outline-none w-1/2 px-5 py-4 caret-white text-white"
            value={values.email}
            onChange={(event) =>
              setValues((prevValues) => ({
                ...prevValues,
                email: event.target.value,
              }))
            }
          ></input>
        </div>
        <div>
          <textarea
            placeholder="MESSAGE"
            // w-full
            className="border border-gray-400 bg-transparent outline-none w-full flex-1 px-5 py-6 caret-white text-white"
            value={values.text}
            onChange={(event) =>
              setValues((prevValues) => ({
                ...prevValues,
                text: event.target.value,
              }))
            }
          ></textarea>
        </div>
      </form>

      <div className="mb-2">
        <button
          onClick={printElements}
          type="submit"
          className="bg-[#8b7c2a] rounded-md w-fit h-fit"
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white text-[40px] -rotate-45 px-4 py-3 "
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
