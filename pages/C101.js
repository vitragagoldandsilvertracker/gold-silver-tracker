import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Cards from "@/components/C101/C101Cards";
import C101Hero from "@/components/C101/C101Hero";
import React from "react";
import SEO from "@/components/SEO";
import PriceStrip from "@/components/C101/PriceStrip";
import TOC from "@/components/C101/TOC";
import GoldBasicsSection from "@/components/C101/GoldBasicsSection";
import PriceMechanicsSection from "@/components/C101/PriceMechanicsSection";
import GoldOwnershipSection from "@/components/C101/GoldOwnershipSection";
import SilverSection from "@/components/C101/SilverSection";
import BullMarketSection from "@/components/C101/BullMarketSection";
import GoldIRASection from "@/components/C101/GoldIRASection";
import MarketDataSection from "@/components/C101/MarketDataSection";
import BuyingGuideSection from "@/components/C101/BuyingGuideSection";
import GoldPriceHistorySection from "@/components/C101/GoldPriceHistorySection";
import GoldTaxesSection from "@/components/C101/GoldTaxesSection";
import SpotGold from "@/components/C101/SpotFakeGold";
import JunkSilverSection from "@/components/C101/JunkSilver";
import MeltValueCalculator from "@/components/C101/MeltValueCalculator";
import MoreGuidesSection from "@/components/C101/Guide";
import GoldSilverGlossary from "@/components/C101/Glossary";
import FAQSection from "@/components/C101/FAQ";
import NewsletterSection from "@/components/C101/NewsLetter";

const C101 = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Lithium 101 - Lithium Alloys Guide & Glossary"
        description="Explore the world of Gold & Silver with our comprehensive guide. Learn about gold, silver, precious metals, their properties, uses, and market significance."
        keywords="Gold & Silver 101, Gold, Silver, precious metals, metal properties, lithium glossary, industrial metals"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/C101"
      />
      <Navbar />
      <C101Hero />
      <PriceStrip />
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        <TOC />
        <GoldBasicsSection />
        <PriceMechanicsSection />
        <GoldOwnershipSection />
        <SilverSection />
        <BullMarketSection />
        <GoldIRASection />
        <MarketDataSection />
        <BuyingGuideSection />
        <GoldPriceHistorySection />
        <GoldTaxesSection />
        <SpotGold />
        <JunkSilverSection />
        <MeltValueCalculator />
        <MoreGuidesSection />
        <GoldSilverGlossary />
        <FAQSection />
        {/* <NewsletterSection /> */}
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default C101;
