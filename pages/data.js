import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import DataHero from "@/components/Data/DataHero";
import DPricePremium from "@/components/Data/DPricePremium";
import DDemandDatabase from "@/components/Data/DDemandDatabase";
import TabsSection from "@/components/Data/TabSection";
import Footer from "@/components/Footer";
import DSupply from "@/components/Data/DSupply";
import DWPICSupply from "@/components/Data/DWPICSupply";
import SEO from "@/components/SEO";

const Data = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "priceandpremiums";

  return (
    <div>
      <SEO
        title="Gold & Silver Market Data - Price Trends, Supply & Demand Insights"
        description="Access comprehensive Gold & Silver market data, including price trends, supply and demand metrics, and industry analysis. Our detailed datasets provide the insights you need for informed decision-making in the Gold & Silver market."
        keywords="Gold & Silver market data, price trends, Gold & Silver supply and demand, industry analysis, Gold & Silver research, market insights, Gold & Silver, data analytics"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/data"
      />
      <Navbar />
      <DataHero />
      {/* tabs  */}
      <div>
        <TabsSection />
        <div className="mt-6">
          {currentTab === "priceandpremiums" && <DPricePremium />}
          {currentTab === "demanddatabase" && <DDemandDatabase />}
          {currentTab === "supply" && <DSupply />}
          {currentTab === "wpicsupply" && <DWPICSupply />}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Data;
