import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useGetCountries } from "../hooks/useGetCountries";

const LocationButton = () => {
  const [toggle, setToggle] = useState(false);
  const { data, isLoading, isError } = useGetCountries();
  return (
    <>
      <button
        onClick={() => setToggle(true)}
        className="bg-white text-slate-600 font-medium p-3 rounded-lg border border-gray-200 transition hover:bg-[#F6FAFD] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Location
      </button>
      {toggle && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center w-screen h-screen transition-opacity duration-300"
          onClick={() => setToggle(false)}
        >
          <div
            className="bg-white text-black p-6 rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                {" "}
                <h2 className="text-xl font-semibold text-gray-800 ">
                  Choose your Delivery Location
                </h2>
              </div>
              <div
                className="rounded-full hover:bg-red-600 p-2 cursor-pointer hover:text-white"
                onClick={() => setToggle(false)}
              >
                <IoClose className="" />
              </div>
            </div>
            <p>
              Enter your address and we will specify the offer for your area.
            </p>
            <ul className="space-y-2 mt-4">
              {data.map((location, index) => (
                <li
                  key={index}
                  className="p-3 rounded-md bg-gray-50 hover:bg-blue-50 text-gray-700 cursor-pointer transition-colors duration-200 text-right"
                  onClick={() => {
                    console.log(`Selected: ${location}`);
                    setToggle(false);
                  }}
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationButton;
