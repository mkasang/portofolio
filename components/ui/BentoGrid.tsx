'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Flutter", "Dart", "Firebase"];
  const rightLists = ["Mysql", "NodeJS"];

  const [copied, setCoped] = useState(false);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4", className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-radient(90deg, rgba(a,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id == 6} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            < img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover')}
            />
          )

          }
        </div>
        <div className={`absolute right-0 -bottom-5 ${id == 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            < img
              src={spareImg}
              alt={spareImg}
              className={cn('object-cover, object-center w-full h-full')}
            />
          )

          }
        </div>
        {
          id == 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z50 flex items-center justify-center text-white font-bold"></div>
            </BackgroundGradientAnimation>
          )
        }
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 realtive md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id == 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
