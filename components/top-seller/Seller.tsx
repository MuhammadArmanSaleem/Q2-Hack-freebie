import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';


const Seller = () => {
  return (
    <div>
        <div className="text">
        <h1 className="text-5xl font-bold pt-16 pb-6 text-center">
          TOP SELLINGS
        </h1>
      </div>

      <div className="cards flex items-center justify-around px-24 pt-8">
        <div className="card-1">
          <Image
            src="/images/seller/Frame 32.png"
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
          <h3 className="font-bold text-xl pt-2">VERTICAL STRIPED SHIRT</h3>
          <div className="flex items-center pt-2">
          <h3 className="font-bold text-2xl ">$212</h3>
          <h3 className="text-slate-400 font-bold text-2xl line-through ml-2">$232</h3>
          <h3 className="bg-red-100 text-red-500 text-sm font-bold px-2 py-1 rounded-full ml-2">-20%</h3>
          </div>
        </div>
        
        <div className="card-2">
          <Image
            src="/images/seller/Frame 33.png"
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
          <h3 className="font-bold text-xl pt-2">COURAGE GRAPHIC T-SHIRT</h3>
          <div className=" flex items-center pt-2"> 
          <h3 className="font-bold text-2xl">$145</h3>
          
          </div>
         


        </div>
        <div className="card-3">
          <Image
            src="/images/seller/Frame 34.png"
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
          <h3 className="font-bold text-xl pt-2">LOOSE FIT BERMUDA SHORTS</h3>
          <h3 className="font-bold text-2xl pt-2">$80</h3>
        </div>
        <div className="card-4">
          <Image
            src="/images/seller/Frame 38.png"
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
          <h3 className="font-bold text-xl pt-2">FADED SKINNY JEANS</h3>
          <div className=" flex items-center pt-2"> 
          <h3 className="font-bold text-2xl">$210</h3>
          
          </div>
         
        </div>

      </div>
      <div className="flex items-center justify-center pt-9">
      <button className="btn rounded-full bg-white text-black border-black border-2 hover:bg-black hover:border-2 hover:border-white hover:text-white h-[52px] w-[218px] ">View ALL</button> 
      </div>
    </div>
  )
}

export default Seller