import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import DataHero from "@/components/Data/DataHero";
// import DPricePremium from "@/components/Data/DPricePremium";
// import DDemandDatabase from "@/components/Data/DDemandDatabase";
// import TabsSection from "@/components/Data/TabSection";
import Footer from "@/components/Footer";
// import DSupply from "@/components/Data/DSupply";
// import DWPICSupply from "@/components/Data/DWPICSupply";
import SEO from "@/components/SEO";
import SecNav from "@/components/Data/SecNav";
import BreadCrumbs from "@/components/Data/BreadCrumbs";
import PricesSection from "@/components/Data/PricesSection";
import MacroSection from "@/components/Data/MacroSection";
import PhysicalSection from "@/components/Data/PhysicalSection";
import CotSection from "@/components/Data/CotSection";
import DemandSection from "@/components/Data/DemandSection";
import SilverSection from "@/components/Data/SilverSection";
import ETFS from "@/components/Data/ETFS";
import MinersSection from "@/components/Data/MinersSection";
import SentimentSection from "@/components/Data/SentimentSection";
import NewsCTA from "@/components/Data/NewsCTA";
import FAQ from "@/components/Data/FAQ";

const Data = () => {
  // const { query } = useRouter();
  // const currentTab = query.tab || "priceandpremiums";

  return (
    <div className="mt-20">
      <SEO
        title="Gold & Silver Market Data - Price Trends, Supply & Demand Insights"
        description="Access comprehensive Gold & Silver market data, including price trends, supply and demand metrics, and industry analysis. Our detailed datasets provide the insights you need for informed decision-making in the Gold & Silver market."
        keywords="Gold & Silver market data, price trends, Gold & Silver supply and demand, industry analysis, Gold & Silver research, market insights, Gold & Silver, data analytics"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/data"
      />
      <BreadCrumbs />
      <Navbar />
      <DataHero />
      <SecNav />
      <PricesSection />
      <MacroSection />
      <PhysicalSection />
      <CotSection />
      <DemandSection />
      <SilverSection />
      <ETFS />
      <MinersSection />
      <SentimentSection />
      <NewsCTA />
      <FAQ />
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Data;
