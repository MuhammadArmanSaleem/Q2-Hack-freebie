// import React from "react";
// import Link from "next/link";
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

// const Header = () => {
//   return (
//     <div>
//       <div className="sale-line flex justify-center items-center bg-black text-white h-[38px]">
//         <p className="">Sign up and get 20% off to your first order. </p>
//         <p className="font-medium">Sign Up Now</p>
//       </div>

//       <div className="nav flex justify-between items-center pl-16 py-4 ">
//         <div className="logo">
//           <h1 className="text-[32px] font-bold">SHOP.CO</h1>
//         </div>

//         <nav className="flex gap-6 items-center p-4 bg-gray-50">
//   <div className="relative inline-block text-left group">
//     <button className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//       Options
//       <svg
//         className="-mr-1 ml-2 h-5 w-5"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//         fill="currentColor"
//         aria-hidden="true"
//       >
//         <path
//           fillRule="evenodd"
//           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </button>

    
//     <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
//       <div className="py-1">
//         <a
//           href="/shirt"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         >
//           Shirts
//         </a>
//         <a
//           href="/cart"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         >
//           Cart
//         </a>
//         <a
//           href="/casual"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         >
//           Casual
//         </a>
//       </div>
//     </div>
//   </div>

//   <Link href="/on-sale" className="text-base font-normal hover:underline">
//     On Sale
//   </Link>
//   <Link href="/new-arrivals" className="text-base font-normal hover:underline">
//     New Arrivals
//   </Link>
//   <Link href="/brands" className="text-base font-normal hover:underline">
//     Brands
//   </Link>
// </nav>

       
//         <div className="search-icons flex items-center justify-around">
//         <div className="flex items-center bg-gray  rounded-3xl px-4 py-2 ">
//       <HiMagnifyingGlass className="text-lg mr-2" />

      
//       <input
//         type="text"
//         placeholder="Search for products..."
//         className="bg-gray h-[30px]  w-[400px]"
//       />

     
//     </div>
    
//     <div className="flex gap-4 pl-6 pr-16">
//    <Link href="/cart">
//         <AiOutlineShoppingCart className="text-lg cursor-pointer" />

//    </Link>
//         <AiOutlineUser className="text-lg cursor-pointe" />
//       </div>
//         </div>
//       </div>
//       <hr className="mx-16" />
//     </div>
//   );
// };

// export default Header;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Sale Banner */}
      <div className="sale-line flex justify-center items-center bg-black text-white h-[38px]">
        <p className="">Sign up and get 20% off your first order.</p>
        <p className="font-medium">Sign Up Now</p>
      </div>

      {/* Navigation Bar */}
      <div className="nav flex justify-between items-center pl-16 py-4">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-[32px] font-bold">SHOP.CO</h1>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex gap-6 items-center p-4 bg-gray-50">
          <div className="relative inline-block text-left group">
            <button className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              Options
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
              <div className="py-1">
                <a
                  href="/shirt"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Shirts
                </a>
                <a
                  href="/cart"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Cart
                </a>
                <a
                  href="/casual"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Casual
                </a>
              </div>
            </div>
          </div>

          <Link href="/on-sale" className="text-base font-normal hover:underline">
            On Sale
          </Link>
          <Link
            href="/new-arrivals"
            className="text-base font-normal hover:underline"
          >
            New Arrivals
          </Link>
          <Link href="/brands" className="text-base font-normal hover:underline">
            Brands
          </Link>
        </nav>

        <div className="search-icons flex items-center justify-around">
        <div className="flex items-center bg-gray-200 rounded-3xl px-4 py-2">
  <HiMagnifyingGlass className="text-lg mr-2" />

  <input
    type="text"
    placeholder="Search for products..."
    className="bg-gray-200 h-[30px] hidden sm:block flex-1 px-2 rounded-md"
  />
</div>


          <div className="flex gap-4 pl-6 pr-16">
            <Link href="/cart">
              <AiOutlineShoppingCart className="text-lg cursor-pointer" />
            </Link>
            <AiOutlineUser className="text-lg cursor-pointer" />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-2 space-y-2 bg-gray-50">
          <Link
            href="/on-sale"
            className="block text-base text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            On Sale
          </Link>
          <Link
            href="/new-arrivals"
            className="block text-base text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            New Arrivals
          </Link>
          <Link
            href="/brands"
            className="block text-base text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            Brands
          </Link>
          <a
            href="/shirt"
            className="block text-base text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            Shirts
          </a>
          <a
            href="/cart"
            className="block text-base text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            Cart
          </a>
          <a
            href="/casual"
            className="block text-base text-gray-700 px-4 py-2 hover:bg-gray-100"
          >
            Casual
          </a>
        </div>
      )}

      <hr className="mx-16" />
    </div>
  );
};

export default Header;
