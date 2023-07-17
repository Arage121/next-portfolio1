'use client'

import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  id: number;
  src: string;
  title: string;
  style: string;
};

type Props = {
  skills: Skill[]
  directionLeft?: boolean
};

const Skill = ({ skills ,directionLeft }: Props) => {


  return (
    <motion.div
    initial={{
      x:directionLeft ? -200 : 200,
      opacity: 0,
    }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center mt-24 p-8'>
       {
        skills.map(({id, src, title})=>(
          <div key={id} className={`shadow-md hover:scale-105 duration-500 px-10 sm:px-12 py-4 sm:py-2 xl:px-20 rounded-lg shadow-[#64ffda]/30`}>
            <img src={src} alt='' className='w-20 mx-auto sm:p-1'/>
            <p className='mt-3 text-[#dcfbf4] hidden sm:block'>{title}</p>
          </div>
          ))
        }
    </motion.div>
  )
}

export default Skill;