'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/ui';
import { Loading, Error } from "@/ui";
import fetchData from '@/utils/getSkillsData';
import { useQuery } from "react-query";

type Props = {};

const Skills = (props: Props) => {
  const { data, isLoading, isFetching, error, isError } = useQuery(
    "skills-data",
    fetchData
  );

  const skills: any = data ?? [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='flex relative flex-col md:text-left xl:flex-row min-h-screen
    max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 text-2xl font-bold  text-[#ccd6f6]'> / skills</h3>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
      <div>
        <Skill skills={skills} />
      </div>
      )}
    </motion.div>
  )
}

export default Skills;