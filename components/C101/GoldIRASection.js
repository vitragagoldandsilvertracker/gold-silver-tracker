import React from "react";
import * as style from "./styles.js";

const GoldIRASection = () => {
  return (
    <section className="sec prose" id="gold-ira" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Section 6
      </p>
      <h2 style={style.secH2}>Gold IRA: The US Tax-Advantaged Route</h2>

      <p style={style.proseP}>
        A gold IRA is a self-directed IRA (SDIRA) that holds physical precious
        metals rather than stocks, bonds, or mutual funds. It has the same tax
        structure as a conventional IRA &mdash; but it comes with specific IRS
        requirements and meaningfully higher costs that you need to understand
        before deciding whether it makes sense.
      </p>

      <h3 style={style.proseH3}>How a gold IRA actually works</h3>

      <p style={style.proseP}>
        Three parties are always involved. First, a{" "}
        <strong style={style.prosePStrong}>custodian</strong> &mdash; an
        IRS-approved institution that administers the account, handles
        paperwork, and ensures compliance. Regular brokerages like Fidelity or
        Vanguard do not offer physical gold IRAs; you need a specialized
        self-directed IRA custodian. Common ones include Equity Trust Company,
        GoldStar Trust, STRATA Trust, and Kingdom Trust. Second, a{" "}
        <strong style={style.prosePStrong}>precious metals dealer</strong>{" "}
        &mdash; you select which metals to buy, the custodian processes the
        payment, and the metals ship directly from the dealer to the depository.
        The metals never pass through your hands. Third, an{" "}
        <strong style={style.prosePStrong}>IRS-approved depository</strong>{" "}
        &mdash; where the metals are stored on your behalf. Delaware Depository,
        Brink&rsquo;s Global Services, and International Depository Services
        (IDS) are widely used.
      </p>

      <h3 style={style.proseH3}>
        IRS purity rules &mdash; what metals qualify
      </h3>

      <p style={style.proseP}>
        The IRS is specific about what gold can be held in an IRA. Gold must be
        at least .995 fine (99.5% pure). Bars must come from accredited refiners
        or national government mints.{" "}
        <strong style={style.prosePStrong}>The most important exception</strong>
        : American Gold Eagles are IRA-eligible despite being only 91.67% gold
        (22K), because Congress wrote them into the tax code as a specific
        exception under IRC 408(m)(3). No other coin below .995 receives that
        treatment &mdash; not Krugerrands, not older British sovereigns.
      </p>

      <p style={style.proseP}>
        IRA-eligible gold coins include: American Gold Eagle (bullion and
        proof), American Gold Buffalo (.9999), Canadian Gold Maple Leaf (.9999),
        Austrian Gold Philharmonic (.9999), and Australian Gold Kangaroo
        (.9999). Gold bars from LBMA Good Delivery-approved refiners (PAMP
        Suisse, Valcambi, Perth Mint, others) qualify at .999 or better.{" "}
        <strong style={style.prosePStrong}>
          Numismatic coins and certified graded coins do not qualify
        </strong>{" "}
        regardless of gold content &mdash; the IRS treats them as collectibles.
      </p>

      <div className="callout callout-red" style={style.calloutRed}>
        <div className="callout-icon" style={style.calloutIcon}>
          &#x274C;
        </div>
        <div>
          <p className="callout-title" style={style.calloutTitle}>
            Home storage is not allowed &mdash; and &ldquo;home storage gold
            IRA&rdquo; is a scam
          </p>
          <p className="callout-text" style={style.calloutText}>
            IRA-owned metals must be held by a qualified trustee or custodian.
            Storing them at your home or in a personal safe deposit box
            constitutes a prohibited transaction and can result in the IRS
            treating the entire IRA as a taxable distribution &mdash; meaning
            income tax plus a 10% early withdrawal penalty if you&rsquo;re under
            59&frac12;. Companies advertising &ldquo;home storage gold
            IRAs&rdquo; through LLCs are pitching non-compliant structures.
            FINRA has issued investor alerts about this. Avoid.
          </p>
        </div>
      </div>

      <h3 style={style.proseH3}>The real costs of a gold IRA</h3>

      <p style={style.proseP}>
        This is where gold IRAs diverge sharply from conventional IRAs. Expect
        to pay:
      </p>

      <ul style={style.proseUl}>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>Account setup fee:</strong>{" "}
          $50&ndash;$150 one-time
        </li>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>Annual custodian fee:</strong>{" "}
          $75&ndash;$300/year
        </li>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>Annual storage fee:</strong>{" "}
          $100&ndash;$300 for non-segregated (commingled); $150&ndash;$500 for
          segregated (your specific bars stored separately)
        </li>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>Transaction fee:</strong>{" "}
          $15&ndash;$50 per buy or sell
        </li>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>Dealer premium:</strong> 3&ndash;8%
          above spot when buying coins or bars
        </li>
      </ul>

      <p style={style.proseP}>
        Combined annual fees (custodian + storage) of $225&ndash;$800 represent
        1&ndash;2% of assets for a $50,000 account. That&rsquo;s
        4&ndash;8&times; more expensive than a low-cost ETF like IAU at 0.25%.
        The breakeven analysis is important: at 1.5% annual fees, gold must
        appreciate at least 1.5% per year just to match a free investment
        vehicle. Over 20 years at a 1.5% fee drag, you lose roughly 26% of your
        ending balance to fees alone, compared to holding IAU.
      </p>

      <h3 style={style.proseH3}>Who a gold IRA makes sense for</h3>

      <p style={style.proseP}>
        The fee math is most favorable for larger accounts and investors with
        strong convictions about gold&rsquo;s long-run appreciation.
        Specifically, a gold IRA earns its keep for: investors rolling over a
        substantial 401(k) balance into retirement who want tangible gold
        exposure within the tax shelter; investors who have maxed out
        conventional IRAs and want additional pre-tax retirement savings in
        metals; investors who place high value on physical gold ownership (vs.
        paper claims) and want to integrate that into their retirement plan.
      </p>

      <p style={style.proseP}>
        For most investors who simply want gold price exposure in a brokerage
        account, buying IAU or GLD is cheaper, simpler, and requires no
        specialized custodian. A gold IRA is specifically for situations where
        the tax-advantaged structure provides enough value to justify the added
        cost and complexity.
      </p>

      <h3 style={style.proseH3}>Funding a gold IRA</h3>

      <p style={style.proseP}>
        There are three ways to fund a gold IRA. A{" "}
        <strong style={style.prosePStrong}>direct transfer</strong> from one IRA
        custodian to another has no time limits and no tax consequences. A{" "}
        <strong style={style.prosePStrong}>rollover from a 401(k)</strong> must
        be completed within 60 days of receiving the distribution or it becomes
        taxable. An{" "}
        <strong style={style.prosePStrong}>annual contribution</strong> (up to
        the IRA contribution limit, currently $7,000/year or $8,000 if 50+)
        follows standard IRA rules. You cannot transfer gold you already
        personally own into an IRA &mdash; even if that gold meets all IRS
        requirements. All metals must be purchased through the custodian and
        shipped directly to the depository.
      </p>

      <h3 style={style.proseH3}>Required minimum distributions (RMDs)</h3>

      <p style={style.proseP}>
        Traditional gold IRAs are subject to required minimum distributions
        starting at age 73, just like conventional traditional IRAs. You can
        take RMDs as physical metal (the custodian ships specific coins or bars
        to you and you pay income tax on the fair market value) or cash (the
        custodian sells metal and transfers the proceeds). Roth gold IRAs are
        not subject to RMDs for the original account owner.
      </p>
    </section>
  );
};

export default GoldIRASection;
