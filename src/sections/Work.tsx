/**
 * @license Apache-2.0
 * @copyright codewithavra
 */
/**
 * Node modules
 */
import { useState } from 'react';

/**
 * Constants
 */
import { PROJECTS } from '../constants';

/**
 * Icons
 */
import { LuExpand, LuLink, LuShrink } from 'react-icons/lu';
import { BiInfinite } from 'react-icons/bi';
import { TbWorldWww } from "react-icons/tb";
const Work = () => {
  const [expand, setExpand] = useState<string[]>([]);
  return (
    <div className='bdr-box mx-auto h-fit w-full max-w-3xl border-x'>
      {PROJECTS.map((item) => {
        return (
          <div key={item.id} className='bdr-box h-fit border-b text-foreground'>
            <div className="w-full h-30 flex justify-between items-center border-b bdr-box">
              <div className="h-full w-fit  px-4 border-r bdr-box flex justify-center items-center text-2xl">
              <TbWorldWww />
              </div>
              <div className="w-full h-full tracking-tight leading-tight flex flex-col justify-center items-start gap-2 p-2 whitespace-pre-wrap">
                <p className="font-bold text-xl sm:text-2xl">{item.label}</p>
                <p className="text-xs sm:text-sm text-foreground/30 inline">{item.timeline} <BiInfinite className="inline text-sm sm:text-md" /></p>
              </div>
              {item.deployedLink && <a href={item.deployedLink} className="px-3 h-full w-fit flex justify-center items-center border-l bdr-box"><LuLink /></a>}
              <button
                onClick={() =>
                  setExpand((prev) =>
                    prev.includes(item.label)
                      ? prev.filter((i) => i !== item.label)
                      : [...prev, item.label],
                  )
                }
                className="h-full w-fit px-3 border-l bdr-box"
              >
                {!expand.includes(item.label) ? (
                  <LuExpand />
                ) : (
                  <LuShrink />
                )}
              </button>
            </div>
            <div
              className={`h-fit w-full p-2 sm:p-4 tracking-tight leading-tight ${expand.includes(item.label) ? 'flex flex-col gap-4 justify-start items-center' : 'hidden'} `}
            >
              <h3 className="text-md sm:text-lg text-foreground/80 font-semibold">{item.description}</h3>
              <div className="w-full flex  gap-2 text-blue-500 font-bold">
              <a href={item.githubLink} className="bg-foreground/20 px-2 py-1 rounded-box border bdr-box self-start">GitHub</a>
              {item.deployedLink && <a href={item.deployedLink} className="bg-foreground/20 px-2 py-1 rounded-box border bdr-box self-start">Live</a>}
              </div>
              <p className="text-xs sm:text-sm md:text-md text-foreground/60 font-medium">{item.highlights}</p>
              <div className=" h-fit w-full flex justify-start items-center gap-3 flex-wrap">
              {
                item.techStack.map((i,idx)=>{
                  return <div key={idx} className="bg-foreground/10 px-2 py-1 rounded-box border bdr-box text-xs sm:text-sm md:text-md">{i}</div>
                })
              }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
