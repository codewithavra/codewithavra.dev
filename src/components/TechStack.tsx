/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Constants
 */
import { TECH_STACK } from '../constants';
import { SkillIcon } from './SkillIcon';

const TechStack = () => {
  return (
    <div className='bdr-box mx-auto h-fit max-w-3xl overflow-x-hidden border-x p-2 md:p-3'>
      {TECH_STACK.map((item) => {
        return (
          <div key={item.label} className="flex flex-col gap-2 p-2 font-mono text-sm sm:text-md">
            <p>{item.label}</p>
            <div className='flex flex-wrap gap-2'>
              {item.items.map((i) => {
                return (
                  <div
                    key={i.name}
                    className='bg-foreground/10 flex w-fit items-center justify-center gap-1 rounded-md px-2 py-1 text-xs'
                  >
                    <SkillIcon icon={i.icon} key={i.name} />
                    {i.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
