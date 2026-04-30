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
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const Work = () => {
  const [expand, setExpand] = useState<string[]>(['']);
  return (
    <div className='bdr-box mx-auto h-fit w-full max-w-3xl border-x'>
      {PROJECTS.map((item) => {
        return (
          <div key={item.id} className='bdr-box h-fit border-b'>
            <div className="w-full h-25 flex justify-between items-center">
              <div className="h-full aspect-square">
                
              </div>
              <button
                onClick={() =>
                  setExpand((prev) =>
                    prev.includes(item.label)
                      ? prev.filter((i) => i !== item.label)
                      : [...prev, item.label],
                  )
                }
              >
                {!expand.includes(item.label) ? (
                  <MdExpandMore />
                ) : (
                  <MdExpandLess />
                )}
              </button>
            </div>
            <div
              className={`h-50 w-full border p-2 ${expand.includes(item.label) ? 'flex flex-col' : 'hidden'} `}
            >
              p
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
