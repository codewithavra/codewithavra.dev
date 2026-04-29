/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { useState } from 'react';
import useLenis from './hooks/useLenis';

/**
 * Components
 */

import Dock from './components/Dock';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import ProfileCard from './components/ProfileCard';

/**
 * Sections
 */
import Hero from './sections/Hero';
import Profile from './sections/Profile';
import Contact from './sections/Contact';
import About from './sections/About';

const App = () => {
  const [menu, setMenu] = useState<boolean>(false);
  useLenis();
  return (
    <div
      className='bg-background min-h-svh overflow-x-hidden overflow-y-auto'
      style={{ fontFamily: '"Inter", sans-serif;' }}
    >
      {/* navbar or dock */}
      <section
        className='border-foreground/10 bg-background fixed top-2 left-0 z-50 h-fit w-full border'
        id='home'
      >
        <div className='border-foreground/10 mx-auto h-full max-w-4xl border-x'>
          <Navbar />
        </div>
        <div className='bg-background/20 fixed bottom-0 z-50 h-fit w-full pb-4 backdrop-blur-[1px] md:hidden'>
          <Dock menu={menu} setMenu={setMenu} />
        </div>
      </section>
      {/* hero section */}
      <section className='border-foreground/10 mt-12 h-[200px] w-full border-b sm:h-[240px] md:h-[280px]'>
        <div className='border-foreground/10 bg-background-fade/20 relative mx-auto h-full max-w-4xl border-x'>
          <div
            className='absolute inset-0 z-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 0.7px 0.7px, oklch(from var(--color-foreground) l c h / 0.2) 0.9px, transparent 0)',
              backgroundSize: '15px 15px',
            }}
          />
          {/* my components */}
          <Hero />
        </div>
      </section>

      {/* Profile */}
      <section className='border-foreground/10 h-[120px] w-full border-b sm:h-[170px] md:h-[200px]'>
        <div className='border-foreground/10 bg-background-fade/20 mx-auto h-full max-w-4xl border-x'>
          <Profile />
        </div>
      </section>
      {/* break section */}
      <section
        className='border-foreground/10 h-7 w-full border-b sm:h-8 md:h-10'
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, 
        color-mix(in oklch, var(--color-foreground) 10%, transparent) 0px, 
        color-mix(in oklch, var(--color-foreground) 5%, transparent) 1px, 
        transparent 6px, 
        transparent 5px)`,
        }}
      />
      <section className='border-foreground/10 h-fit w-full border-b'>
        <div className='border-foreground/10 bg-background-fade/20 mx-auto h-fit max-w-4xl border-x'>
          <ProfileCard />
        </div>
      </section>
      {/* Contact Section */}
      <section
        className='border-foreground/10 h-fit w-full border-b'
        id='contact'
      >
        <div className='bg-background-fade/20 text-foreground mx-auto h-fit max-w-4xl'>
          <Contact />
        </div>
      </section>
      {/* break section */}
      <section
        className='border-foreground/10 h-7 w-full border-b sm:h-8 md:h-10'
        style={{
          backgroundImage: `
      repeating-linear-gradient(-45deg, 
        color-mix(in oklch, var(--color-foreground) 10%, transparent) 0px, 
        color-mix(in oklch, var(--color-foreground) 5%, transparent) 1px, 
        transparent 6px, 
        transparent 5px
      )
    `,
        }}
      />
      {/* About Section */}
      <section
        className='border-foreground/10 h-fit w-full border-b'
        id='about'
      >
        <div className='border-foreground/10 bg-background-fade/20 text-foreground mx-auto flex h-fit max-w-4xl items-center justify-start border-x p-3 text-2xl font-bold'>
          <p>About</p>
        </div>
      </section>
      <section className='border-foreground/10 h-fit w-full border-b'>
        <div className='border-foreground/10 bg-background-fade/20 mx-auto h-fit max-w-4xl border-x'>
          <About />
        </div>
      </section>
      {/* break section */}
      <section
        className='border-foreground/10 h-7 w-full border-b sm:h-8 md:h-10'
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, 
        color-mix(in oklch, var(--color-foreground) 10%, transparent) 0px, 
        color-mix(in oklch, var(--color-foreground) 5%, transparent) 1px, 
        transparent 6px, 
        transparent 5px)`,
        }}
      />
      {/* Menu */}
      {menu && <Menu />}
    </div>
  );
};

export default App;
