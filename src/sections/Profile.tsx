/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

const Profile = () => {
  return (
    <div className='flex size-full items-center'>
      {/* profile picture */}
      <div className='border-foreground/20 aspect-square h-full border-r'>
        <div className='border-foreground flex size-full items-center p-1'>
          <img
            src='/pfp.jpg'
            alt='pfp'
            className='border-foreground/40 rounded-full border-3 hover:border-yellow-500'
          />
        </div>
      </div>
      <div className='flex h-full w-full flex-col'>
        <div className='border-foreground/20 h-[50%] w-full border-b'></div>
        <div className='text-foreground border-foreground/20 h-[25%] w-full border-b text-xl font-medium sm:text-2xl md:text-3xl pl-2'>
          <h2>Avranil Dhar</h2>
        </div>
        <div className='h-[25%] w-full'>
            
        </div>
      </div>
    </div>
  );
};

export default Profile;
