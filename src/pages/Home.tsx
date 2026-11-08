import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Hero from '../components/sections/hero/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/services/Services';
import TechMarquee from '../components/sections/TechMarquee';
import Work from '../components/sections/work/Work';
import Stats from '../components/sections/Stats';
import Process from '../components/sections/Process';
import Philosophy from '../components/sections/Philosophy';
import Contact from '../components/sections/contact/Contact';

export default function Home() {
  useDocumentTitle();
  return <><Hero /><About /><Services /><TechMarquee /><Work /><Stats /><Process /><Philosophy /><Contact /></>;
}
