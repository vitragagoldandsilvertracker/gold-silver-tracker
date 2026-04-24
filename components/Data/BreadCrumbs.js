import React from "react";
import * as style from "./styles.js";

const BreadCrumbs = () => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="pt-4 pl-2"
      style={{
        background: style.tokens.white,
        borderBottom: `1px solid ${style.tokens.bdr}`,
        fontSize: "11px",
        color: style.tokens.muted,
      }}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <div
        style={{
          // maxWidth: style.tokens.max,
          margin: "0 auto",
        }}
      >
        <span
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a
            href="/"
            itemProp="item"
            style={{
              ...style.aBase,
              color: style.tokens.muted,
            }}
          >
            <span itemProp="name">Home</span>
          </a>
          <meta itemProp="position" content="1" />
        </span>
        <span style={{ margin: "0 6px", opacity: 0.4 }}>&rsaquo;</span>
        <span
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <span itemProp="name" style={{ color: style.tokens.ink3 }}>
            Gold & Silver Data
          </span>
          <meta itemProp="position" content="2" />
        </span>
      </div>
    </nav>
  );
};

export default BreadCrumbs;
