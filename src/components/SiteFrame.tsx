import { useRef, type ReactNode } from "react";

type SiteFrameProps = {
  urlLabel: string;
  children: ReactNode;
};

export function SiteFrame({ urlLabel, children }: SiteFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  async function toggleFullscreen() {
    const node = frameRef.current;
    if (!node) return;

    if (document.fullscreenElement === node) {
      await document.exitFullscreen();
      return;
    }

    if (node.requestFullscreen) {
      await node.requestFullscreen();
    }
  }

  return (
    <div className="site-frame" ref={frameRef} data-website-preview>
      <div className="site-frame__bar">
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <strong>{urlLabel}</strong>
        <button type="button" onClick={() => void toggleFullscreen()}>
          Fullscreen
        </button>
      </div>
      <div className="site-frame__screen">{children}</div>
    </div>
  );
}
