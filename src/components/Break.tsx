/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

const Break = () => {
  return (
    <section
      className='h-6 w-full sm:h-7 md:h-8 border-y bdr-box bg-background'
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, 
                color-mix(in oklch, var(--color-foreground) 10%, transparent) 0px, 
                color-mix(in oklch, var(--color-foreground) 5%, transparent) 1px, 
                transparent 6px, 
                transparent 5px)`,
      }}
    />
  );
};

export default Break;
