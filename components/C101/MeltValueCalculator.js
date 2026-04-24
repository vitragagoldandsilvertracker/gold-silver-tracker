import React, { useState, useEffect } from "react";
import * as style from "./styles.js";

const MeltValueCalculator = () => {
  // Constants for April 2026 spot prices
  const GS = 4728.0;
  const SS = 73.0;

  // Unit and Purity Names for the "breakdown" text
  const UN = {
    1: "troy oz",
    0.032151: "g",
    32.1507: "kg",
    0.375: "tola",
    1.20337: "tael",
    0.05: "dwt",
    0.715: "$1 FV",
  };

  const KN = {
    1: "100%",
    0.9167: "91.67%",
    0.875: "87.5%",
    "0.750": "75%",
    0.583: "58.3%",
    0.417: "41.7%",
    0.999: "99.9%",
    0.925: "92.5%",
    "0.900": "90%",
    "0.400": "40%",
    "0.350": "35%",
  };

  // Gold State
  const [gW, setGW] = useState(1);
  const [gU, setGU] = useState(1);
  const [gP, setGP] = useState(1);
  const [gResult, setGResult] = useState(4728.0);

  // Silver State
  const [sW, setSW] = useState(1);
  const [sU, setSU] = useState(1);
  const [sP, setSP] = useState(0.999);
  const [sResult, setSResult] = useState(72.93);

  const fmt = (n) =>
    "$" +
    n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  useEffect(() => {
    setGResult((gW || 0) * gU * gP * GS);
  }, [gW, gU, gP]);

  useEffect(() => {
    setSResult((sW || 0) * sU * sP * SS);
  }, [sW, sU, sP]);

  return (
    <section className="sec" id="calculator" style={style.sec}>
      <p className="sec-label prose" style={style.secLabel}>
        Interactive tool
      </p>
      <h2 className="prose" style={{ ...style.secH2, marginBottom: "6px" }}>
        Gold &amp; Silver Melt Value Calculator
      </h2>
      <p
        className="prose"
        style={{
          marginBottom: "24px",
          fontSize: "15px",
          color: "var(--ink3)",
          lineHeight: "1.75",
        }}
      >
        Calculate the melt value of any gold or silver item by weight, unit, and
        purity. Runs entirely in your browser &mdash; no data sent anywhere.
      </p>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        {/* GOLD SIDE */}
        <div
          style={{
            background: "var(--gold-t)",
            border: "1px solid rgba(201,168,76,.25)",
            borderRadius: "var(--rl)",
            padding: "22px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "var(--gold-d)",
              marginBottom: "16px",
            }}
          >
            Gold Calculator
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <div>
              <label
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Weight
              </label>
              <input
                type="number"
                value={gW}
                onChange={(e) => setGW(parseFloat(e.target.value))}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  border: "1px solid rgba(201,168,76,.3)",
                  borderRadius: "7px",
                  background: "#fff",
                  fontSize: "14px",
                  fontFamily: "'DM Mono', monospace",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Unit
              </label>
              <select
                value={gU}
                onChange={(e) => setGU(parseFloat(e.target.value))}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  border: "1px solid rgba(201,168,76,.3)",
                  borderRadius: "7px",
                  background: "#fff",
                  fontSize: "13px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <option value="1">Troy ounce (31.1g)</option>
                <option value="0.032151">Gram</option>
                <option value="32.1507">Kilogram</option>
                <option value="0.375">Tola (11.66g)</option>
                <option value="1.20337">Tael (37.43g)</option>
                <option value="0.05">Pennyweight (dwt)</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Purity
            </label>
            <select
              value={gP}
              onChange={(e) => setGP(parseFloat(e.target.value))}
              style={{
                width: "100%",
                padding: "9px 12px",
                border: "1px solid rgba(201,168,76,.3)",
                borderRadius: "7px",
                background: "#fff",
                fontSize: "13px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <option value="1">24K &mdash; 999 fine (100%)</option>
              <option value="0.9167">
                22K &mdash; 91.67% (Eagles, Krugerrands)
              </option>
              <option value="0.875">21K &mdash; 87.5%</option>
              <option value="0.750">18K &mdash; 75%</option>
              <option value="0.583">14K &mdash; 58.3%</option>
              <option value="0.417">10K &mdash; 41.7%</option>
            </select>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: "var(--r)",
              padding: "14px 16px",
              border: "1px solid rgba(201,168,76,.25)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                marginBottom: "4px",
              }}
            >
              Melt value at $4,728/oz spot
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "28px",
                fontWeight: "500",
                color: "var(--gold-d)",
              }}
            >
              {fmt(gResult)}
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                marginTop: "2px",
              }}
            >
              {gW} {UN[gU]} &times; {KN[gP]} &times; ${GS.toLocaleString()}/oz
            </p>
          </div>
        </div>

        {/* SILVER SIDE */}
        <div
          style={{
            background: "#F8F8FB",
            border: "1px solid rgba(168,168,179,.25)",
            borderRadius: "var(--rl)",
            padding: "22px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "var(--ink)",
              marginBottom: "16px",
            }}
          >
            Silver Calculator
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <div>
              <label
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Weight / Face value
              </label>
              <input
                type="number"
                value={sW}
                onChange={(e) => setSW(parseFloat(e.target.value))}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  border: "1px solid rgba(168,168,179,.25)",
                  borderRadius: "7px",
                  background: "#fff",
                  fontSize: "14px",
                  fontFamily: "'DM Mono', monospace",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Unit
              </label>
              <select
                value={sU}
                onChange={(e) => setSU(parseFloat(e.target.value))}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  border: "1px solid rgba(168,168,179,.25)",
                  borderRadius: "7px",
                  background: "#fff",
                  fontSize: "13px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <option value="1">Troy ounce</option>
                <option value="0.032151">Gram</option>
                <option value="32.1507">Kilogram</option>
                <option value="0.715">$1 face value (junk silver)</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Purity
            </label>
            <select
              value={sP}
              onChange={(e) => setSP(parseFloat(e.target.value))}
              style={{
                width: "100%",
                padding: "9px 12px",
                border: "1px solid rgba(168,168,179,.25)",
                borderRadius: "7px",
                background: "#fff",
                fontSize: "13px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <option value="0.999">.999 fine (bullion bars, Eagles)</option>
              <option value="0.925">925 sterling silver</option>
              <option value="0.900">90% coin silver (pre-1965 US)</option>
              <option value="0.400">40% (Kennedy halves 1965-70)</option>
              <option value="0.350">35% (War nickels 1942-45)</option>
            </select>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: "var(--r)",
              padding: "14px 16px",
              border: "1px solid rgba(168,168,179,.2)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                marginBottom: "4px",
              }}
            >
              Melt value at $73.00/oz spot
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "28px",
                fontWeight: "500",
                color: "var(--ink)",
              }}
            >
              {fmt(sResult)}
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                marginTop: "2px",
              }}
            >
              {sW} {UN[sU]} &times; {KN[sP]} &times; ${SS}/oz
            </p>
          </div>
        </div>
      </div>

      <div
        className="callout callout-gold"
        style={{ ...style.calloutGold, marginTop: "16px" }}
      >
        <div className="callout-icon" style={{ fontSize: "16px" }}>
          &#x26A0;
        </div>
        <div>
          <p
            className="callout-text prose"
            style={{ margin: 0, fontSize: "13px" }}
          >
            This is <strong style={style.prosePStrong}>melt value only</strong>{" "}
            &mdash; the raw metal content at spot price. Dealers buying scrap
            typically pay 85&ndash;95% of melt. Coins and bars with collector or
            numismatic value trade above melt. Jewelry with craftsmanship has
            retail value above melt. Not financial advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeltValueCalculator;
