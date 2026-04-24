import React from "react";
import * as style from "./styles.js";

const PriceStrip = () => {
  return (
    <div style={style.priceStrip}>
      <div style={style.priceStripInner}>
        <div style={style.ps}>
          <p style={style.psL}>Gold spot</p>
          <p style={{ ...style.psV, color: style.tokens.goldL }}>$4,728</p>
          <p style={{ ...style.psS, ...style.dn }}>
            &#x25BC; &minus;0.44% today
          </p>
        </div>
        <div style={style.ps}>
          <p style={style.psL}>Silver spot</p>
          <p style={{ ...style.psV, color: style.tokens.silL }}>$73.00</p>
          <p style={{ ...style.psS, ...style.up }}>&#x25B2; +0.21% today</p>
        </div>
        <div style={style.ps}>
          <p style={style.psL}>G/S ratio</p>
          <p style={style.psV}>64.8&times;</p>
          <p style={{ ...style.psS, ...style.neu }}>Hist avg 67&times;</p>
        </div>
        <div style={style.ps}>
          <p style={style.psL}>Gold per gram (24K)</p>
          <p style={style.psV}>$152.05</p>
          <p style={{ ...style.psS, ...style.neu }}>$114 for 18K</p>
        </div>
      </div>
    </div>
  );
};

export default PriceStrip;
