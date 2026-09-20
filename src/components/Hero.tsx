import { profile } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <p className="kicker">{profile.name}</p>
      <h1 id="hero-title">Builder-educator for beverage + AI product</h1>
      <p>{profile.summary}</p>
    </section>
  );
}
