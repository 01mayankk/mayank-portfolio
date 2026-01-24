import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';
import SmoothScroll from './components/ui/SmoothScroll';

function App() {
  return (
    <>
      <SmoothScroll />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Timeline />
        <Resume />
        <Contact />
        <CustomCursor />
      </Layout>
    </>
  );
}

export default App;
