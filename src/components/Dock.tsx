/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { type Dispatch, type SetStateAction } from 'react';

/**
 * Icons
 */
import { BiMenu } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

/**
 * Type
 */

type prop = {
    menu : boolean,
    setMenu : Dispatch<SetStateAction<boolean>>
}

const Dock = ({ menu,setMenu } : prop) => {
  return (
      <button
        onClick={() => setMenu((prev) => !prev)}
        className='text-foreground border-foreground/20 rounded-box text-large bg-background mx-auto flex size-fit items-center justify-center gap-2 border px-4 py-2 z-50'
      >
        <p>menu</p>
        {!menu ? <BiMenu /> : <RxCross2 />}
      </button>
  );
};

export default Dock;
