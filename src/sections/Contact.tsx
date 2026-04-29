/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Contacts
 */
import { SOCIALS } from '../constants';

const Contact = () => {
  return (
    <div className="h-fit w-full flex justify-between items-center gap-3">
        {
            SOCIALS.map((item)=>{
                const Icon = item.icon
                return <a href={item.href} key={item.label} className="flex w-full h-fit py-3 pl-2 justify-start items-center gap-2 border-x border-foreground/10">
                    <div>
                        <Icon />
                    </div>
                    {item.label}
                </a>
            })
        }
    </div>
  )
}

export default Contact