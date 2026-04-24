import React from "react";

const SilverSection = () => {
  return (
    <section className="mx-auto py-12 px-6" id="silver">
      <p className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-2">
        Section 4
      </p>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
        Silver &mdash; The Industrial Twin
      </h2>

      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
        <p className="mb-6">
          Gold and silver are both precious metals. After that, the similarity
          gets complicated. Silver is simultaneously a monetary metal and an
          industrial commodity &mdash; a dual identity that makes it more
          volatile than gold and, right now, more interesting.
        </p>

        <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          How silver is different from gold
        </h3>

        <p className="mb-4">
          About 72% of global silver mine supply comes as a byproduct of mining
          copper, lead, zinc, and gold. Silver miners don&rsquo;t respond to
          silver prices the same way gold miners respond to gold prices, because
          they&rsquo;re mostly not mining for silver in the first place. This
          makes the supply side uniquely inelastic. You can&rsquo;t easily
          increase silver production just because its price doubled, because the
          decision to mine the parent metals is driven by copper or zinc
          economics, not silver.
        </p>

        <p className="mb-6">
          The demand side has changed structurally over the past decade in a way
          that makes silver genuinely different from anything it was before.
          Industrial demand in 2024 hit 680.5 million ounces &mdash; a fourth
          consecutive annual record. Solar photovoltaic (PV) manufacturing alone
          consumed 197 million ounces that year, roughly 29% of all industrial
          silver demand. In 2013, the same category used about 50 million
          ounces. That&rsquo;s a near-fourfold increase in eleven years, and
          global solar deployment is still accelerating.
        </p>

        <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          The five-year supply deficit
        </h3>

        <p className="mb-8">
          The silver market has run a structural supply deficit every year since
          2021. The cumulative shortfall through 2025 is approximately 862
          million ounces &mdash; nearly one full year of global mine production.
          Every year, more silver is consumed than is produced, and the gap is
          being filled from above-ground inventories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
              2024 supply deficit
            </p>
            <p className="text-3xl font-bold text-red-600 mb-1">
              &minus;147 Moz
            </p>
            <p className="text-xs text-slate-400">5th consecutive year</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
              Industrial demand 2024
            </p>
            <p className="text-3xl font-bold text-slate-900 mb-1">680.5 Moz</p>
            <p className="text-xs text-slate-400">4th consecutive record</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
              Solar PV share
            </p>
            <p className="text-3xl font-bold text-slate-900 mb-1">29%</p>
            <p className="text-xs text-slate-400">Of industrial demand</p>
          </div>
        </div>

        <p className="mb-6">
          The market isn&rsquo;t &ldquo;running out&rdquo; of silver &mdash;
          that&rsquo;s too dramatic. But visible inventories in COMEX warehouses
          and the LBMA have been declining for years, lease rates periodically
          spike (reaching 8% annualized in early 2026, against a normal range of
          0.3&ndash;0.5%), and paper-to-physical coverage ratios have been under
          pressure. The COMEX silver stress index was at 62/100 in April 2026,
          well into elevated territory.
        </p>

        <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Silver&rsquo;s remarkable 2025&ndash;2026 run
        </h3>

        <p className="mb-6">
          Silver was trading around $28/oz in early 2025. It hit an all-time
          high of $121/oz in January 2026 before pulling back to around $73
          today. That&rsquo;s a tenfold gain from its COVID-era lows in March
          2020 ($12) and still a 133% gain year-over-year. The catalyst for the
          January spike was a confluence: a physical squeeze in London,
          China&rsquo;s classification of silver as a strategic material, and
          surging investment demand as Western investors finally noticed the
          physical market reality.
        </p>

        <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
          Silver vs gold: which to own?
        </h3>

        <p className="mb-4">
          There is no universally right answer. Gold is the better store of
          value with lower volatility. Silver has higher upside in bull markets
          but deeper drawdowns in bear markets. Gold&rsquo;s case rests
          primarily on monetary and safe-haven demand. Silver&rsquo;s case rests
          on the monetary case <em>plus</em> an industrial demand story that is
          structurally robust.
        </p>

        <p className="mb-10">
          The gold/silver ratio &mdash; currently 64.8x &mdash; is roughly at
          its long-run average of 67x, offering no strong relative-value signal
          either way. When the ratio was 100x or above, silver looked
          conspicuously cheap. At 65x, it&rsquo;s fairly valued relative to
          gold. Many investors hold both for different reasons.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg flex gap-4 items-start">
          <div className="text-2xl">💡</div>
          <div>
            <p className="font-bold text-blue-900 mb-1 text-lg">
              Silver price per gram (April 2026)
            </p>
            <p className="text-blue-800 text-sm leading-relaxed">
              At $73.00/oz spot: .999 fine silver = $2.35/gram &middot; 925
              sterling = $2.17/gram &middot; 900 coin silver = $2.11/gram
              &middot; 1 kg bar = $2,347. Silver is priced in troy ounces like
              gold but there&rsquo;s no karat system &mdash; just fineness.
              Standard bullion is .999 fine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverSection;
