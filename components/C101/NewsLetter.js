import React, { useState } from "react";
import * as style from "./styles.js";

const NewsletterSection = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const nlSub = () => {
    if (email && email.includes("@")) {
      setSubscribed(true);
    }
  };

  return (
    <div className="newsletter" style={style.newsletter}>
      <p className="nl-title" style={style.nlTitle}>
        Get the weekly gold &amp; silver digest
      </p>
      <p className="nl-sub" style={style.nlSub}>
        Price recap, COMEX inventory update, and one chart that matters.
        Mondays. No spam.
      </p>

      <div className="nl-form" style={style.nlForm}>
        <input
          type="email"
          id="nlEmail"
          placeholder="your@email.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={style.nlInput}
        />
        <button onClick={nlSub} style={style.nlButton}>
          Subscribe free
        </button>
      </div>

      {subscribed && (
        <p
          id="nlMsg"
          style={{
            fontSize: "12px",
            color: "var(--grn)",
            marginTop: "10px",
            display: "block",
          }}
        >
          Check your inbox to confirm &mdash; thanks.
        </p>
      )}
    </div>
  );
};

export default NewsletterSection;
