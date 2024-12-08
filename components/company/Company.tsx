import React from 'react'
import Image from 'next/image' 

const Company = () => {
  return (
    <div className="bg-black h-[122px] flex items-center justify-between px-28">
        <Image src="/images/Group.png" alt="logo" width={156} height={36}></Image>
        <Image src="/images/zara-logo-1 1.png" alt="logo" width={91} height={38}></Image>
        <Image src="/images/gucci-logo-1 1.png" alt="logo" width={156} height={36}></Image>
        <Image src="/images/prada-logo-1 1.png" alt="logo" width={156} height={36}></Image>
        <Image src="/images/Group-1.png" alt="logo" width={156} height={36}></Image>
       
    </div>
  )
}

export default Company