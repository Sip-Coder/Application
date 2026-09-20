import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";

export default function App() {
  return (
    <div className="page">
      <Hero />
      <p className="kicker">Case studies</p>
      <CaseStudies />
      <p className="kicker">Selected work</p>
      <SelectedWork />
      <Contact />
    </div>
  );
}
