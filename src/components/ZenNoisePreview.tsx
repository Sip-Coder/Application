import { useState } from "react";
import { zenLayers, zenMixLevels, zenMixes } from "../data/site";
import { SiteFrame } from "./SiteFrame";

const layerLabels: Record<(typeof zenLayers)[number], string> = {
  rain: "Rain",
  coffee: "Café",
  fan: "Fan",
  forest: "Forest",
  ocean: "Ocean",
  fire: "Fire"
};

export function ZenNoisePreview() {
  const [playing, setPlaying] = useState(false);
  const [mix, setMix] = useState<(typeof zenMixes)[number]["id"]>("focus");
  const levels = zenMixLevels[mix];

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
        <p className="zen-note">
          {zenMixes.find((item) => item.id === mix)?.layers} · shareable mix links
        </p>
        <div className="layer-list">
          {zenLayers.map((layer) => (
            <div className="layer" key={layer}>
              <span>{layerLabels[layer]}</span>
              <div className="meter" aria-hidden="true">
                <i
                  style={{
                    width: `${levels[layer]}%`,
                    background: "linear-gradient(90deg, #7aa2ff, #c9b6ff)"
                  }}
                />
              </div>
              <span>{levels[layer]}%</span>
            </div>
          ))}
        </div>
        <p className="zen-foot">Generated locally · No data collection</p>
      </div>
    </SiteFrame>
  );
}
