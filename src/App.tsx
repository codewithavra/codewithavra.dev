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

const App = () => {
  const [menu, setMenu] = useState<boolean>(false);
  useLenis();
  return (
    <div className='bg-background min-h-svh'>
      {/* navbar or dock */}
      <section className='border-foreground/20 mt-2 min-h-10 border'>
        <div>
          <Navbar />
        </div>
        <div className='fixed bottom-0 h-fit w-full pb-4 backdrop-blur-2xl z-50'>
          <Dock  menu={menu} setMenu={setMenu}/>
        </div>
      </section>
      { menu && <Menu />}
    </div>
  );
};

export default App;
