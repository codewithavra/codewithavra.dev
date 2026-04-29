/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Compoenents
 */
import TextArray from '../components/TextArray';

const Profile = () => {
  return (
    <div className='flex size-full items-center'>
      {/* profile picture */}
      <div className='border-foreground/10 bg-background-fade/20 aspect-square h-full border-r'>
        <div className='border-foreground/10 flex size-full items-center p-1'>
          <img
            src='/pfp.jpg'
            alt='pfp'
            className='border-foreground/40 rounded-full border-3 hover:border-yellow-500'
          />
        </div>
      </div>
      <div className='flex h-full w-full flex-col'>
        <div className='border-foreground/10 bg-background-fade/20 h-[50%] w-full border-b'></div>
        <div className='text-foreground border-foreground/10 bg-background-fade/20 h-[25%] w-full border-b pl-2 text-xl font-medium sm:text-2xl md:text-3xl'>
          <h2 className='font-bold'>Avranil Dhar</h2>
        </div>
        <div className='bg-background-fade/20 h-[25%] w-full'>
          <TextArray
            items={[
              'Engineering Student',
              'Pre-Final Year Student',
              'This too shall pass',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
