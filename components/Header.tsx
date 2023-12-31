"use client";
import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';


type Props = {};

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
        className='flex flex-row items-center'>
        <SocialIcon url='https://github.com/CirciumaruRaul' fgColor='#9400d3' bgColor='rgb(36,36,36)' />
        <SocialIcon url='https://www.instagram.com/raulmarian1106/' fgColor='#9400d3' bgColor='rgb(36,36,36)' />
        <SocialIcon url='https://www.linkedin.com/in/raul-marian-circiumaru-098a01223/' fgColor='#9400d3' bgColor='rgb(36,36,36)' />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate = {{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          duration: 1
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2">
          <SocialIcon 
          url = '#contact'
          network='email'
          fgColor='#9400d3' bgColor='rgb(36,36,36)'/> 
          <Link href='#contact'>
        <p className="uppercase hidden md:inline-flex text-sm text-[#9400d3]">Get In Touch</p>
      </Link>
      </motion.div>
      
    </header>
  )
}