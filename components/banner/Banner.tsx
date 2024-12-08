import React from 'react'

const Banner = () => {
  return (

  
  <div className="bg-custom-image bg-cover bg-center h-screen">
  <div className="text py-24 px-6 sm:px-12 md:px-24">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
      FIND CLOTHES <br />
      THAT MATCHES <br />
      YOUR STYLE
    </h1>
    <p className="pb-7 pt-2 text-base sm:text-lg md:text-xl">
      Browse through our diverse range of meticulously crafted garments, designed <br />
      to bring out your individuality and cater to your sense of style.
    </p>
    <button className="btn rounded-full hover:bg-white hover:text-black hover:border-black hover:border-2 text-white w-[200px] sm:w-[210px] h-[50px] sm:h-[52px] bg-black">
      Shop now
    </button>
  </div>
</div>


  )
}

export default Banner