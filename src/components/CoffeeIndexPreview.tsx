import { coffeeMarkets } from "../data/site";
import { SiteFrame } from "./SiteFrame";

const nationalAverage = 3.5;
const maxPrice = Math.max(...coffeeMarkets.map((market) => market.price));

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(value);
}

function indexFor(price: number) {
  return Math.round((price / nationalAverage) * 100);
}

export function CoffeeIndexPreview() {
  const ranked = [...coffeeMarkets].sort((a, b) => b.price - a.price);

  return (
    <SiteFrame urlLabel="coffee-index · localhost preview">
      <div className="coffee-preview">
        <div className="coffee-preview__hero">
          <div>
            <span className="coffee-eyebrow">Coffee Index / United States</span>
            <h4>What a solo espresso costs.</h4>
            <p>
              Modeled cafe prices against a {money(nationalAverage)} national
              baseline. Index 100 = baseline.
            </p>
          </div>
          <div className="coffee-hero-card">
            <span>National baseline</span>
            <b>{money(nationalAverage)}</b>
            <span>solo espresso</span>
          </div>
        </div>
        <div className="coffee-list">
          {ranked.slice(0, 7).map((market) => (
            <div className="coffee-row" key={market.city}>
              <strong>
                {market.city}
                <div style={{ fontWeight: 500, color: "#7c6658", fontSize: "0.75rem" }}>
                  {market.region}
                </div>
              </strong>
              <div className="meter" aria-hidden="true">
                <i style={{ width: `${(market.price / maxPrice) * 100}%` }} />
              </div>
              <span>
                {money(market.price)} · {indexFor(market.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SiteFrame>
  );
}
