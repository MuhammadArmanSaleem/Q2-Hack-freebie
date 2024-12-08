import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { HiAdjustmentsVertical } from "react-icons/hi2";

const casual = () => {
  return (
    <div className="">
 <nav aria-label="Breadcrumb" className="text-sm px-16 py-4 text-gray-500">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:text-gray-700">Home</Link>
        </li>
        <li className="relative">
          <span className="mx-2">➔</span>
        </li>
        <li>
          <Link href="/shop" className="hover:text-gray-700">Casual</Link>
        </li>
        </ol>
        </nav>
    <div className="flex ">
      
       <div className="ml-14 w-[295px] h-[1000px] shadow-md border-slate-300 border-2 rounded-2xl ">
        <div className="flex justify-between mx-3">
        <h2 className="font-bold text-[32px]">Filters</h2>
        <div className="mt-5">
        <HiAdjustmentsVertical />
          </div>
        </div>

       <hr className="mx-3 text-slate-300" />

       <div className="">
        <ol >
          <li className="mx-3 my-2 hover:bg-gray ">T-shirt</li>
          <li className="mx-3 my-2 hover:bg-gray ">Shorts</li>
          <li className="mx-3 my-2 hover:bg-gray ">Shirts</li>
          <li className="mx-3 my-2 hover:bg-gray ">Hoodie</li>
          <li className="mx-3 my-2 hover:bg-gray ">Jeans</li>
        </ol>
       </div>

       <hr className="mx-3 text-slate-300" />

        <div className="">
        <div className="flex justify-between mx-3">
        <h2 className="font-bold text-[32px]">Price</h2>
        <div className="mt-5">
        <HiAdjustmentsVertical />
          </div>

        </div>
        </div>

        <hr className="mx-3 text-slate-300" />


        <div className="mx-3">
        <h2 className="font-bold text-[32px]">Colors</h2>
        <div className="grid grid-cols-5 gap-3 mt-3">
              <div className="w-8 h-8 bg-[#00C12B] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#F50606] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#F5DD06] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#F57906] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#06CAF5] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#0700d5] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#7D06F5] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#F506A4] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#000000] border-slate-400 border-2 rounded-full"></div>
              <div className="w-8 h-8 bg-[#FFFFFF] border-slate-400 border-2 rounded-full"></div>
            </div>
        </div>
        <hr className="mx-3 mt-4 text-slate-300" />

<div className="mx-3">
<h2 className="font-bold text-[32px]">Size</h2>
<div className="space-x-4 mt-2 grid space-y-2 grid-cols-2">
              <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full">
                XX-Small
              </button>
              <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full">
                X-Small
              </button>
              <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full">
                Small
              </button>
                <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full">
                  Medium
                </button>
              <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full bg-gray-100">
                Large
              </button>
              <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full">
                 X-Large
              </button>
              <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full">
                XX-Large
              </button>
              <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full">
                3X-Large
              </button>
              <button className="bg-gray hover:bg-black hover:text-white px-4 py-2 rounded-full">
                4X-Large
              </button>
            </div>

            
</div>

<hr className="mx-3 mt-4 text-slate-300" />
<div className="">
<h2 className="font-bold mx-3 text-[32px]">Dress Style</h2>
  
        <ol >
          <li className="mx-3 my-2 hover:bg-gray ">Casual</li>
          <li className="mx-3 my-2 hover:bg-gray ">Formal</li>
          <li className="mx-3 my-2 hover:bg-gray ">Party</li>
          <li className="mx-3 my-2 hover:bg-gray ">Gym</li>
       
        </ol>
       </div>

<div className="flex my-7 justify-center items-center">
       <button className="bg-black text-white w-[247px] rounded-full px-4 py-2 flex items-center justify-center hover:bg-white hover:text-black">Apply Filter</button>
</div>



       </div>
       <div className="w-5/6 ">

        <div className="flex justify-between items-center mx-8">
        <h2 className="font-bold text-[32px]">Casual</h2>
        <div className="flex justify-between">
          <p className="text-slate-400 pr-2">Showing 1-10 of 100 Products</p>
          <p className="text-slate-400">Sort by:</p>
          <p className="font-medium text-base">Most Popular</p>
        </div>
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
       

      </div>
        </div>
    </div>
    </div>
  )
}

export default casual