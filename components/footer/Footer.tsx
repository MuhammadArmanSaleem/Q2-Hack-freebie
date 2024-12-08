import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcPaypal, faApplePay, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center pt-20 -mb-24">
      <div className="h-[180px] w-[1240px] bg-black rounded-xl flex items-center">
      <h1 className="text-5xl text-white font-bold pl-5  flex justify-between ">
      STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
      <section className="flex pl-72 flex-col items-center space-y-4">
      <form className="w-full max-w-sm">
        <div className="flex items-center border rounded-full px-3 py-2 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.94 4.42A2 2 0 014.56 3h10.88a2 2 0 011.62.42l-6.31 5.44a1 1 0 01-1.38 0L2.94 4.42zM2 5.54v7.92c0 .58.34 1.09.86 1.32l5.94-5.12-6.8-5.88zm10.2 3.76l5.94 5.12c.52-.23.86-.74.86-1.32V5.54l-6.8 5.88z" />
          </svg>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow ml-2 bg-transparent outline-none text-sm text-gray-700"
          />
        </div>
      </form>
    <button className="text-sm text-black rounded-full w-[349px] h-[46px] bg-white border-black border-2">
      Subscribe to Newsletter
    </button>
    </section>
      </h1>

        </div>
      
      </div>
      
      <div className="bg-gray h-[499px]">
      <footer className="bg-gray-100 text-gray-700 py-10 pt-36">
      <div className="max-w-full mx-auto px-28">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
         
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-[33.45px] font-bold">SHOP.CO</h1>
            <p className="mt-4">
              We have clothes that suit your style and <br /> which youre proud to wear. From <br /> women to men.
            </p>
            <div className="flex space-x-4 mt-4">
  <a href="#" className="text-gray-500 hover:text-black">
    <FontAwesomeIcon icon={faTwitter} className="h-6" />
  </a>
  <a href="#" className="text-gray-500 hover:text-black">
    <FontAwesomeIcon icon={faFacebook} className="h-6" />
  </a>
  <a href="#" className="text-gray-500 hover:text-black">
    <FontAwesomeIcon icon={faInstagram} className="h-6" />
  </a>
  <a href="#" className="text-gray-500 hover:text-black">
    <FontAwesomeIcon icon={faGithub} className="h-6" />
  </a>
</div>

          </div>

       
          <div>
            <h2 className="font-bold text-lg mb-4">COMPANY</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Works</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">HELP</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Delivery Details</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">FAQ</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
              <li><a href="#" className="hover:underline">Orders</a></li>
              <li><a href="#" className="hover:underline">Payments</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">RESOURCES</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Free eBooks</a></li>
              <li><a href="#" className="hover:underline">Development Tutorial</a></li>
              <li><a href="#" className="hover:underline">How to - Blog</a></li>
              <li><a href="#" className="hover:underline">YouTube Playlist</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

       
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
  <FontAwesomeIcon icon={faCcVisa} className="h-6 text-blue-500" />
  <FontAwesomeIcon icon={faCcMastercard} className="h-6 text-orange-500" />
  <FontAwesomeIcon icon={faCcPaypal} className="h-6 text-blue-700" />
  <FontAwesomeIcon icon={faApplePay} className="h-6 text-gray-900" />
  <FontAwesomeIcon icon={faGooglePay} className="h-6 text-green-500" />
</div>

        </div>
      </div>
    </footer>
      </div>

    </div>
  )
}

export default Footer