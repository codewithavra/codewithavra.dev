/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import type { Dispatch, SetStateAction } from 'react';

/**
 * Compoents
 */
import ThemeToggle from './ThemeToggle';

/**
 * Constants
 */
import { NAV_ITEMS } from '../constants';
/**
 * Icons
 */
import { MdMenu } from 'react-icons/md';
import { BiDownload } from 'react-icons/bi';

/**
 * Prop
 */

type prop = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({  setOpenMenu }: prop) => {
  return (
    <div className='bdr-box mx-auto flex h-fit min-h-10 w-full max-w-3xl items-center justify-end gap-2 border-x p-2 tracking-tight sm:min-h-11 md:min-h-12 bg-background/70 backdrop-blur-xs  sm:backdrop-blur-sm'>
      <div className='hidden w-full justify-end gap-2 sm:flex sm:gap-3 sm:items-center border-r bdr-box px-2'>
        {NAV_ITEMS.map((item) => {
          return (
            <a href={item.href} key={item.label} className='textStyle-heading hover:text-blue-400 hover:duration-100 hover:ease-in-out'>
              {item.label}
            </a>
          );
        })}
        <a className="size-fit flex gap-2 items-center bg-foreground/10 py-2 px-3 rounded-box hover:bg-foreground/20" href="/Avranil_Dhar.pdf" download="Avrainil_Dhar_Resume.pdf">
          <p>Resume</p>
          <BiDownload />
        </a>
      </div>
      <div className='flex items-center justify-center rounded-md bg-foreground/10 p-2 text-xl sm:hidden'>
        <button onClick={()=>setOpenMenu(prev=>!prev)}>
          <MdMenu />
        </button>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
