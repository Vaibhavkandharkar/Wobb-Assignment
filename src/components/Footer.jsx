import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-blue-50 flex flex-wrap lg:flex-nowrap'>
      <div className='p-6 w-full lg:w-auto flex justify-center lg:block'>
        <div className='flex items-center'>
          <img className='h-8 w-8' src="./src/assets/img/logo.png" alt="logo" />
          <h1 className='font-bold text-blue-950 text-2xl ml-2'>Wobb</h1>
        </div>
      </div>
      
      <div className='p-6 w-1/2 md:w-1/3 lg:w-auto'>
        <h3 className='font-semibold text-blue-950 pb-5'>Home</h3>
        <a href="#" className='block mb-1 cursor-pointer'>Pricing</a>
        <a href="#" className='block mb-1 cursor-pointer'>Reviews</a>
        <a href="#" className='block mb-1 cursor-pointer'>Automated Campaign Manager</a>
        <a href="#" className='block mb-1 cursor-pointer'>Influencer Discovery</a>
        <a href="#" className='block mb-1 cursor-pointer'>FAQs</a>
      </div>
      
      <div className='p-6 w-1/2 md:w-1/3 lg:w-auto'>
        <h3 className='font-semibold text-blue-950 pb-5'>Resources</h3>
        <a href="#" className='block cursor-pointer'>Blog</a>
        <a href="#" className='block cursor-pointer'>Customer Stories</a>
        <a href="#" className='block cursor-pointer'>Help Centre</a>
        <a href="#" className='block cursor-pointer'>Become an Affiliate</a>
      </div>
      
      <div className='p-6 w-full md:w-1/3 lg:w-auto'>
        <h3 className='font-semibold text-blue-950 pb-5'>Tools</h3>
        <a href="#" className='block'>Fake Followers Checker</a>
        <a href="#" className='block'>Engagement Rate Checker</a>
        <a href="#" className='block'>Influencer Profile Analytics</a>
      </div>
      
      <div className='p-6 w-full md:w-1/3 lg:w-auto'>
        <h3 className='font-semibold text-blue-950 pb-5'>How We Compare</h3>
        <a href="#" className='block'>Upfluence vs. Wobb</a>
        <a href="#" className='block'>Modash vs. Wobb</a>
        <a href="#" className='block'>Aspire vs. Wobb</a>
        <a href="#" className='block'>Grin vs. Wobb</a>
        <a href="#" className='block'>HypeAuditor vs. Wobb</a>
        <a href="#" className='block'>Traackr vs. Wobb</a>
      </div>
    </div>
  )
}

export default Footer
