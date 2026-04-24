import React from "react";
import * as style from "./styles.js";

const GoldTaxesSection = () => {
  return (
    <section className="sec prose" id="gold-taxes" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Tax treatment
      </p>
      <h2 style={style.secH2}>
        Gold &amp; Silver Taxes: The 28% Collectibles Trap
      </h2>

      <p style={style.proseP}>
        Most investors assume gold and silver gains are taxed like stock gains.
        They&rsquo;re not. This difference costs people real money, and
        it&rsquo;s worth understanding before you build a position.
      </p>

      <h3 style={style.proseH3}>
        Physical gold and silver: the collectibles rate
      </h3>

      <p style={style.proseP}>
        The IRS classifies physical gold and silver &mdash; bars, coins, bullion
        &mdash; as <strong style={style.prosePStrong}>collectibles</strong>{" "}
        under IRC Section 408(m). This classification has two consequences.
        First, long-term gains (held over one year) are taxed at a maximum rate
        of <strong style={style.prosePStrong}>28%</strong>, not the 15&ndash;20%
        long-term capital gains rate that applies to stocks, ETFs that hold
        equities, real estate, and most other investments. Second, short-term
        gains (held one year or less) are taxed as ordinary income at your
        marginal rate, which can reach 37% &mdash; same as stocks.
      </p>

      <p style={style.proseP}>
        So if you&rsquo;re in the 37% bracket and sell gold you&rsquo;ve held
        for 14 months, your federal rate is capped at 28%. If you&rsquo;re in
        the 22% bracket, your rate is 22% (your actual marginal rate, which is
        less than 28%). The 28% is a ceiling, not a floor &mdash; you pay the
        lesser of your ordinary rate or 28%.
      </p>

      <div
        className="callout callout-red"
        style={{ ...style.calloutRed, margin: "20px 0" }}
      >
        <div className="callout-icon" style={style.calloutIcon}>
          &#x26A0;
        </div>
        <div>
          <p className="callout-title" style={style.calloutTitle}>
            The ETF trap &mdash; GLD and IAU are also taxed at 28%
          </p>
          <p className="callout-text" style={style.calloutText}>
            This surprises most investors. GLD, IAU, and PHYS are structured as
            grantor trusts that directly hold physical gold. The IRS treats
            shareholders as if they own gold directly. That means long-term
            gains from selling GLD or IAU are taxed at the 28% collectibles rate
            &mdash; <em>not</em> the 15&ndash;20% rate for equity ETFs. The tax
            simplicity argument for ETFs vs physical gold largely disappears
            once you account for this.
          </p>
        </div>
      </div>

      <h3 style={style.proseH3}>What is taxed differently</h3>

      <div style={{ overflowX: "auto" }}>
        <table
          className="ctbl"
          style={{ ...style.ctbl, margin: "16px 0 24px" }}
        >
          <thead>
            <tr style={style.ctblTr}>
              <th style={style.ctblTh}>Investment type</th>
              <th style={style.ctblTh}>Long-term rate (held &gt;1yr)</th>
              <th style={style.ctblTh}>Short-term rate</th>
              <th style={style.ctblTh}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Physical gold/silver</strong>
              </td>
              <td style={{ ...style.ctblTd, color: style.tokens.red }}>
                <strong>Max 28% (collectibles)</strong>
              </td>
              <td style={style.ctblTd}>Ordinary income (up to 37%)</td>
              <td style={style.ctblTd}>Bars, coins, bullion</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>GLD, IAU, PHYS ETFs</strong>
              </td>
              <td style={{ ...style.ctblTd, color: style.tokens.red }}>
                <strong>Max 28% (collectibles)</strong>
              </td>
              <td style={style.ctblTd}>Ordinary income</td>
              <td style={style.ctblTd}>
                Grantor trust structure = treated as physical
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Mining stocks</strong>
              </td>
              <td style={{ ...style.ctblTd, color: style.tokens.green }}>
                15&ndash;20% (standard LTCG)
              </td>
              <td style={style.ctblTd}>Ordinary income</td>
              <td style={style.ctblTd}>Equities, not collectibles</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>GDX, GDXJ ETFs</strong>
              </td>
              <td style={{ ...style.ctblTd, color: style.tokens.green }}>
                15&ndash;20% (standard LTCG)
              </td>
              <td style={style.ctblTd}>Ordinary income</td>
              <td style={style.ctblTd}>Hold equities, not physical metal</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Gold futures (60/40 rule)</strong>
              </td>
              <td style={{ ...style.ctblTd, color: style.tokens.muted }}>
                60% at LTCG / 40% ordinary
              </td>
              <td style={style.ctblTd}>Same 60/40 split</td>
              <td style={style.ctblTd}>
                Section 1256 contracts; marked to market at year-end
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Gold IRA (traditional)</strong>
              </td>
              <td style={style.ctblTd}>Ordinary income on withdrawal</td>
              <td style={style.ctblTd}>Ordinary income</td>
              <td style={style.ctblTd}>
                Tax-deferred growth; collectibles rate bypassed inside IRA
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Gold IRA (Roth)</strong>
              </td>
              <td style={{ ...style.ctblTd, color: style.tokens.green }}>
                Tax-free on qualified withdrawal
              </td>
              <td style={style.ctblTd}>Tax-free</td>
              <td style={style.ctblTd}>
                After-tax contributions; best long-run tax outcome
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={style.proseH3}>Additional taxes to factor in</h3>

      <p style={style.proseP}>
        On top of the federal rate, two additional taxes can apply. The{" "}
        <strong style={style.prosePStrong}>
          Net Investment Income Tax (NIIT)
        </strong>{" "}
        of 3.8% applies to investment income for taxpayers with modified AGI
        above $200,000 (single) or $250,000 (married filing jointly). This
        stacks on top of the 28% collectibles rate, taking the effective ceiling
        to 31.8% for higher earners. State taxes also apply in most states
        &mdash; California&rsquo;s state capital gains rate of up to 13.3% means
        the combined federal + state ceiling can reach 40%+.
      </p>

      <h3 style={style.proseH3}>
        Two legitimate strategies to reduce the tax bite
      </h3>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          Hold inside a retirement account.
        </strong>{" "}
        Within a traditional gold IRA, gains are tax-deferred and avoid the
        collectibles rate entirely. Distributions are taxed as ordinary income
        regardless &mdash; but deferring a large gain over decades is still
        valuable. A Roth gold IRA is the best long-run tax structure:
        contributions are after-tax, but qualified withdrawals are entirely
        tax-free, including all the appreciation.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          Tax-loss harvesting without the wash sale restriction.
        </strong>{" "}
        Here&rsquo;s a genuine advantage of physical precious metals: the IRS
        wash sale rule &mdash; which prevents you from selling a security at a
        loss and immediately rebuying it to harvest the loss &mdash; does{" "}
        <em>not</em> apply to physical precious metals or the grantor trust ETFs
        (GLD, IAU). You can sell gold at a loss in December, claim the loss, and
        immediately rebuy the same product. This is explicitly allowed as of
        2026; verify with a tax advisor as rules can change.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          Inherited gold receives a step-up in basis.
        </strong>{" "}
        Gold you inherit is valued at fair market value on the date of death (or
        the alternate valuation date). All appreciation during the
        decedent&rsquo;s lifetime is wiped out for tax purposes &mdash; which is
        a significant wealth preservation tool for holdings with large embedded
        gains.
      </p>

      <div className="callout callout-blue" style={style.calloutBlue}>
        <div className="callout-icon" style={style.calloutIcon}>
          &#x1F4CB;
        </div>
        <div>
          <p className="callout-title" style={style.calloutTitle}>
            Not tax advice
          </p>
          <p className="callout-text" style={style.calloutText}>
            Tax law is specific to your situation and changes. This section
            explains the general framework as of 2026. Consult a CPA or tax
            advisor before making decisions based on tax treatment &mdash;
            especially for large positions, retirement accounts, or inherited
            metals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoldTaxesSection;
