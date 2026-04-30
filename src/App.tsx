/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { useState } from 'react';

/**
 * Components
 */
import Navbar from './components/Navbar';
import Break from './components/Break';
import ProfileCard from './components/ProfileCard';
import Menu from './components/Menu';
import SectionName from './components/SectionName';
import TechStack from './components/TechStack';
import GithubCalendar from './components/GithubCalendar';

/**
 * Sections
 */
import Hero from './sections/Hero';
import Profile from './sections/Profile';
import Contact from './sections/Contact';
import About from './sections/About';
import Footer from './sections/Footer';
import Certifications from './sections/Certifications';
import Work from './sections/Work';
import Globe from './sections/Globe';

/**
 * Hooks
 */
import useLenis from './hooks/useLenis';

const App = () => {
  useLenis();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className='bg-background text-foreground min-h-dvh overflow-hidden no-scrollbar'>
      {/* Navbar */}
      <section className='bdr-box fixed top-2 z-50 h-fit w-full border'>
        <Navbar setOpenMenu={setOpenMenu} />
      </section>
      {/* Hero Section */}
      <section className='bdr-box mt-12 h-fit w-full border-b scroll-mt-20' id="home" >
        <Hero />
      </section>
      {/* Profile Section */}
      <section className='h-fit w-full'>
        <Profile />
      </section>
      {/* Break */}
      <Break />
      {/* Profilecard Section */}
      <section className='bdr-box h-fit w-full border-b'>
        <ProfileCard />
      </section>
      {/* Contact */}
      <section className='h-fit w-full scroll-mt-20' id="contact">
        <Contact />
      </section>
      {/* Break */}
      <Break />
      {/* About */}
      <SectionName name={'About Me'} id='about' />
      <section className='bdr-box h-fit w-full border-b '>
        <About />
      </section>
      {/* Where do i live */}
      <SectionName name={'Where do I live?'} />
      <section className='bdr-box h-fit w-full border-b'>
        <Globe />
      </section>
      {/* Education */}
      <SectionName name={'Education'}/>
      <section className='bdr-box h-fit w-full border-b'>
        <About />
      </section>
      {/* Break */}
      <Break />
      
      {/* Projecct Section */}
      <SectionName name='My Works' count={4} id='work'/>
      <section className='bdr-box h-fit w-full border-b'>
        <Work />
      </section>
      {/* Github Activity */}
      <SectionName name="GitHub Activity 2026" />
      <section className='bdr-box h-fit w-full border-b'>
        <GithubCalendar />
      </section>
      {/* TechStack */}
      <SectionName name='Stack' />
      <section className='h-fit w-full'>
        <TechStack />
      </section>
      {/* Break */}
      <Break />
      {/* Certification */}
      <SectionName name='Certifications' id='certifications' count={5}/>
      <section className='h-fit w-full'>
        <Certifications />
      </section>
      {/* Break */}
      <Break />
      {/* Menu */}
      {openMenu && <Menu />}
      <Footer />
    </div>
  );
};

export default App;
