'use client'
import React, { useContext, useState } from 'react'
import { CursorContext } from './CursorContext'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineMenu } from 'react-icons/ai' 
import MobileNav from './MobileNav'
import Nav from './Nav'
import Socials from './Socials'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from "react-icons/io5";


const Header = () => {
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
    const [mobileNav, setmobileNav] = useState(false)
  
    return (
    <header className='pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent'>
        <div className='bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0'>
            <div className="container mx-auto h-full">
                <div className='flex items-center justify-between h-full'>
                    <motion.div 
                    onMouseEnter={mouseEnterHandler} 
                    onMouseLeave={mouseLeaveHandler} 
                    className='flex flex-col lg:flex-row items-center 
                    h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal'>
                        {/*phone */}
                        <div className='flex items-center gap-2 text-white'>
                            <FaPhoneAlt />
                            <span>+241 80 80 80 80</span>
                        </div>
                        <div className='flex items-center gap-2 text-white'>
                            <IoMail />
                            <span>contact@melchior.com</span>
                        </div>
                    </motion.div>
                    <motion.div onMouseEnter={mouseEnterHandler} 
                    onMouseLeave={mouseLeaveHandler} className='hidden xl:block'>
                        <Socials containerStyle='flex gap-6 text-white' />
                    </motion.div>
                </div>
               
            </div>
        </div>
        <div className='container mx-auto flex items-center justify-between px-6'>
            <motion.div onMouseEnter={mouseEnterHandler} 
                    onMouseLeave={mouseLeaveHandler} >
                <Link href={'/'}>
                    <Image src={'/assets/logo.svg'} 
                    width={120} 
                    height={44} 
                    priority 
                    alt='logo website'/>
                </Link>
            </motion.div>
            <div className='xl:hidden cursor-pointer' 
            onClick={() => setmobileNav(!mobileNav)}>
                <AiOutlineMenu className='text-3xl text-primary'/>
            </div>

            <motion.div 
                initial={{right: '-100%'}}
                animate={{right: mobileNav ? 0 : '-100%'}}
                className='fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-5'>
                <MobileNav setmobileNav={setmobileNav}/>
            </motion.div>
            <motion.div 
                onMouseEnter={mouseEnterHandler} 
                onMouseLeave={mouseLeaveHandler} 
                className='hidden xl:block'>
                <Nav />
            </motion.div>
        </div>
    </header>
  )
}

export default Header