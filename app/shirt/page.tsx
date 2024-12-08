import React from "react";
import Bread from "@/components/ui/bread-crums/Bread";
import Image from "next/image";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";


const tshirt = () => {
  return (
    <div>
      <Bread></Bread>
      <div className="container mx-auto flex pl-14 h-screen">
        <div className="space-y-3 w-1/6">
          <Image
            src="/images/image 2.png"
            alt="Product Image border 2"
            width={152}
            height={167}
          />
          <Image
            src="/images/image 6.png"
            alt="Product Image 4"
            width={152}
            height={167}
          />
          <Image
            src="/images/image 5.png"
            alt="Product Image 3"
            width={152}
            height={167}
          />
        </div>
        <div className="w-[650px]">
          <Image
            src="/images/image 1.png"
            alt="Product Image 1"
            width={444}
            height={530}
          />
        </div>

        <div className="w-4/5 ">
          <div className="">
            <h1 className="text-[40px] font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          </div>
          <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

          </div>

          <div className="flex items-center mt-4">
            <div className="text-[32px] font-bold">$260</div>
            <div className="text-slate-200  text-[32px] line-through ml-2">
              $300
            </div>
            <div className="bg-red-100 w-[72px] h-[34px] text-[16px] text-red-500 text-sm font-medium flex items-center justify-center px-2 py-1 rounded-full ml-2">
              -40%
            </div>
          </div>
          <p className="mt-4 w-[590px]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="w-[590px] text-slate-300 mt-4" />
          <div className="mt-4">
            <h2 className="text-base text-slate-500 font-normal">
              Select Colors
            </h2>
            <div className="flex gap-3 mt-2">
              <div className="w-8 h-8 bg-[#4F4631] rounded-full"></div>
              <div className="w-8 h-8 bg-[#314F4A] rounded-full"></div>
              <div className="w-8 h-8 bg-[#31344F] rounded-full"></div>
            </div>
          </div>
          <hr className="w-[590px] text-slate-300 mt-4" />

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Choose Size</h2>
            <div className="flex space-x-4 mt-2">
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
            </div>
          </div>
          <hr className="w-[590px] text-slate-300 mt-4" />

          <div className="flex items-center gap-4">
            <div className="flex mt-4 bg-gray rounded-full w-[170px] items-center justify-center">
              <button className="bg-gray px-4 py-2 rounded-full">-</button>
              <input
                type="text"
                className="bg-gray px-4 py-2 rounded-full text-center w-16"
                value="1"
              />
              <button className="bg-gray px-4 py-2 rounded-full">+</button>
            </div>
            <button className="bg-black  hover:bg-white hover:text-black hover:border-black hover:border-2 text-white px-8 py-3 rounded-full mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="-mt-32 flex justify-around items-center relative">
        <h1 className="text-xl text-slate-400">Product Review</h1>

        <div className="flex flex-col items-center">
          <h1 className="text-xl text-black">Rating & Reviews</h1>

          <hr className="w-16 h-1 bg-black border-0 mt-1" />
        </div>

        <h1 className="text-xl text-slate-400">FAQs</h1>
      </div>

      <hr className="text-slate-300 mt-4 mx-14" />

      <div className="flex justify-between mx-11 pt-3">
        <h2 className="font-bold text-2xl">All Reviews <sub>(451 )</sub></h2>
        <div className="flex justify-between gap-2">
            <button className="bg-gray rounded-full px-4 py-2 flex items-center justify-center hover:bg-black hover:text-white">latest</button>
            <button className="bg-gray rounded-full px-4 py-2 flex items-center justify-center hover:bg-black hover:text-white"><HiAdjustmentsVertical /></button>
            <button className="bg-black text-white rounded-full px-4 py-2 flex items-center justify-center hover:bg-white hover:text-black">Write A Review</button>
        </div>

      </div>

      <div className="grid grid-cols-2 space-y-5 place-items-center">
      <div className="p-6 w-[610px] h-[241.58px] bg-white shadow rounded-md border-gray">
  <div className="flex justify-between items-center">
    
  <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

          </div>
    <div className="text-gray-400 cursor-pointer">...</div>
  </div>
  
  <div className="mt-2">
    <h2 className="font-bold text-lg flex items-center">
      Samantha D.
      <span className="ml-2 text-green-500">&#10003;</span>
    </h2>
    <p className=" pt-4 text-sm text-gray-500">
      I absolutely love this t-shirt! The design is unique and the fabric feels
      so comfortable. As a fellow designer, I appreciate the attention to
      detail. Its become my favorite go-to shirt
    </p>
  </div>
 
  <div className="pt-8 text-sm text-gray-400">Posted on August 14, 2023</div>
</div>
      <div className="p-6 w-[610px] h-[241.58px] bg-white shadow rounded-md border-gray">
  <div className="flex justify-between items-center">
    
  <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

          </div>
    
    <div className="text-gray-400 cursor-pointer">...</div>
  </div>
  
  <div className="mt-2">
    <h2 className="font-bold text-lg flex items-center">
      Samantha D.
      <span className="ml-2 text-green-500">&#10003;</span>
    </h2>
    <p className=" pt-4 text-sm text-gray-500">
      I absolutely love this t-shirt! The design is unique and the fabric feels
      so comfortable. As a fellow designer, I appreciate the attention to
      detail. Its become my favorite go-to shirt
    </p>
  </div>
 
  <div className="pt-8 text-sm text-gray-400">Posted on August 14, 2023</div>
</div>
      <div className="p-6 w-[610px] h-[241.58px] bg-white shadow rounded-md border-gray">
  <div className="flex justify-between items-center">
    
  <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

          </div>
    
    <div className="text-gray-400 cursor-pointer">...</div>
  </div>
  
  <div className="mt-2">
    <h2 className="font-bold text-lg flex items-center">
      Samantha D.
      <span className="ml-2 text-green-500">&#10003;</span>
    </h2>
    <p className=" pt-4 text-sm text-gray-500">
      I absolutely love this t-shirt! The design is unique and the fabric feels
      so comfortable. As a fellow designer, I appreciate the attention to
      detail. Its become my favorite go-to shirt
    </p>
  </div>
 
  <div className="pt-8 text-sm text-gray-400">Posted on August 14, 2023</div>
</div>
      <div className="p-6 w-[610px] h-[241.58px] bg-white shadow rounded-md border-gray">
  <div className="flex justify-between items-center">
    
  <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

          </div>
    
    <div className="text-gray-400 cursor-pointer">...</div>
  </div>
  
  <div className="mt-2">
    <h2 className="font-bold text-lg flex items-center">
      Samantha D.
      <span className="ml-2 text-green-500">&#10003;</span>
    </h2>
    <p className=" pt-4 text-sm text-gray-500">
      I absolutely love this t-shirt! The design is unique and the fabric feels
      so comfortable. As a fellow designer, I appreciate the attention to
      detail. Its become my favorite go-to shirt
    </p>
  </div>
 
  <div className="pt-8 text-sm text-gray-400">Posted on August 14, 2023</div>
</div>
      <div className="p-6 w-[610px] h-[241.58px] bg-white shadow rounded-md border-gray">
  <div className="flex justify-between items-center">
    
  <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

          </div>
    
    <div className="text-gray-400 cursor-pointer">...</div>
  </div>
  
  <div className="mt-2">
    <h2 className="font-bold text-lg flex items-center">
      Samantha D.
      <span className="ml-2 text-green-500">&#10003;</span>
    </h2>
    <p className=" pt-4 text-sm text-gray-500">
      I absolutely love this t-shirt! The design is unique and the fabric feels
      so comfortable. As a fellow designer, I appreciate the attention to
      detail. Its become my favorite go-to shirt
    </p>
  </div>
 
  <div className="pt-8 text-sm text-gray-400">Posted on August 14, 2023</div>
</div>
      <div className="p-6 w-[610px] h-[241.58px] bg-white shadow rounded-md border-gray">
  <div className="flex justify-between items-center">
    
  <div className="flex items-center pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

          </div>
    <div className="text-gray-400 cursor-pointer">...</div>
  </div>
  
  <div className="mt-2">
    <h2 className="font-bold text-lg flex items-center">
      Samantha D.
      <span className="ml-2 text-green-500">&#10003;</span>
    </h2>
    <p className=" pt-4 text-sm text-gray-500">
      I absolutely love this t-shirt! The design is unique and the fabric feels
      so comfortable. As a fellow designer, I appreciate the attention to
      detail. Its become my favorite go-to shirt.
    </p>
  </div>
 
  <div className="pt-8 text-sm text-gray-400">Posted on August 14, 2023</div>
</div>

      </div>
      <div className="flex justify-center items-center py-7">
 <button className="border-black border-2 px-4 py-2 hover:bg-black hover:text-white bg-white rounded-full">Load More Reviews</button>
      </div>

<div className="mx-5">
<h1 className="text-[40px] font-bold text-center">YOU MIGHT ALSO LIKE</h1>
</div>
<div className="cards flex items-center justify-around px-24 pt-8">
        <div className="card-1">
          <Image
            src="/images/image 7.png"
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
          <h3 className="font-bold text-xl pt-2">Polo with Contrast Trims</h3>
          <div className=" flex items-center pt-2"> 
          <h3 className="font-bold text-2xl">$212</h3>
          <h3 className="text-slate-400 font-bold text-2xl line-through ml-2">$242</h3>
          <h3 className="bg-red-100 text-red-500 text-sm font-bold px-2 py-1 rounded-full ml-2">-20%</h3>
          </div>
        </div>
        
        <div className="card-2">
          <Image
            src="/images/image 8.png"
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
          <h3 className="font-bold text-xl pt-2">Gradient Graphic T-shirt</h3>
          <div className=" flex items-center pt-2"> 
          <h3 className="font-bold text-2xl">$240</h3>
          
          </div>
         


        </div>
        <div className="card-3">
          <Image
            src="/images/image 9.png"
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
          <h3 className="font-bold text-xl pt-2">Polo with Tipping Details</h3>
          <h3 className="font-bold text-2xl pt-2">$180</h3>
        </div>
        <div className="card-4">
          <Image
            src="/images/image 10.png"
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
          <h3 className="font-bold text-xl pt-2">Black Striped T-shirt</h3>
          <div className=" flex items-center pt-2"> 
          <h3 className="font-bold text-2xl">$120</h3>
          <h3 className="text-slate-400 font-bold text-2xl line-through ml-2">$150</h3>
          <h3 className="bg-red-100 text-red-500 text-sm font-bold px-2 py-1 rounded-full ml-2">-30%</h3>
          </div>
         
        </div>

      </div>

    </div>

   

  );
};

export default tshirt;
