"use client";

import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/ui";
import { useQuery } from "react-query";
import { Loading, Error } from "@/ui";
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai'
import fetchData from "@/utils/getProjectData";


type Props = {};


const Projects = (props: Props) => {
  const { data, isLoading, isFetching, error, isError } = useQuery(
    "project-data",
    fetchData
  );

  const project: any = data ?? [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col 
     max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 text-2xl font-bold  text-[#ccd6f6]">
        {" "}
        / projects
      </h3>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#0f1c2e] scrollbar-thumb-[#64ffda]/80">
          {project.length > 0
            ? project.map((item: any, index: number) => (
                <div
                  key={item._id + index.toString()}
                  className="w-screen flex-shrink-0 snap-center flex flex-col xl:flex-row items-center justify-center mt-16 md:p-44 h-screen"
                >
                  <Image
                    initial={{
                      y: -300,
                      opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src={item.src}
                    alt="none"
                    className="xl:h-[315px] xl:w-[38vw] h-[185px] w-[19.5rem] sm:w-96 xl:mb-0 xl:mr-4 mb-4 rounded-md shadow-lg shadow-black/30"
                  />
                <div className=" xl:w-72 w-[19.5rem] sm:w-96 xl:h-[320px] h-[215px] flex flex-col items-center bg-[#0f1c2e]/60 p-7 xl:p-10 xl:px-4 rounded-lg xl:rounded-2xl xl:hover:bg-[#0f1c2e]/70 lg:hover:mb-4 lg:hover:duration-300 shadow-lg shadow-black/30">
                  <div className="flex xl:gap-5 gap-8 items-center xl:mt-[-12px]">
                    <a
                      target="_blank"
                      href={item.clink}
                      className="text-[26px] text-[#64ffda] flex items-center"
                    >
                      <AiFillGithub />
                    </a>
                    <p className="text-[13px] sm:text-[15px] font-semibold">{item.skills}</p>
                    <a
                      target="_blank"
                      href={item.dlink}
                      className="text-3xl text-[#64ffda] flex items-center"
                    >
                      <MdOutlineDriveFolderUpload />
                    </a>
                  </div>

                  <div className="space-y-10 px-4 max-w-6xl overflow-y-scroll scrollbar-thin scrollbar-track-[#0f1c2e]/60 mt-4 scrollbar-thumb-[#64ffda]/80">
                    <h4 className="text-xl sm:text-[1.40rem] font-semibold text-left mb-[-1em] xl:mb-[-25px] text-[#ccd6f6]">
                      <span className="underline decoration-[#64ffda]/50 text-[#ccd6f6]">
                      {` ${item.name}`}
                      </span>  
                    </h4>

                    <p className="text-sm text-left xl:text-[14px] text-[#8892b0]">
                      {item.desc}
                    </p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
      <div className="w-full absolute top-[30%] bg-[#64ffda]/20 left-0 h-[340px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
