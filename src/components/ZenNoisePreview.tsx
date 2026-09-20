import { useState } from "react";
import { zenLayers, zenMixes } from "../data/site";
import { SiteFrame } from "./SiteFrame";

export function ZenNoisePreview() {
  const [playing, setPlaying] = useState(false);
  const [mix, setMix] = useState<(typeof zenMixes)[number]["id"]>("focus");

  return (
    <SiteFrame urlLabel="zen-noise.replit.app">
      <div className="zen-preview">
        <header>
          <span aria-hidden="true">☽</span>
          Zen Noise
        </header>
        <button
          type="button"
          className="zen-orb"
          aria-pressed={playing}
          aria-label={playing ? "Pause mix" : "Play mix"}
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? "❚❚" : "▶"}
        </button>
        <div className="mix-row" role="group" aria-label="Curated mixes">
          {zenMixes.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={mix === item.id}
              onClick={() => setMix(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p style={{ margin: 0, color: "rgba(232,238,245,0.55)", fontSize: "0.82rem" }}>
          {zenMixes.find((item) => item.id === mix)?.layers} · shareable mix links
        </p>
        <div className="layer-list">
          {zenLayers.map((layer) => (
            <div className="layer" key={layer.id}>
              <span>{layer.label}</span>
              <div className="meter" aria-hidden="true">
                <i
                  style={{
                    width: `${mix === "sleep" && layer.id === "rain" ? 70 : layer.level}%`,
                    background: "linear-gradient(90deg, #7aa2ff, #c9b6ff)"
                  }}
                />
              </div>
              <span>{layer.level}%</span>
            </div>
          ))}
        </div>
        <p style={{ margin: 0, color: "rgba(232,238,245,0.28)", fontSize: "0.7rem" }}>
          Generated locally · No data collection
        </p>
      </div>
    </SiteFrame>
  );
}
