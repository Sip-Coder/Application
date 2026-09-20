import { useState } from "react";
import { SiteFrame } from "./SiteFrame";

const lanes = [
  {
    id: "learn",
    label: "Learn",
    title: "Sip Academy",
    copy: "Structured beverage study, quizzes, maps, and Sippy as Pocket Educator."
  },
  {
    id: "taste",
    label: "Taste",
    title: "Flavor practice",
    copy: "Flavor wheel, tasting journal, and the intimate flavor blog."
  },
  {
    id: "connect",
    label: "Connect",
    title: "Community + water",
    copy: "Events, GPTs for service, and a mission for clean, accessible water."
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
              A beverage education hub: Sip Studies curriculum, Sippy GPTs, a flavor
              blog, community, and a water-access mission — built as a Vite React
              TypeScript SPA.
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
