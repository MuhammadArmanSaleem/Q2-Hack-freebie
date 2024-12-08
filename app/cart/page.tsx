import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Cart = () => {
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
          <Link href="/shop" className="hover:text-gray-700">Cart</Link>
        </li>
        </ol>
        </nav>

<div className="">
        <h2 className="font-bold mx-16 text-[41px]">YOUR CART</h2>
</div>
<div className="">
<div className="flex justify-around p-8  bg-gray-50">
      
      <div className="w-2/3 space-y-4">
        
        <div className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
          <div className="flex items-center space-x-4">
          <Image src="/images/seller/image 8.png" alt="" width={100} height={100}></Image>
           
            <div>
              <h2 className="font-bold">Gradient Graphic T-shirt</h2>
              <p className="text-sm text-gray-500">Size: Large</p>
              <p className="text-sm text-gray-500">Color: White</p>
              <p className="text-lg font-bold">$145</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">
              -
            </button>
            <span className="text-lg">1</span>
            <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">
              +
            </button>
            <button className="text-red-500">🗑️</button>
          </div>
        </div>

        
        <div className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
          <div className="flex items-center space-x-4">
           
            <Image src="/images/seller/image 8-1.png" alt="" width={100} height={100}></Image>
            <div>
              <h2 className="font-bold">Checkered Shirt</h2>
              <p className="text-sm text-gray-500">Size: Medium</p>
              <p className="text-sm text-gray-500">Color: Red</p>
              <p className="text-lg font-bold">$180</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">
              -
            </button>
            <span className="text-lg">1</span>
            <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">
              +
            </button>
            <button className="text-red-500">🗑️</button>
          </div>
        </div>

        
        <div className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
          <div className="flex items-center space-x-4">
          <Image src="/images/seller/image 9.png" alt="" width={100} height={100}></Image>
          
            <div>
              <h2 className="font-bold">Skinny Fit Jeans</h2>
              <p className="text-sm text-gray-500">Size: Large</p>
              <p className="text-sm text-gray-500">Color: Blue</p>
              <p className="text-lg font-bold">$240</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">
              -
            </button>
            <span className="text-lg">1</span>
            <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">
              +
            </button>
            <button className="text-red-500">🗑️</button>
          </div>
        </div>
      </div>

      <div className="w-1/3 ml-60 bg-white p-6 shadow rounded-lg">
        <h2 className="font-bold text-lg mb-4">Order Summary</h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal</span>
          <span>$565</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Discount (-20%)</span>
          <span className="text-red-500">-$113</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <span>Delivery Fee</span>
          <span>$15</span>
        </div>
        <hr className="mb-4" />
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span>
          <span>$467</span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full border px-4 py-2 rounded-lg mb-2"
          />
          <button className="w-full bg-gray-900 text-white py-2 rounded-lg">
            Apply
          </button>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-lg font-bold">
          Go to Checkout →
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Cart