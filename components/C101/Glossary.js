import React from "react";

const GoldSilverGlossary = () => {
  const glossaryItems = [
    {
      term: "AISC (All-In Sustaining Cost)",
      definition:
        "The total cost for a mining company to produce one troy ounce of gold, including direct mining costs, royalties, sustaining capital, and corporate overhead. A key metric for evaluating mining profitability. Current industry average: ~$1,350/oz vs spot of $4,728 — record margins.",
    },
    {
      term: "Ask price",
      definition:
        "The price at which dealers are willing to sell. Higher than the bid price. The spread between bid and ask represents the dealer’s margin. Spot price is typically the midpoint between bid and ask.",
    },
    {
      term: "Backwardation",
      definition:
        "When the futures price for a commodity is lower than the current spot price. For gold, backwardation is unusual and signals immediate physical demand exceeding supply. Brief gold backwardation in London (loco gold) in early 2026 was a significant stress indicator.",
    },
    {
      term: "Bid price",
      definition:
        "The price dealers will pay to buy gold from you. Always lower than ask. When selling to a dealer, you receive the bid price.",
    },
    {
      term: "COMEX",
      definition:
        "Commodity Exchange, a division of CME Group. The primary US futures exchange for gold and silver. COMEX warehouse stocks — specifically registered inventory — are closely watched as a physical supply indicator.",
    },
    {
      term: "Contango",
      definition:
        "The normal state of gold futures markets, where futures prices trade above spot price. The premium reflects financing and storage costs. The opposite of backwardation.",
    },
    {
      term: "COT (Commitment of Traders)",
      definition:
        "A weekly CFTC report showing positions held by different categories of market participants in futures markets. For gold and silver investors, managed money net longs are the most watched figure — extreme readings in either direction often precede reversals.",
    },
    {
      term: "Custodian (IRA)",
      definition:
        "An IRS-approved institution that administers a self-directed IRA. For gold IRAs, specialized custodians are required because conventional brokerages don’t handle physical metals. Common custodians: Equity Trust, GoldStar Trust, STRATA Trust.",
    },
    {
      term: "DXY (Dollar Index)",
      definition:
        "A measure of the US dollar’s value against a basket of six major currencies (euro, yen, pound, Canadian dollar, Swedish krona, Swiss franc). Gold has a consistent negative correlation with DXY — when the dollar weakens, gold tends to rise in dollar terms.",
    },
    {
      term: "EFP (Exchange for Physical)",
      definition:
        "A transaction that exchanges a futures position for a physical gold position. The EFP spread between London and COMEX widened dramatically in early 2026, signaling unusual physical demand and triggering large flows of metal from London vaults to US warehouses.",
    },
    {
      term: "Eligible inventory (COMEX)",
      definition:
        "Gold or silver stored in COMEX-approved warehouses that meets delivery standards but hasn’t been registered for futures delivery. Can be converted to registered inventory by the owner.",
    },
    {
      term: "GDX",
      definition:
        "VanEck Gold Miners ETF. Tracks major gold and silver mining companies. Historically moves at roughly 2× the magnitude of gold price changes. Expense ratio: 0.51%.",
    },
    {
      term: "GDXJ",
      definition:
        "VanEck Junior Gold Miners ETF. Smaller and mid-tier miners. Higher leverage to gold price moves than GDX but more volatile.",
    },
    {
      term: "Gold/silver ratio",
      definition:
        "The number of ounces of silver required to buy one ounce of gold. Calculated as: gold spot ÷ silver spot. Currently 64.8x. Historical average approximately 67x. Extremes (125x in 2020) suggest relative value opportunities between the metals.",
    },
    {
      term: "Good Delivery bar",
      definition:
        "A gold bar meeting LBMA standards: 350–430 troy ounces, minimum .995 fineness, produced by an LBMA-accredited refiner, with serial number and assay marks. The standard unit for wholesale gold trading in London.",
    },
    {
      term: "IAU",
      definition:
        "iShares Gold Trust (BlackRock). A physically-backed gold ETF holding allocated gold in vaults. Expense ratio 0.25% — lower than GLD. Generally the better choice for retail buy-and-hold investors.",
    },
    {
      term: "LBMA (London Bullion Market Association)",
      definition:
        "The industry organization overseeing the global OTC gold and silver market. Publishes the twice-daily LBMA Gold Price (AM/PM fix) that serves as the benchmark for physical gold transactions worldwide. Also publishes monthly London vault holdings data.",
    },
    {
      term: "LBMA Gold Price",
      definition:
        "The official benchmark gold price, set by electronic auction twice daily (10:30 am and 3:00 pm London time) administered by ICE Benchmark Administration. Used by miners, refiners, and central banks to settle contracts.",
    },
    {
      term: "Lease rate",
      definition:
        "The interest rate a borrower pays to borrow gold or silver. Under normal conditions, gold lease rates are slightly positive and silver rates are 0.3–0.5%. Spikes in lease rates indicate physical metal is difficult to borrow — silver lease rates reached 8% annualized in early 2026, a severe stress signal.",
    },
    {
      term: "Managed money",
      definition:
        "In CFTC COT terminology, hedge funds and large speculative money managers. Their net positions in gold and silver futures are widely followed as a sentiment indicator. High managed money net longs = crowded trade.",
    },
    {
      term: "Numismatic coins",
      definition:
        "Coins valued for their rarity, condition, or historical significance, not just their metal content. Not eligible for gold IRAs. Premiums are highly subjective and can collapse in downturns. Generally not appropriate as a precious metals investment for most people.",
    },
    {
      term: "PHYS",
      definition:
        "Sprott Physical Gold Trust. A physically-backed gold ETF (technically a closed-end fund) with assets held at the Royal Canadian Mint. Allows large investors to redeem shares for physical gold. Expense ratio 0.35%.",
    },
    {
      term: "Premium (over spot)",
      definition:
        "The amount above the gold spot price that you pay when buying physical gold from a dealer. Covers minting, handling, shipping, and dealer margin. Ranges from ~1% for large bars to 15%+ for small fractional coins.",
    },
    {
      term: "Registered inventory (COMEX)",
      definition:
        "Gold or silver stored in COMEX warehouses that has been assigned a warehouse warrant, making it immediately deliverable against a futures contract. The coverage ratio of registered inventory to outstanding futures contracts is a key physical stress indicator.",
    },
    {
      term: "RGLD",
      definition:
        "Royal Gold Inc. A precious metals royalty company — it provides upfront financing to miners in exchange for a percentage of future production revenue. Lower operational risk than physical mining companies.",
    },
    {
      term: "SDIRA (Self-Directed IRA)",
      definition:
        "An IRA variant that allows alternative assets including physical precious metals, real estate, and private equity. Required for gold IRAs. Must be administered by a specialized custodian.",
    },
    {
      term: "Spot price",
      definition:
        "The theoretical price for immediate delivery of one troy ounce of gold or silver in the wholesale market. Derived from COMEX futures and OTC trading. The price on which all physical transactions are based, before dealer premiums.",
    },
    {
      term: "TIPS (Treasury Inflation-Protected Securities)",
      definition:
        "US government bonds whose principal adjusts with CPI inflation. The 10-year TIPS yield (FRED series DFII10) is a closely watched gold driver — falling real yields are typically bullish for gold.",
    },
    {
      term: "Troy ounce",
      definition:
        "The standard unit for weighing precious metals. 31.1035 grams — approximately 10% heavier than a regular (avoirdupois) ounce. All gold and silver prices are quoted in troy ounces.",
    },
    {
      term: "WGC (World Gold Council)",
      definition:
        "Industry association funded by major gold mining companies. Publishes authoritative annual Gold Demand Trends data, central bank reserve statistics, and ETF flow data via its Goldhub platform. Most gold demand data cited in financial media originates from WGC research.",
    },
    {
      term: "WPM (Wheaton Precious Metals)",
      definition:
        "The world’s largest precious metals streaming company. Rather than mining gold directly, Wheaton provides financing to miners in exchange for the right to buy a portion of their gold (and silver) production at below-market prices. Effective cash costs are far lower than conventional miners.",
    },
  ];

  return (
    <section className="mx-auto py-12 px-6" id="glossary">
      <p className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">
        Section 9
      </p>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-10">
        Gold & Silver Glossary
      </h2>

      <dl className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-12 gap-y-8">
        {glossaryItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <dt className="font-bold text-slate-900 md:pt-1 text-lg md:text-base border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
              {item.term}
            </dt>
            <dd className="text-slate-600 leading-relaxed text-base border-b md:border-b-0 border-slate-100 pb-4 md:pb-0">
              {item.definition}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
};

export default GoldSilverGlossary;
