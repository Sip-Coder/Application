type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  if (compact) {
    return (
      <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#143f43" />
        <text x="7" y="27" fill="#fff3cc" fontFamily="Georgia, serif" fontSize="17">
          JY
        </text>
      </svg>
    );
  }

  return (
    <div className="identity-panel">
      <p className="eyebrow">Sip Studies</p>
      <p className="identity-panel__mark">JY</p>
      <p className="identity-panel__role">Builder-educator</p>
      <p className="identity-panel__copy">
        Learning products at the intersection of beverage craft, teaching, and
        AI-assisted software.
      </p>
      <div className="identity-lanes">
        <span>Learn</span>
        <span>Taste</span>
        <span>Connect</span>
      </div>
      <svg className="identity-cup" viewBox="0 0 220 110" aria-hidden="true">
        <path d="M24 48c0 38 28 68 68 68s68-30 68-68H24z" fill="#9fdaf5" />
        <path
          d="M40 12h104c10 0 18 8 18 18v18H22V30c0-10 8-18 18-18z"
          fill="#fff3cc"
        />
        <path
          d="M168 32h18c16 0 28 14 28 30s-12 30-28 30h-18"
          fill="none"
          stroke="#edd4a8"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
