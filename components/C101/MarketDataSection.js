import React from "react";
import * as style from "./styles.js";

const MarketDataSection = () => {
  return (
    <section className="sec prose" id="reading-data" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Section 7
      </p>
      <h2 style={style.secH2}>How to Read the Market Data</h2>

      <p style={style.proseP}>
        Our{" "}
        <a href="/data/" style={style.proseA}>
          Data page
        </a>{" "}
        aggregates 42 data sources in one place. Here&rsquo;s how to interpret
        the most important signals.
      </p>

      <h3 style={style.proseH3}>COMEX warehouse inventory</h3>

      <p style={style.proseP}>
        COMEX (Commodity Exchange) is the primary US futures exchange for gold
        and silver. It maintains approved warehouses across the US where
        physical metal is stored to back futures contracts. Every business day,
        CME Group publishes a breakdown of this inventory in two categories:{" "}
        <strong style={style.prosePStrong}>registered</strong> (metal that has
        been assigned a warrant and is immediately deliverable against a futures
        contract) and <strong style={style.prosePStrong}>eligible</strong>{" "}
        (metal stored in the warehouse that meets delivery standards but
        hasn&rsquo;t been registered yet).
      </p>

      <p style={style.proseP}>
        Registered inventory matters most. When it falls sharply, it indicates
        that physical demand is tightening &mdash; fewer ounces are available to
        satisfy potential futures delivery demand. When it rises, conditions are
        comfortable. In early 2026, COMEX gold registered inventory surged from
        roughly 8 million troy oz to over 33 million oz as traders moved metal
        from London to New York ahead of potential tariffs. That&rsquo;s a
        signal worth watching: when the geography of physical gold flows
        changes, it usually reflects stress or policy anxiety somewhere.
      </p>

      <p style={style.proseP}>
        For silver, the picture is more concerning. Registered silver is
        approximately 82 million oz against outstanding futures contracts
        representing roughly 576 million oz in claims. The coverage ratio of
        13.4% is below the 15% threshold historically associated with stress
        conditions. The COMEX Silver Stress Index (our composite measure) was
        62/100 in April 2026.
      </p>

      <h3 style={style.proseH3}>COT (Commitment of Traders) report</h3>

      <p style={style.proseP}>
        The CFTC publishes the Commitment of Traders report every Friday,
        showing how large market participants are positioned in gold and silver
        futures as of the previous Tuesday. The most useful figure for investors
        is <strong style={style.prosePStrong}>managed money net longs</strong>{" "}
        &mdash; the net position of hedge funds and large speculators.
      </p>

      <p style={style.proseP}>
        When managed money net longs are at multi-year highs, the trade is
        crowded. If sentiment turns, those positions unwind quickly and prices
        fall fast. When managed money is near zero or net short, contrarian
        bulls pay attention &mdash; historically this has often preceded price
        recoveries. The commercial hedger positioning (miners and producers
        hedging future production) is the inverse signal: extreme commercial net
        shorts suggest the industry is locking in high prices, which confirms
        that current spot levels are elevated in their assessment.
      </p>

      <h3 style={style.proseH3}>ETF flows as an institutional demand signal</h3>

      <p style={style.proseP}>
        When GLD or SLV holdings rise over time, it means institutional money is
        entering the market. When they fall, it means institutional money is
        exiting. ETF holdings aren&rsquo;t a leading indicator &mdash; they
        follow price, not predict it &mdash; but sustained inflows alongside
        price appreciation indicate durable demand rather than a speculative
        spike. The 2021&ndash;2024 period saw sustained ETF outflows despite
        rising prices; the demand was being driven by central banks. The 2025
        reversal to massive ETF inflows (437 tonnes of net buying in North
        America alone) confirmed that institutional participation had returned.
      </p>

      <div className="data-banner" style={style.dataBanner}>
        <div className="db-left" style={style.dbLeft}>
          <p className="db-label" style={style.dbLabel}>
            Live data
          </p>
          <p className="db-title" style={style.dbTitle}>
            COMEX inventory, COT charts, ETF flows &amp; more
          </p>
          <p className="db-sub" style={style.dbSub}>
            Updated daily &middot; 42 free sources &middot; Silver stress index
            &middot; LBMA vault data
          </p>
        </div>
        <a href="/data/" className="db-btn" style={style.dbBtn}>
          View Data Page &rarr;
        </a>
      </div>
    </section>
  );
};

export default MarketDataSection;
