import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { SelectedWork } from "./components/SelectedWork";

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <SelectedWork />
        <Contact />
      </main>
      <footer className="wrap page-foot">
        <span>Jonathan Yu — builder-educator for beverage + AI product</span>
        <span>Vite · React · TypeScript</span>
      </footer>
    </div>
  );
}
