/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node Modules
 */
import { useEffect, useState } from 'react';
/**
 * Iocns
 */
import { BiCode } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import {  GrLocation } from 'react-icons/gr';
import { IoMaleSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { RiVercelFill } from 'react-icons/ri';

const ProfileCard = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const kolkataTime = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(kolkataTime);
    };

    update(); // run immediately
    const interval = setInterval(update, 1000); // update every second
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='grid h-fit w-full grid-cols-2 grid-rows-1 p-4'>
      {/* left box */}
      <div className='text-foreground/80 md:text-md col-span-1 row-span-1 flex flex-col gap-3 font-mono text-xs sm:text-sm lg:text-lg'>
        {/* item */}
        <div className='flex w-full items-center gap-2'>
          <div className='md:text-md border-foreground/20 bg-foreground/10 rounded-md border p-1 font-mono text-xs sm:text-sm lg:text-lg'>
            <BiCode />
          </div>
          <p>Intern @ShadowFox</p>
        </div>
        {/* item */}
        <div className='flex w-full items-center gap-2'>
          <div className='md:text-md border-foreground/20 bg-foreground/10 rounded-md border p-1 font-mono text-xs sm:text-sm lg:text-lg'>
            <GrLocation />
          </div>
          <a href='https://maps.app.goo.gl/Ufj3shyRLV2pomBq7'>Kolkata, India</a>
        </div>
        {/* item */}
        <div className='flex w-full items-center gap-2'>
          <div className='md:text-md border-foreground/20 bg-foreground/10 rounded-md border p-1 font-mono text-xs sm:text-sm lg:text-lg'>
            <RiVercelFill />
          </div>
          <a href='https://codewithavra.vercel.app'>codewithavra</a>
        </div>
      </div>
      <div className='text-foreground/80 md:text-md col-span-1 row-span-1 flex flex-col gap-3 font-mono text-xs sm:text-sm lg:text-lg'>
        {/* item */}
        <div className='flex w-full items-center gap-2'>
          <div className='md:text-md border-foreground/20 bg-foreground/10 rounded-md border p-1 font-mono text-xs sm:text-sm lg:text-lg'>
            <BsClock />
          </div>
          <p>{time}</p>
        </div>
        {/* item */}
        <div className='flex w-full items-center gap-2'>
          <div className='md:text-md border-foreground/20 bg-foreground/10 rounded-md border p-1 font-mono text-xs sm:text-sm lg:text-lg'>
            <MdEmail />
          </div>
          <a href="mailto:avranildhar@gmail.com">avranildhar@gmail.com</a>
        </div>
        {/* item */}
        <div className='flex w-full items-center gap-2'>
          <div className='md:text-md border-foreground/20 bg-foreground/10 rounded-md border p-1 font-mono text-xs sm:text-sm lg:text-lg'>
            <IoMaleSharp />
          </div>
          <p>He/Him</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
