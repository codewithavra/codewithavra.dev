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
import { TbWorldWww } from 'react-icons/tb';
const Work = () => {
  const [expand, setExpand] = useState<string[]>([]);
  return (
    <div className='bdr-box mx-auto h-fit w-full max-w-3xl border-x'>
      {PROJECTS.map((item) => {
        return (
          <div
            key={item.id}
            className='bdr-box text-foreground hover:bg-foreground/10 h-fit cursor-pointer border-b'
          >
            <div className='bdr-box flex h-25 w-full items-center justify-between border-b'>
              <div className='bdr-box flex h-full w-fit items-center justify-center border-r px-4 text-2xl'>
                <TbWorldWww />
              </div>
              <div className='flex h-full w-full flex-col items-start justify-center gap-2 p-2 leading-tight tracking-tight whitespace-pre-wrap'>
                <p className='textStyle-heading w-full font-bold'>
                  {item.label}
                </p>
                <p className='textStyle-subHeading inline'>
                  {item.timeline}
                </p>
              </div>
              {item.deployedLink && (
                <a
                  href={item.deployedLink}
                  className='bdr-box flex h-full w-fit items-center justify-center border-l px-3'
                >
                  <LuLink />
                </a>
              )}
              <button
                onClick={() =>
                  setExpand((prev) =>
                    prev.includes(item.label)
                      ? prev.filter((i) => i !== item.label)
                      : [...prev, item.label],
                  )
                }
                className='bdr-box h-full w-fit border-l px-3'
              >
                {!expand.includes(item.label) ? <LuExpand /> : <LuShrink />}
              </button>
            </div>
            <div
              className={`h-fit w-full p-2 leading-tight tracking-tight sm:p-4 ${expand.includes(item.label) ? 'flex flex-col items-center justify-start gap-4' : 'hidden'} `}
            >
              <h3 className='textStyle-heading'>{item.description}</h3>
              <div className='textStyle-heading flex w-full gap-2 font-medium text-blue-500'>
                <a
                  href={item.githubLink}
                  className='bg-foreground/20 rounded-box bdr-box self-start border px-2 py-1'
                >
                  GitHub
                </a>
                {item.deployedLink && (
                  <a
                    href={item.deployedLink}
                    className='bg-foreground/20 rounded-box bdr-box self-start border px-2 py-1'
                  >
                    Live
                  </a>
                )}
              </div>
              <p className='textStyle-subHeading'>
                {item.highlights}
              </p>
              <div className='textStyle-subHeading flex h-fit w-full flex-wrap items-center justify-start gap-3'>
                {item.techStack.map((i, idx) => {
                  return (
                    <div
                      key={idx}
                      className='bg-foreground/10 rounded-box bdr-box border px-2 py-1'
                    >
                      {i}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
