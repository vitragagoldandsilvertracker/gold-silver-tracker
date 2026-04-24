import React, { useState } from "react";
import * as style from "./styles.js";

const C101Hero = () => {
  const [isHeroCtaHovered, setIsHeroCtaHovered] = useState(false);

  return (
    <section style={style.hero}>
      <div style={style.heroInner}>
        <p style={style.heroLabel}>
          The complete investor&rsquo;s guide &mdash; updated April 2026
        </p>
        <h1 style={style.heroH1}>
          Gold &amp; Silver <em style={style.heroH1Em}>101</em>
        </h1>
        <p style={style.heroDesc}>
          How the prices work, what drives them, how to own them, and what the
          silver supply deficit actually means. Written for US investors. No
          hype, no sales pitch, no jargon that isn&rsquo;t explained.
        </p>
        <div style={style.heroMeta}>
          <span>
            <span style={style.liveDot}></span>
            Prices: $4,728 gold &middot; $73 silver &middot; 64.8&times; ratio
          </span>
          <span>Updated: April 13, 2026</span>
          <span>~35 min read</span>
        </div>
        <a
          href="/data/"
          onMouseEnter={() => setIsHeroCtaHovered(true)}
          onMouseLeave={() => setIsHeroCtaHovered(false)}
          style={{
            ...style.heroCta,
            marginTop: "16px",
            ...(isHeroCtaHovered ? style.heroCtaHover : {}),
          }}
        >
          See Live Charts &amp; Data &rarr;
        </a>
      </div>
    </section>
  );
};

export default C101Hero;
