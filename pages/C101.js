import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Cards from "@/components/C101/C101Cards";
import C101Hero from "@/components/C101/C101Hero";
import React from "react";
import SEO from "@/components/SEO";

const C101 = () => {
  return (
    <div>
      <SEO
        title="Lithium 101 - Lithium Alloys Guide & Glossary"
        description="Explore the world of Gold & Silver with our comprehensive guide. Learn about gold, silver, precious metals, their properties, uses, and market significance."
        keywords="Gold & Silver 101, Gold, Silver, precious metals, metal properties, lithium glossary, industrial metals"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/C101"
      />
      <Navbar />
      <C101Hero />
      <C101Cards />

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default C101;