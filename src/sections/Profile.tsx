/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Compoenents
 */
import TextArray from '../components/TextArray';
/**
 * Icons
 */
import { MdVerified } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className='bdr-box mx-auto flex h-[120px] max-w-3xl items-center border-x sm:h-[170px] md:h-[220px]'>
      {/* profile picture */}
      <div className='bdr-box aspect-square h-full border-r'>
        <div className='bdr-box flex size-full items-center p-1'>
          <img
            src='/pfp.webp'
            alt='pfp'
            className='bdr-box rounded-full border-3 duration-150 ease-in hover:border-yellow-500/70'
            fetchPriority='high'
            decoding='async'
          />
        </div>
      </div>
      <div className='flex h-full w-full flex-col'>
        <div className='bdr-box text-foreground/30 flex h-[50%] w-full flex-col justify-end border-b pb-2 pl-2 font-mono text-xs sm:pb-3 sm:pl-3 md:pb-4 md:pl-4'>
          <p>
            Made with <FaHeart className='inline text-red-500' /> by
            codewithavra
          </p>
        </div>
        <div className='text-foreground bdr-box flex h-[25%] w-full items-center justify-start gap-3 border-b pl-2 text-xl font-medium sm:pl-3 sm:text-2xl md:pl-4 md:text-3xl'>
          <h2 className='flex h-full items-center justify-center font-bold'>
            Avranil Dhar
          </h2>
          <MdVerified className='text-blue-500' />
        </div>
        <div className='h-[25%] w-full'>
          <TextArray
            items={[
              'Engineering Student',
              'Pre-Final Year Student',
              'Full Stack Developer',
              'React Developer',
              'Node.js Developer',
              'NPTEL Top 1% Achiever',
              'Building cool stuff',
              'This too shall pass',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
