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
import Navbar from "./components/Navbar";
import Break from "./components/Break";
import ProfileCard from './components/ProfileCard';
import Menu from './components/Menu';
import SectionName from './components/SectionName';
import TechStack from './components/TechStack';

/**
 * Sections
*/
import Hero from './sections/Hero';
import Profile from './sections/Profile';
import Contact from './sections/Contact';
import About from './sections/About';
import Footer from './sections/Footer';
import Certifications from './sections/Certifications';

/**
 * Hooks
*/
import useLenis from './hooks/useLenis';

const App = () => {
  useLenis();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="min-h-svh bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <section className="fixed top-2 h-fit w-full border bdr-box z-50">
        <Navbar setOpenMenu={setOpenMenu} />
      </section>
      {/* Hero Section */}
      <section className="mt-12 h-fit w-full border-b bdr-box">
        <Hero />
      </section>
      {/* Profile Section */}
      <section className="h-fit w-full">
        <Profile />
      </section>
      {/* Break */}
      <Break />
      {/* Profilecard Section */}
      <section className="h-fit w-full border-b bdr-box">
        <ProfileCard />
      </section>
      {/* Contact */}
      <section className="h-fit w-full">
      <Contact />
      </section>
      {/* Break */}
      <Break />
      {/* About */}
      <SectionName name={"About"} />
      <section className="h-fit w-full border-b bdr-box">
        <About />
      </section>
      {/* Break */}
      <Break />
      {/* Projecct Section */}
      <SectionName name="My Works" />
      <section className="h-fit w-full border-b bdr-box">
        <About />
      </section>
      {/* TechStack */}
      <SectionName name="Stack" />
      <section className="h-fit w-full">
        <TechStack />
      </section>
      {/* Break */}
      <Break />
      {/* Certification */}
      <SectionName name="Certifications" />
      <section className="h-fit w-full">
        <Certifications />
      </section>
      {/* Break */}
      <Break />
      {/* Menu */}
      {openMenu && <Menu />}
      <Footer />
    </div>

  )
}

export default App