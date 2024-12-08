import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Arrivals = () => {
  return (
    <div>

      <div className="text">
        <h1 className="text-5xl font-bold pt-16 pb-6 text-center">
          NEW ARRIVALS
        </h1>
      </div>

      <div className="cards flex items-center justify-around px-24 pt-8">
        <div className="card-1">
          <Image
            src="/images/Frame 32.png"
            alt=""
            width={296}
            height={298}
          ></Image>
          <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

            <span className="ml-2 text-gray-700">4.5/5</span>
          </div>
          <h3 className="font-bold text-xl pt-2">T-SHIRT WITH TAPE DETAILS</h3>
          <h3 className="font-bold text-2xl pt-2">$120</h3>
        </div>
        
        <div className="card-2">
          <Image
            src="/images/Frame 33.png"
            alt=""
            width={296}
            height={298}
          ></Image>
          <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

            <span className="ml-2 text-gray-700">3.5/5 </span>
          </div>
          <h3 className="font-bold text-xl pt-2">Skinny Fit Jeans</h3>
          <div className=" flex items-center pt-2"> 
          <h3 className="font-bold text-2xl">$240</h3>
          <h3 className="text-slate-400 font-bold text-2xl line-through ml-2">$260</h3>
          <h3 className="bg-red-100 text-red-500 text-sm font-bold px-2 py-1 rounded-full ml-2">-20%</h3>
          </div>
         


        </div>
        <div className="card-3">
          <Image
            src="/images/Frame 34.png"
            alt=""
            width={296}
            height={298}
          ></Image>
          <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

            <span className="ml-2 text-gray-700">4.5/5</span>
          </div>
          <h3 className="font-bold text-xl pt-2">CHECKERED SHIRT</h3>
          <h3 className="font-bold text-2xl pt-2">$180</h3>
        </div>
        <div className="card-4">
          <Image
            src="/images/Frame 38.png"
            alt=""
            width={296}
            height={298}
          ></Image>
          <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

            <span className="ml-2 text-gray-700">4.5/5</span>
          </div>
          <h3 className="font-bold text-xl pt-2">SLEEVE STRIPED T-SHIRT</h3>
          <div className=" flex items-center pt-2"> 
          <h3 className="font-bold text-2xl">$130</h3>
          <h3 className="text-slate-400 font-bold text-2xl line-through ml-2">$160</h3>
          <h3 className="bg-red-100 text-red-500 text-sm font-bold px-2 py-1 rounded-full ml-2">-30%</h3>
          </div>
         
        </div>

      </div>
      <div className="flex items-center justify-center pt-9">
      <button className="btn rounded-full bg-white text-black border-black border-2 hover:bg-black hover:border-2 hover:border-white hover:text-white h-[52px] w-[218px] ">View ALL</button> 
      </div>
<hr className="mx-32 mt-10" />
            

    </div>
  );
};

export default Arrivals;
