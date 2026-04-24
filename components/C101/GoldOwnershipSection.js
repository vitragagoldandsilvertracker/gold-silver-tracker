import React from "react";
import * as style from "./styles.js";

const GoldOwnershipSection = () => {
  return (
    <section style={style.sec} id="how-to-own-gold">
      <p style={style.secLabel}>Section 3</p>
      <h2 style={style.secH2}>
        5 Ways to Own Gold &mdash; With Honest Trade-offs
      </h2>

      <p style={style.proseP}>
        The best way to own gold depends entirely on what you&rsquo;re trying to
        accomplish. Price exposure only? ETFs win on cost and simplicity.
        Tax-advantaged retirement account? A gold IRA is the only route. You
        want to hold something physical that doesn&rsquo;t depend on any
        institution staying solvent? Coins and bars. Below is a genuinely honest
        comparison.
      </p>

      <h3 style={style.secH3}>1. Physical gold: coins and bars</h3>
      <p style={style.proseP}>
        Owning physical gold is the oldest and most direct method. You buy it,
        you hold it, you can touch it. No counterparty. No institution between
        you and the metal. For investors who are concerned about tail risks
        &mdash; financial system disruption, bank failures, currency crises
        &mdash; physical gold is the only form that provides that kind of
        independence.
      </p>

      <p style={style.proseP}>
        The trade-off is premiums and storage. When you buy a one-ounce American
        Gold Eagle from a dealer, you pay spot price plus roughly 4&ndash;7% for
        minting and handling. Larger bars (1 oz, 10 oz, kilo) have lower
        premiums than fractional coins. If you want to sell, dealers typically
        pay 1&ndash;3% below spot. Storage requires either a home safe with
        appropriate insurance or a third-party vault.
      </p>

      <p style={style.proseP}>
        For most buyers, the best products are American Gold Eagles, Canadian
        Maple Leafs, and American Gold Buffalos &mdash; all from sovereign
        mints, universally recognized, and easy to resell. Large bars from LBMA
        Good Delivery refiners (Valcambi, PAMP, Perth Mint) carry lower premiums
        but are less liquid at retail.
      </p>

      <div style={style.calloutGold}>
        <div style={style.calloutIcon}>&#x1F3C5;</div>
        <div>
          <p style={style.calloutTitle}>IRA-eligible coins</p>
          <p style={style.calloutText}>
            Not all coins are IRA-eligible. The IRS requires gold at .995
            fineness or better for IRAs, with one specific exception: American
            Gold Eagles are IRA-eligible despite being 91.67% gold (22K),
            because Congress wrote them into the tax code explicitly. South
            African Krugerrands are also 22K but are <em>not</em> IRA-eligible
            &mdash; no statutory exception. More on gold IRAs in Section 6.
          </p>
        </div>
      </div>

      <h3 style={style.secH3}>2. Gold ETFs</h3>
      <p style={style.proseP}>
        For investors who want gold price exposure without storage headaches,
        physically-backed ETFs are the cleanest solution. The three main options
        are meaningfully different:
      </p>

      <table style={{ ...style.ctbl, ...style.tableWrapper }}>
        <thead>
          <tr>
            <th style={style.ctblTh}>ETF</th>
            <th style={style.ctblTh}>Full name</th>
            <th style={style.ctblTh}>Annual fee</th>
            <th style={style.ctblTh}>AUM</th>
            <th style={style.ctblTh}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={style.ctblTd}>
              <strong style={style.ctblStrong}>GLD</strong>
            </td>
            <td style={style.ctblTd}>SPDR Gold Shares</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>0.40%</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$87bn</td>
            <td style={style.ctblTd}>
              The original (2004). Highest liquidity &mdash; institutions use
              this for large trades. Fee is higher than IAU.
            </td>
          </tr>
          <tr>
            <td style={style.ctblTd}>
              <strong style={style.ctblStrong}>IAU</strong>
            </td>
            <td style={style.ctblTd}>iShares Gold Trust</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>0.25%</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$39bn</td>
            <td style={style.ctblTd}>
              Cheaper than GLD by 15 basis points/year. For buy-and-hold
              investors, IAU is the better choice. That fee difference compounds
              to real money over decades.
            </td>
          </tr>
          <tr>
            <td style={style.ctblTd}>
              <strong style={style.ctblStrong}>PHYS</strong>
            </td>
            <td style={style.ctblTd}>Sprott Physical Gold Trust</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>0.35%</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$7.8bn</td>
            <td style={style.ctblTd}>
              Held at the Royal Canadian Mint. Investors can redeem for physical
              gold bars in large amounts. For anyone who wants ETF convenience{" "}
              <em>plus</em> the option of physical redemption.
            </td>
          </tr>
        </tbody>
      </table>

      <p style={style.proseP}>
        All three hold physical gold in allocated vaults. None of them lend the
        gold. The share price closely tracks the gold spot price minus the fee
        drag.{" "}
        <strong style={style.prosePStrong}>
          For most retail investors, IAU is the default recommendation
        </strong>{" "}
        &mdash; lower fees, plenty of liquidity for normal trade sizes,
        straightforward.
      </p>

      <h3 style={style.secH3}>3. Gold mining stocks</h3>
      <p style={style.proseP}>
        Mining stocks are leveraged bets on the gold price. When gold rises, a
        miner’s revenue rises while its fixed costs (labor, energy, equipment)
        stay roughly flat — so profits expand faster than the price move.
        Conversely, when gold falls, miners get squeezed disproportionately. The
        GDX ETF (VanEck Gold Miners, 0.51%) has historically moved at roughly 2×
        the magnitude of gold price changes.
      </p>

      <p style={style.proseP}>
        The current environment is particularly interesting for miners: gold
        spot is $4,728 against an average all-in sustaining cost (AISC) of
        roughly $1,350/oz. That’s a margin of over $3,378 per ounce — all-time
        record profitability for the industry. Yet the GDX-to-gold ratio is near
        historical lows, suggesting miners are cheap relative to the metal they
        produce.
      </p>

      <h3 style={style.secH3}>4. Gold futures</h3>
      <p style={style.proseP}>
        COMEX gold futures contracts represent 100 troy ounces ($472,800 at
        current prices) and require margin rather than the full notional value.
        They are not appropriate for most retail investors. Futures expire,
        requiring you to roll contracts or take delivery. If you’re asking
        whether futures are right for you, the answer is almost certainly no.
      </p>

      <h3 style={style.secH3}>5. Gold IRA</h3>
      <p style={style.proseP}>
        A gold IRA is a self-directed individual retirement account that holds
        physical precious metals. It has the same tax advantages as a
        conventional IRA — traditional or Roth — but requires a specialized
        custodian, an approved dealer, and an IRS-approved depository.
      </p>

      <div className="overflow-scroll">
        <table style={{ ...style.ctbl, marginTop: "24px" }}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Method</th>
              <th style={style.ctblTh}>Best for</th>
              <th style={style.ctblTh}>Annual cost</th>
              <th style={style.ctblTh}>Storage</th>
              <th style={style.ctblTh}>Tax advantaged?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={style.ctblTd}>
                <strong style={style.ctblStrong}>Physical coins/bars</strong>
              </td>
              <td style={style.ctblTd}>
                No-counterparty ownership; preparedness buyers
              </td>
              <td style={{ ...style.ctblTd, ...style.ctblMono }}>
                0% + storage
              </td>
              <td style={style.ctblTd}>Self or vault</td>
              <td style={style.ctblTd}>
                <span style={style.tagNeu}>No</span>
              </td>
            </tr>
            <tr>
              <td style={style.ctblTd}>
                <strong style={style.ctblStrong}>Gold ETF (IAU)</strong>
              </td>
              <td style={style.ctblTd}>
                Simple price exposure, brokerage account
              </td>
              <td style={{ ...style.ctblTd, ...style.ctblMono }}>0.25%</td>
              <td style={style.ctblTd}>Vault (ETF)</td>
              <td style={style.ctblTd}>
                <span style={style.tagNeu}>No</span>
              </td>
            </tr>
            <tr>
              <td style={style.ctblTd}>
                <strong style={style.ctblStrong}>Mining stocks (GDX)</strong>
              </td>
              <td style={style.ctblTd}>Leveraged gold exposure + earnings</td>
              <td style={{ ...style.ctblTd, ...style.ctblMono }}>0.51%</td>
              <td style={style.ctblTd}>N/A (equities)</td>
              <td style={style.ctblTd}>
                <span style={style.tagNeu}>No</span>
              </td>
            </tr>
            <tr>
              <td style={style.ctblTd}>
                <strong style={style.ctblStrong}>Futures</strong>
              </td>
              <td style={style.ctblTd}>
                Hedgers; sophisticated speculators only
              </td>
              <td style={style.ctblTd}>Commissions</td>
              <td style={style.ctblTd}>N/A</td>
              <td style={style.ctblTd}>
                <span style={style.tagNeu}>No</span>
              </td>
            </tr>
            <tr>
              <td style={style.ctblTd}>
                <strong style={style.ctblStrong}>Gold IRA</strong>
              </td>
              <td style={style.ctblTd}>
                Rolling over 401(k); savings in metals
              </td>
              <td style={{ ...style.ctblTd, ...style.ctblMono }}>
                $225&ndash;$800
              </td>
              <td style={style.ctblTd}>Depository</td>
              <td style={style.ctblTd}>
                <span style={style.tagGrn}>Yes</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GoldOwnershipSection;
