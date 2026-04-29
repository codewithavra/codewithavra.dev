/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Constants
 */
import { NAV_ITEMS } from "../constants";

/**
 * Icons
 */
import { IoMdDownload } from "react-icons/io";

const Menu = () => {
  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 h-fit w-fit border border-foreground/20 z-40 rounded-card bg-background/80 backdrop-blur-xs text-foreground p-8 flex flex-col justify-center items-center gap-2">
        {
            NAV_ITEMS.map((item)=>{
                return <a href={item.href} key={item.label} className="text-foreground/70 flex  justify-start items-center gap-4 border-b w-full border-foreground/20 font-bold text-xl">
                    {item.label}
                </a>
            })
        }
        <a href="/Avranil_Dhar.pdf" download="Avranil_Dhar_Resume.pdf" className="text-xl w-full font-bold text-foreground/70 flex gap-4 items-center justify-start">
        <IoMdDownload />
        <p>Resume</p>
        </a>
    </div>
  )
}

export default Menu