/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */

const Hero = () => {
  return (
    <div className='text-foreground flex h-[210px] sm:h-[250px] md:h-[290px] w-full max-w-3xl items-center justify-center bg-transparent text-4xl font-extrabold sm:text-5xl md:text-7xl border-x bdr-box mx-auto'
    style={{
                    backgroundImage:
                      'radial-gradient(circle at 0.5px 0.5px, oklch(from var(--color-foreground) l c h / 0.2) 0.9px, transparent 0)',
                    backgroundSize: '10px 10px',
                  }}
    >
      <h1>CodeWithAvra</h1>
    </div>
  );
};

export default Hero;
