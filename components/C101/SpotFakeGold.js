import React from "react";
import * as style from "./styles.js";

const SpotGold = () => {
  return (
    <section className="sec prose" id="spot-fake-gold" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Authentication
      </p>
      <h2 style={style.secH2}>
        How to Spot Fake Gold: Tests That Actually Work
      </h2>

      <p style={style.proseP}>
        With gold above $4,700 an ounce, counterfeiting is a real industry. The
        most sophisticated fakes use tungsten cores &mdash; tungsten has nearly
        identical density to gold (19.25 g/cm³ vs gold&rsquo;s 19.32 g/cm³) and
        is cheap by comparison. A gold-plated tungsten bar can pass a casual
        inspection. Here&rsquo;s how to verify without destroying the piece.
      </p>

      <h3 style={style.proseH3}>
        Test 1: Weight and dimensions (fast, free, catches most fakes)
      </h3>

      <p style={style.proseP}>
        Every legitimate coin and bar has published specifications. A 1 oz
        American Gold Eagle weighs exactly 33.93 grams, measures 32.70 mm
        diameter and 2.87 mm thick. A 1 oz Canadian Maple Leaf: 31.10 grams, 30
        mm diameter. Weigh with a precision scale (0.01g accuracy, costs
        $15&ndash;30 on Amazon) and compare against the official mint specs.
        Also measure with digital calipers. A weight or size discrepancy of more
        than 0.1% is a red flag. This test catches most cheap fakes &mdash;
        wrong-weight alloys are the easiest thing to spot.
      </p>

      <h3 style={style.proseH3}>
        Test 2: Magnet test (30 seconds, neodymium magnet)
      </h3>

      <p style={style.proseP}>
        Gold is diamagnetic &mdash; it has an extremely weak repulsion to
        magnetic fields. It doesn&rsquo;t stick to magnets. If a coin or bar is
        attracted to a strong neodymium magnet, it contains ferrous metals and
        is almost certainly fake. Use a neodymium magnet, not a fridge magnet
        &mdash; fridge magnets are too weak to be informative.{" "}
        <em style={style.proseI}>Limitation</em>: this test only catches fakes
        with iron cores. Tungsten-filled pieces pass the magnet test because
        tungsten is also non-magnetic.
      </p>

      <h3 style={style.proseH3}>Test 3: Ping test (acoustic fingerprint)</h3>

      <p style={style.proseP}>
        Real gold coins produce a clear, sustained ringing tone when tapped
        &mdash; similar to a bell. Balance the coin on a fingertip and tap it
        with another coin or a pencil. The ring should sustain for at least
        1&ndash;2 seconds with a clear, high-pitched tone. Base metal fakes
        produce a dull, short thud. The free{" "}
        <em style={style.proseI}>Bullion Test</em> app (iOS/Android) analyzes
        the frequency against known-good reference recordings &mdash; useful for
        coins like Gold Eagles and Maple Leafs where reference data is
        available. Not useful for custom bars without reference data.
      </p>

      <h3 style={style.proseH3}>
        Test 4: Density / specific gravity test (catches tungsten cores)
      </h3>

      <p style={style.proseP}>
        This is the best home test for bars. Gold&rsquo;s density is 19.32
        g/cm³. Tungsten is 19.25 g/cm³ &mdash; so close that weight and
        dimensions alone won&rsquo;t catch a solid tungsten bar with thin gold
        plating. But density calculation will.
      </p>

      <p style={style.proseP}>
        Method: (1) Weigh the item in air, record as W₁. (2) Hang it on a thread
        submerged in water and weigh it while submerged, record as W₂. (3)
        Calculate: density = $W_1 \div (W_1 - W_2)$. For pure gold, you should
        get approximately 19.3. For an 18K piece, around 15.5. For silver, 10.5.
        Any result materially below the expected value for the stated karat is a
        red flag. Requires a precision scale with a hook or a weighing bridge
        &mdash; kits are available for $40&ndash;80 online.
      </p>

      <h3 style={style.proseH3}>
        Test 5: XRF analysis (definitive, non-destructive)
      </h3>

      <p style={style.proseP}>
        X-ray fluorescence (XRF) is the industry standard for authenticating
        precious metals. An XRF analyzer fires X-rays at the metal surface; the
        atoms emit secondary X-rays at wavelengths unique to each element,
        letting the machine identify the exact composition and purity in
        seconds, non-destructively.{" "}
        <strong style={style.prosePStrong}>
          This is the only test that catches sophisticated gold-plated tungsten
        </strong>
        , because it reads through the surface and can detect thickness of
        plating vs solid composition. XRF machines cost $10,000&ndash;$40,000 to
        own, but many reputable dealers offer free or low-cost XRF testing. When
        buying a significant amount of gold from a private seller or unfamiliar
        source, ask for XRF verification before paying.
      </p>

      <div className="callout callout-grn" style={style.calloutGrn}>
        <div className="callout-icon" style={style.calloutIcon}>
          &#x2705;
        </div>
        <div>
          <p className="callout-title" style={style.calloutTitle}>
            The practical protocol for most buyers
          </p>
          <p className="callout-text" style={style.calloutText}>
            For coins from established dealers: check the weight (scale) and run
            the ping test. For bars over $5,000 from any non-mint source: weigh,
            measure, and request XRF. For private seller purchases: density test
            + XRF before transferring payment. The best defense is buying
            sealed, mint-assayed products from established dealers (APMEX, JM
            Bullion, SD Bullion, PAMP, Perth Mint) where authentication is
            already done in the supply chain.
          </p>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          className="ctbl"
          style={{ ...style.ctbl, ...style.tableWrapper }}
        >
          <thead>
            <tr style={style.ctblTr}>
              <th style={style.ctblTh}>Test</th>
              <th style={style.ctblTh}>Catches</th>
              <th style={style.ctblTh}>Cost</th>
              <th style={style.ctblTh}>Destroys item?</th>
              <th style={style.ctblTh}>Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Weight + dimensions</strong>
              </td>
              <td style={style.ctblTd}>Wrong-alloy fakes</td>
              <td style={style.ctblTd}>$15&ndash;30 (scale + calipers)</td>
              <td style={style.ctblTd}>No</td>
              <td style={style.ctblTd}>Always do this first</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Magnet test</strong>
              </td>
              <td style={style.ctblTd}>Iron/steel cores</td>
              <td style={style.ctblTd}>$3&ndash;10 (neodymium magnet)</td>
              <td style={style.ctblTd}>No</td>
              <td style={style.ctblTd}>Quick screen only</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Ping test</strong>
              </td>
              <td style={style.ctblTd}>Wrong-alloy fakes</td>
              <td style={style.ctblTd}>Free (phone app)</td>
              <td style={style.ctblTd}>No</td>
              <td style={style.ctblTd}>Good for coins, not bars</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Density / specific gravity</strong>
              </td>
              <td style={style.ctblTd}>Tungsten + most fakes</td>
              <td style={style.ctblTd}>$40&ndash;80 (weighing kit)</td>
              <td style={style.ctblTd}>No</td>
              <td style={style.ctblTd}>Best home test for bars</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Acid test</strong>
              </td>
              <td style={style.ctblTd}>Gold-plated base metals</td>
              <td style={style.ctblTd}>$10&ndash;25 (test kit)</td>
              <td style={style.ctblTd}>Slightly (surface scratch)</td>
              <td style={style.ctblTd}>Use if density test fails</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>XRF analysis</strong>
              </td>
              <td style={style.ctblTd}>Everything including plated tungsten</td>
              <td style={style.ctblTd}>Free at many dealers</td>
              <td style={style.ctblTd}>No</td>
              <td style={style.ctblTd}>Gold standard for large purchases</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SpotGold;
