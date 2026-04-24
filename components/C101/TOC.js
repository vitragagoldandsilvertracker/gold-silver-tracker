import React from "react";
import * as style from "./styles.js";

const TOC = () => {
  return (
    <nav style={style.toc} aria-label="Table of contents">
      <p style={style.tocTitle}>In this guide</p>
      <ol className="list-decimal pl-5 grid grid-cols-2 lg:grid-cols-4 gap-2 gap-x-6">
        <li style={style.tocLi}>
          <a href="#what-is-gold" style={style.tocA}>
            What gold actually is &mdash; and why people own it
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#how-price-works" style={style.tocA}>
            How the gold price works
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#how-to-own-gold" style={style.tocA}>
            5 ways to own gold
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#silver" style={style.tocA}>
            Silver &mdash; the industrial twin
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#bull-market" style={style.tocA}>
            What drove gold to $5,600?
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#gold-ira" style={style.tocA}>
            Gold IRA: the US tax-advantaged route
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#reading-data" style={style.tocA}>
            How to read the market data
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#buying-guide" style={style.tocA}>
            Practical buying guide
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#glossary" style={style.tocA}>
            Glossary
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#gold-price-history" style={style.tocA}>
            Gold price history 2000&ndash;2026
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#gold-taxes" style={style.tocA}>
            Gold &amp; silver taxes (28% rate)
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#spot-fake-gold" style={style.tocA}>
            How to spot fake gold
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#junk-silver" style={style.tocA}>
            Junk silver explained
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#calculator" style={style.tocA}>
            Melt value calculator
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#more-guides" style={style.tocA}>
            Storage, coins &amp; selling guide
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#glossary" style={style.tocA}>
            Glossary
          </a>
        </li>
        <li style={style.tocLi}>
          <a href="#faq" style={style.tocA}>
            FAQ
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default TOC;
