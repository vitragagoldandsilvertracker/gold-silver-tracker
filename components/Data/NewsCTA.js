import React, { useState } from "react";
import * as style from "./styles.js";

const NewsCTA = () => {
  const [subscribed, setSubscribed] = useState(false);

  const subCTA = () => {
    // Logic for subscription would go here
    setSubscribed(true);
  };

  // Custom styles for the dark footer/newsletter theme
  const darkSection = {
    ...style.sec,
    backgroundColor: style.tokens.ink,
    padding: "40px 0",
  };

  const inputStyle = {
    flex: 1,
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.2)",
    backgroundColor: "rgba(255,255,255,0.07)",
    color: "#fff",
    fontSize: "13px",
    fontFamily: '"DM Sans", sans-serif',
    outline: "none",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: style.tokens.gold,
    color: style.tokens.ink,
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const featureItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    color: "rgba(255,255,255,0.45)",
  };

  const linkStyle = {
    fontSize: "12px",
    color: "rgba(255,255,255,0.4)",
    textDecoration: "none",
  };

  return (
    <section style={darkSection} id="newsletter">
      <div style={style.w}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p style={style.slbl}>Free weekly newsletter</p>
            <h2
              style={{ ...style.stitle, color: "#fff", marginBottom: "10px" }}
            >
              Get Gold & Silver Data Every Monday Morning
            </h2>
            <p
              style={{
                ...style.sdesc,
                marginBottom: 0,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Price recap, COMEX inventory update, COT positioning summary and
              one chart that matters. No spam. Unsubscribe anytime.
            </p>
          </div>

          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--rl)",
                padding: "24px",
              }}
            >
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "12px" }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  style={inputStyle}
                />
                <button onClick={subCTA} style={buttonStyle}>
                  Subscribe Free
                </button>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <div style={featureItemStyle}>
                  <span style={{ color: "#4CAF50", fontSize: "13px" }}>✓</span>{" "}
                  Weekly gold & silver data digest
                </div>
                <div style={featureItemStyle}>
                  <span style={{ color: "#4CAF50", fontSize: "13px" }}>✓</span>{" "}
                  COMEX inventory + COT positioning summary
                </div>
                <div style={featureItemStyle}>
                  <span style={{ color: "#4CAF50", fontSize: "13px" }}>✓</span>
                  New to precious metals? Read our
                  <a
                    href="/gold-silver-101"
                    style={{ color: style.tokens.gold, marginLeft: "4px" }}
                  >
                    Gold & Silver 101 Guide →
                  </a>
                </div>
              </div>

              {subscribed && (
                <p
                  style={{
                    fontSize: "11px",
                    color: style.tokens.gold,
                    marginTop: "10px",
                  }}
                >
                  Thanks! Check your inbox to confirm.
                </p>
              )}
            </div>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "14px",
                justifyContent: "flex-start",
              }}
            >
              <a href="/investments?tab=stock-screener" style={linkStyle}>
                → Stock Screener
              </a>
              <a href="/investments?tab=insider-transactions" style={linkStyle}>
                → Insider Transactions
              </a>
              <a href="/gold-silver-101" style={linkStyle}>
                → 101 Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCTA;
