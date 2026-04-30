/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Contacts
 */
import { SOCIALS } from '../constants';

/**
 * Icons
 */
import { GoArrowUpRight } from 'react-icons/go';

const Contact = () => {
  return (
    <div
      className='mx-auto flex h-fit w-full max-w-3xl items-center justify-between gap-3'
      id='contact'
    >
      {SOCIALS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            href={item.href}
            key={item.label}
            className='border-foreground/10 bg-background-fade flex h-fit w-full items-center justify-between gap-2 border-x px-2 py-3'
          >
            <div className='flex w-fit items-center justify-between gap-3'>
              <div
                className={`hidden text-2xl sm:block ${item.label === 'LinkedIn' ? 'text-blue-600' : 'bg-neutral-950 text-neutral-50'}`}
              >
                <Icon />
              </div>
              <p className='sm:text-md text-sm font-bold'>{item.label}</p>
            </div>
            <GoArrowUpRight className='text-foreground text-2xl' />
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
