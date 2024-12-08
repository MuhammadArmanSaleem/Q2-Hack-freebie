import React from 'react'
import Banner from '@/components/banner/Banner'
import Company from '@/components/company/Company'
import Arrivals from '@/components/new-arrivals/Arrivals'
import Seller from '@/components/top-seller/Seller'
import Dress from '@/components/dress-style/Dress'
import Feedback from '@/components/feedbacks/Feedback'

const page = () => {
  return (
    <div>
      
<Banner></Banner>
<Company></Company>
<Arrivals></Arrivals>
<Seller></Seller>
<Dress></Dress>
<Feedback></Feedback>
    </div>
  )
}

export default page