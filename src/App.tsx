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
import Hero from './sections/Hero';
import Profile from './sections/Profile';

const App = () => {
  const [menu, setMenu] = useState<boolean>(false);
  useLenis();
  return (
    <div
      className='bg-background min-h-svh w-svw overflow-x-hidden overflow-y-auto'
      style={{ fontFamily: '"Inter", sans-serif;' }}
    >
      {/* navbar or dock */}
      <section
        className='border-foreground/20 mt-2 h-fit w-full border'
        id='#home'
      >
        <div className='border-foreground/20 mx-auto h-full max-w-4xl border-x'>
          <Navbar />
        </div>
        <div className='fixed bottom-0 z-50 h-fit w-full pb-4 backdrop-blur-2xl md:hidden'>
          <Dock menu={menu} setMenu={setMenu} />
        </div>
      </section>
      {/* hero section */}
      <section className='border-foreground/20 h-[200px] w-full border-b sm:h-[240px] md:h-[280px]'>
        <div className='border-foreground/20 bg-background relative mx-auto h-full max-w-4xl border-x'>
          <div
            className='absolute inset-0 z-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, oklch(from var(--color-foreground) l c h / 0.2) 1px, transparent 0)',
              backgroundSize: '15px 15px',
            }}
          />
          {/* my components */}
          <Hero />
        </div>
      </section>

      {/* Profile */}
      <section className='border-foreground/20 h-[120px] w-full border-b sm:h-[170px] md:h-[200px]'>
        <div className='border-foreground/20 bg-background mx-auto h-full max-w-4xl border-x'>
          <Profile />
        </div>
      </section>
      {/* Menu */}
      {menu && <Menu />}
    </div>
  );
};

export default App;
