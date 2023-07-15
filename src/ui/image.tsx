'use client'

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    src: string
    [key: string]: any
}

const About = (props: Props) => <motion.img {...props} alt={`props.src + ${Math.random()}`}/>

export default About;
