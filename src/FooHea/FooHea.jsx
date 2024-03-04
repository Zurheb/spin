import React from 'react'
import {  StickyNavbar } from './Header/Header'
import { Footer } from './Footer/Footer'

export const FooHea = ({children}) => {
  return (
    <>
   <StickyNavbar/>
    {children}
    <Footer/>
    </>
  )
}
