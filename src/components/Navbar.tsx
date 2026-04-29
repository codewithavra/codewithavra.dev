/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

import ThemeToggle from "./ThemeToggle";

/**
 * Node modules
 */


const Navbar = () => {
  return (
    <div className="size-full flex justify-between items-center p-1 h-fit">
      <div className="w-auto"></div>
      <div className="w-fit">
      <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar