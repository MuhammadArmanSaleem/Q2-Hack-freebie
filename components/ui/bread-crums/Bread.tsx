import React from 'react'
import Link from 'next/link'
const Bread = () => {
  return (
    <div>
  
    <nav aria-label="Breadcrumb" className="text-sm px-16 py-4 text-gray-500">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:text-gray-700">Home</Link>
        </li>
        <li className="relative">
          <span className="mx-2">➔</span>
        </li>
        <li>
          <Link href="/shop" className="hover:text-gray-700">Shop</Link>
        </li>
        <li className="relative">
          <span className="mx-2">➔</span>
        </li>
        <li>
          <Link href="/shop/men" className="hover:text-gray-700">Men</Link>
        </li>
        <li className="relative">
          <span className="mx-2">➔</span>
        </li>
        <li>
          <span className="text-gray-700">T-shirts</span> 
        </li>
      </ol>
    </nav>
 

    </div>
  )
}

export default Bread