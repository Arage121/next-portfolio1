'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='w-full sticky top-0 p-5 flex justify-between max-w-6xl mx-auto z-20 xl:items-center'>
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
          duration: 0.8
        }}
        className='flex flex-row items-center'> 
        <a href='#home'>
        <h1 className='text-xl capitalize p-4 lg:text-2xl text-[#64ffda] font-bold'>Ayush Raj</h1></a>
        </motion.div>
        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.8
        }}
        className='flex flex-row items-center'>
        <SocialIcon bgColor='transparent' fgColor='gray' url="https://www.linkedin.com/in/ayush-raj74/" target='_blank'/>
        <SocialIcon bgColor='transparent' fgColor='gray' url="https://github.com/Arage121" target='_blank' />
        <SocialIcon bgColor='transparent' fgColor='gray' url="https://mailto:rajayush@gmail.com" target='_blank' />
        </motion.div>
    </header>
  )
};

export default Header;