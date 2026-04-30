/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { AnimatePresence, motion, type Variants } from 'motion/react';

const Loader = () => {
  const anim = (variants: Variants, custom: number) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants,
      custom,
    };
  };
  const curtainEffect = {
    initial: {
      top: '0%',
    },
    enter: (i: number) => ({
      top: '100%',
      transition: {
        duration: 0.6,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i: number) => ({
      height: '100%',
      transition: {
        duration: 0.9,
        delay: 0.05 * i,
      },
    }),
  };
  const col = 5;
  return (
    <div className='fixed inset-0 z-50 flex h-screen w-screen pointer-events-none'>
      <AnimatePresence>
        {[...Array(6)].map((_, i) => {
          return (
            <motion.div
              key={i}
              className='bdr-box bg-foreground border relative flex flex-1 min-h-0'
              {...anim(curtainEffect, col-i)}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
