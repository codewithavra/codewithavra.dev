/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import { lazy, Suspense, useState } from 'react';

/**
 * Components
 */
import Navbar from './components/Navbar';
import Break from './components/Break';
import ProfileCard from './components/ProfileCard';
import SectionName from './components/SectionName';
import Loader from './components/Loader';

/**
 * Sections
 */
import Hero from './sections/Hero';
import Profile from './sections/Profile';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
/**
 * Hooks
*/
import useLenis from './hooks/useLenis';

/**
 * Constants
 */
import {CERTIFICATES} from "./constants/index"

/**
 * Section
 */

const Menu = lazy(() => import('./components/Menu'));
const TechStack = lazy(() => import('./components/TechStack'));
const GithubCalendar = lazy(() => import('./components/GithubCalendar'));
const About = lazy(() => import('./sections/About'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Work = lazy(() => import('./sections/Work'));
const Globe = lazy(() => import('./sections/Globe'));
const Education = lazy(() => import('./sections/Education'));

const App = () => {
  useLenis();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const lazyFallback = <div className='h-20 w-full' />;
  return (
    <div className='bg-background text-foreground min-h-dvh overflow-hidden no-scrollbar'>
      {/* Loader */}
      <Loader />
      {/* Navbar */}
      <section className='bdr-box fixed top-0 z-40 h-fit w-full border-b border-x'>
        <Navbar setOpenMenu={setOpenMenu} />
      </section>
      {/* Hero Section */}
      <section className='bdr-box mt-10 h-fit w-full border-b scroll-mt-20' id="home" >
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
        <Suspense fallback={lazyFallback}>
          <About />
        </Suspense>
      </section>
      {/* Where do i live */}
      <SectionName name={'Where do I live?'} />
      <section className='bdr-box h-fit w-full border-b'>
        <Suspense fallback={lazyFallback}>
          <Globe />
        </Suspense>
      </section>
      {/* Education */}
      <SectionName name={'Education'} id="education"/>
      <section className='bdr-box h-fit w-full border-b'>
        <Suspense fallback={lazyFallback}>
          <Education />
        </Suspense>
      </section>
      {/* Break */}
      <Break />
      
      {/* Projecct Section */}
      <SectionName name='My Works' count={4} id='work'/>
      <section className='bdr-box h-fit w-full border-b'>
        <Suspense fallback={lazyFallback}>
          <Work />
        </Suspense>
      </section>
      {/* Github Activity */}
      <SectionName name="GitHub Activity 2026" />
      <section className='bdr-box h-fit w-full border-b'>
        <Suspense fallback={lazyFallback}>
          <GithubCalendar />
        </Suspense>
      </section>
      {/* TechStack */}
      <SectionName name='Stack' />
      <section className='h-fit w-full'>
        <Suspense fallback={lazyFallback}>
          <TechStack />
        </Suspense>
      </section>
      {/* Break */}
      <Break />
      {/* Certification */}
      <SectionName name='Certifications' id='certifications' count={CERTIFICATES.length}/>
      <section className='h-fit w-full'>
        <Suspense fallback={lazyFallback}>
          <Certifications />
        </Suspense>
      </section>
      {/* Break */}
      <Break />
      {/* Menu */}
      {openMenu && (
        <Suspense fallback={null}>
          <Menu />
        </Suspense>
      )}
      <Footer />
    </div>
  );
};

export default App;
