import { useState } from "react";
import { SiteFrame } from "./SiteFrame";

const lanes = [
  {
    id: "learn",
    label: "Learn",
    title: "Learn",
    copy: "Studying beverage education in a Vite/React/TS SPA."
  },
  {
    id: "taste",
    label: "Taste",
    title: "Taste",
    copy: "Exploring flavor through the live product."
  },
  {
    id: "connect",
    label: "Connect",
    title: "Connect",
    copy: "Community around tasting, teaching, and learning."
  }
] as const;

export function SipopediaPreview() {
  const [tab, setTab] = useState<"live" | "map">("map");

  return (
    <SiteFrame urlLabel="sipopedia.com">
      <div className="tabs" role="tablist" aria-label="Sipopedia preview mode">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "live"}
          onClick={() => setTab("live")}
        >
          Live site
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "map"}
          onClick={() => setTab("map")}
        >
          Product map
        </button>
      </div>
      {tab === "live" ? (
        <iframe
          title="Sipopedia.com live preview"
          src="https://sipopedia.com/"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="sip-map">
          <div>
            <span className="eyebrow">Sip Studies</span>
            <h4>Learn. Taste. Connect.</h4>
            <p>
              Learn / Taste / Connect beverage education SPA (Vite/React/TS). Live
              product for studying, exploring flavor, and community.
            </p>
          </div>
          <div className="lane-grid">
            {lanes.map((lane) => (
              <article className="lane" key={lane.id}>
                <span>{lane.label}</span>
                <strong>{lane.title}</strong>
                <p>{lane.copy}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </SiteFrame>
  );
}
