import React from 'react'
import {  FooterProtatip,  } from './FooterProtatip/FooterProtatip'

export const Footer = () => {
  return (
   <footer className='container my-10' >
    <div className=''>
      <FooterProtatip/>
    </div>
    <div className="container mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
  <h1>© 2019 <a className='font-bold hover:border-b border-black' href="#">Themewagon,</a> Inc. All rights reserved</h1>
  </div>
   </footer>
  )
}
