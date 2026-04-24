import React from "react";
import * as style from "./styles.js";

const GoldBasicsSection = () => {
  return (
    <section style={style.sec} id="what-is-gold">
      <p style={style.secLabel}>Section 1</p>
      <h2 style={style.secH2}>
        What Gold Actually Is &mdash; and Why People Own It
      </h2>

      <p style={style.proseP}>
        Gold is a chemical element, atomic number 79. It&rsquo;s dense,
        corrosion-resistant, and conducts electricity. Most of its physical
        properties are beside the investment point, but one matters enormously:
        it doesn&rsquo;t rust, tarnish, or degrade. A gold coin buried for two
        thousand years looks essentially the same when unearthed. That
        permanence is the whole thesis.
      </p>

      <p style={style.proseP}>
        Gold&rsquo;s monetary history predates written records. By the time the
        Lydians started minting standardized coins around 600 BC, gold had
        already been functioning as a store of value and medium of exchange for
        millennia. The modern gold standard &mdash; where currencies were
        convertible into fixed amounts of gold &mdash; collapsed for good in
        1971 when Nixon severed the dollar&rsquo;s last gold link. That
        decision, which was supposed to be temporary, has proven permanent.
        Since then, gold has traded freely, and its price has risen from $35 per
        ounce to $4,728 today.
      </p>

      <p style={style.proseP}>
        That&rsquo;s not a coincidence. Gold re-priced to reflect the loss of
        dollar backing, and it has continued rising as the dollar has been
        inflated. The amount of US dollars in existence (M2 money supply) grew
        from roughly $600 billion in 1971 to over $21 trillion today. Gold has
        roughly kept pace with that monetary expansion, which is precisely the
        point.
      </p>

      <h3 style={style.secH3}>The three reasons investors own gold</h3>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Store of value.</strong> This is the
        oldest and most fundamental case. Gold holds its purchasing power over
        long periods when currencies do not. An ounce of gold bought a fine
        Roman toga 2,000 years ago. Today it buys a good suit. The dollar, by
        contrast, has lost roughly 97% of its purchasing power since the Federal
        Reserve was created in 1913. No currency in history has held its value
        indefinitely. Gold has.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Inflation hedge.</strong> Over
        shorter periods, gold doesn&rsquo;t track inflation month-to-month with
        any reliability. But over decades and through inflationary cycles, it
        has consistently protected purchasing power. The 1970s are the canonical
        example: as CPI averaged 7.4% per year through the decade, gold went
        from $35 to $850 an ounce. The more recent parallel is 2020&ndash;2026,
        when the Fed roughly doubled the money supply and gold went from $1,700
        to $5,602.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          Safe-haven and portfolio diversifier.
        </strong>{" "}
        Gold has a correlation to the S&amp;P 500 of roughly 0.1&ndash;0.3 over
        long periods &mdash; meaning it moves largely independently. During the
        2008 financial crisis, the S&amp;P fell 37% while gold rose 5%. During
        the 2020 COVID crash, the S&amp;P fell 34% in five weeks while gold
        initially dipped and then surged. This uncorrelated behavior is valuable
        in a portfolio even if gold doesn&rsquo;t outperform stocks in bull
        markets (and it usually doesn&rsquo;t).
      </p>

      <div style={style.calloutGold}>
        <div style={style.calloutIcon}>&#x1F4CA;</div>
        <div>
          <p style={style.calloutTitle}>The honest case against gold</p>
          <p style={style.calloutText}>
            Gold doesn&rsquo;t pay a dividend. It doesn&rsquo;t generate
            earnings. It doesn&rsquo;t produce anything. If you put $100 into
            gold and $100 into the S&amp;P 500 in 1985, your S&amp;P investment
            is worth roughly $9,500 today (with dividends reinvested) while your
            gold is worth about $1,400. Over long bull markets for equities,
            gold is a drag on returns. The case for owning it rests almost
            entirely on what happens when equities don&rsquo;t cooperate &mdash;
            and on the belief that the current monetary order is more fragile
            than it appears.
          </p>
        </div>
      </div>

      <h3 style={style.secH3}>Where we are now</h3>

      <p style={style.proseP}>
        Gold hit an all-time high of $5,602 per troy ounce on January 28, 2026
        &mdash; a gain of roughly 68% from its $3,340 level a year earlier. By
        April 2026 it had pulled back to $4,728, about 15% off the peak, as a
        fragile US-Iran ceasefire reduced safe-haven demand and the dollar
        strengthened briefly. The one-year return is still 47%. Context:
        that&rsquo;s better than the S&amp;P 500, which is down about 8%
        year-to-date in 2026 amid tariff uncertainty.
      </p>

      <div style={style.stats}>
        <div style={style.stat}>
          <p style={style.statL}>Current spot price</p>
          <p style={{ ...style.statV, color: style.tokens.goldD }}>$4,728</p>
          <p style={style.statS}>Per troy oz &middot; Apr 13, 2026</p>
        </div>
        <div style={style.stat}>
          <p style={style.statL}>All-time high</p>
          <p style={{ ...style.statV, color: style.tokens.grn }}>$5,602</p>
          <p style={style.statS}>January 28, 2026</p>
        </div>
        <div style={style.stat}>
          <p style={style.statL}>1-year return</p>
          <p style={{ ...style.statV, color: style.tokens.grn }}>+47%</p>
          <p style={style.statS}>vs S&amp;P 500: &minus;8% YTD 2026</p>
        </div>
      </div>
    </section>
  );
};

export default GoldBasicsSection;
