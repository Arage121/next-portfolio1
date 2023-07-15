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

  // const skills = [

  //   {
  //     id: 1,
  //     src: "/assets/images/css.png",
  //     title: "HTML",
  //     style: "shadow-blue-500"
  //   },

  //   {
  //     id: 2,
  //     src: "/assets/images/html.png",
  //     title: "CSS",
  //     style: "shadow-orange-500"
  //   },

  //   {
  //     id: 3,
  //     src: "/assets/images/javascript.png",
  //     title: "JavaScript",
  //     style: "shadow-yellow-400"
  //   },

  //   {
  //     id: 4,
  //     src: "/assets/images/react.png",
  //     title: "React",
  //     style: "shadow-cyan-600"
  //   },

  //   {
  //     id: 5,
  //     src: "/assets/images/node.png",
  //     title: "NodeJs",
  //     style: "shadow-[#9ACD32]"
  //   },

  //   {
  //     id: 6,
  //     src: "/assets/images/tailwind.png",
  //     title: "Tailwind",
  //     style: "shadow-sky-400"
  //   },

  //   {
  //     id: 7,
  //     src: "/assets/images/nextjs.png",
  //     title: "Next Js",
  //     style: "shadow-gray-200"
  //   },

  //   {
  //     id: 8,
  //     src: "/assets/images/java.png",
  //     title: "Java",
  //     style: "shadow-orange-400"
  //   },

  //   {
  //     id: 9,
  //     src: "/assets/images/mongodb.png",
  //     title: "MongoDb",
  //     style: "shadow-green-500 hidden sm:block"
  //   }

  // ]

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