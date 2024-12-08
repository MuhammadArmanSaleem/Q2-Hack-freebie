import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Dress = () => {
  return (
    <div className="flex justify-center items-center mt-10">


    <div className="bg-gray w-[1239px] h-[866px] rounded-3xl ">
        <div className="text">
        <h1 className="text-5xl font-bold pt-16 pb-6 text-center">
        BROWSE BY DRESS STYLE
        </h1>
        </div>
 
         <div className="grid grid-cols-3 justify-center items-center ">
            <div className="">
            <Link href="/casual" className="">
              <Image src="/images/Frame 61.png" alt="" width={407} height={289}></Image>
            </Link>
            </div>
            <div className="col-span-2">
            <Link href="/Formal" className="">
              <Image src="/images/Frame 62.png" alt="" width={684} height={289}></Image>
            </Link>
            </div>
            <div className="col-span-2">
            <Link href="/Party" className="">
              <Image src="/images/Frame 64.png" alt="" width={684} height={289}></Image>
            </Link>
            </div>
            <div className="">
            <Link href="/Gym" className="">
              <Image src="/images/Frame 63.png" alt="" width={407} height={289}></Image>
            </Link>
            </div>
         </div>

    </div>
    </div>
  )
}

export default Dress