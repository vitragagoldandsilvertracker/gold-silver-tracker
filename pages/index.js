import React from "react";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import Footer from "@/components/Footer";
import TVLithiumCFD from "@/components/Home/TVLithiumCFD";
import TVLithium from "@/components/Home/TVLithium";
import DirectLithiumPrice from "@/components/Home/DirectLithiumPrice";
import DirectHomeLithiumPrice from "@/components/Home/DirectHomeLithiumPrice";
import HomeInsiderTransactions from "@/components/Home/HomeInsiderTransactions";
import SEO from "@/components/SEO";
import StocksMarquee from "@/components/Home/StocksMarquee";
import MostFollowedStocksTable from "@/components/Home/MostFollowedStocksTable";
import Head from "next/head";

// Build the full JSON-LD graph with live price data
function buildJsonLd(goldSpot, silverSpot, dateModified) {
  const siteUrl = "https://www.goldandsilvertracker.com";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#org`,
        name: "Gold & Silver Tracker",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/Goldsilver_logo.png`,
          width: 200,
          height: 60,
        },
        sameAs: [
          "https://www.uraniumtracker.com/",
          "https://www.lithiumtracker.com/",
          "https://www.coppertracker.com/",
          "https://www.nickelmetaltracker.com/",
          "https://www.pgmtracker.com/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Gold & Silver Tracker",
        inLanguage: "en-US",
        publisher: { "@id": `${siteUrl}/#org` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/news?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Gold & Silver Price Today: Live Charts & Market Data",
        description: "Track live gold and silver spot prices, futures, mining stocks, and insider transactions.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#org` },
        datePublished: "2023-01-01",
        dateModified,
      },
      {
        "@type": "Dataset",
        "@id": `${siteUrl}/#dataset-gold-price`,
        name: "Gold Spot Price",
        description: "Live gold spot price in USD per ounce, updated daily.",
        license: `${siteUrl}/disclaimer`,
        creator: { "@id": `${siteUrl}/#org` },
        dateModified,
        keywords: ["gold price", "spot price", "gold", "precious metals"],
        variableMeasured: [
          {
            "@type": "PropertyValue",
            name: "Gold Spot Price",
            unitCode: "USD/oz",
            value: goldSpot?.price ?? "N/A",
          },
          {
            "@type": "PropertyValue",
            name: "Daily Change",
            unitCode: "USD/oz",
            value: goldSpot?.price_change ?? "0",
          },
          {
            "@type": "PropertyValue",
            name: "Daily Change Percent",
            unitCode: "%",
            value: goldSpot?.price_change_percent ?? "0%",
          },
        ],
      },
      {
        "@type": "Dataset",
        "@id": `${siteUrl}/#dataset-silver-price`,
        name: "Silver Spot Price",
        description: "Live silver spot price in USD per ounce, updated daily.",
        license: `${siteUrl}/disclaimer`,
        creator: { "@id": `${siteUrl}/#org` },
        dateModified,
        keywords: ["silver price", "spot price", "silver", "precious metals"],
        variableMeasured: [
          {
            "@type": "PropertyValue",
            name: "Silver Spot Price",
            unitCode: "USD/oz",
            value: silverSpot?.price ?? "N/A",
          },
          {
            "@type": "PropertyValue",
            name: "Daily Change",
            unitCode: "USD/oz",
            value: silverSpot?.price_change ?? "0",
          },
          {
            "@type": "PropertyValue",
            name: "Daily Change Percent",
            unitCode: "%",
            value: silverSpot?.price_change_percent ?? "0%",
          },
        ],
      },
    ],
  };
}

const home = ({ goldSpot, silverSpot, jsonLd }) => {
  return (
    <div>
      <SEO
        title="Gold & Silver Price Today: Live Charts & Market Data"
        description="Track live gold and silver spot prices, futures, mining stocks, and insider transactions. Real-time precious metals data — gold-silver ratio, central bank demand, ETF holdings, and more."
        keywords="Gold prices, Silver prices, Gold & Silver news, Gold & Silver market analysis, Precious metals, Gold trading, Silver trading"
        canonicalUrl="https://www.goldandsilvertracker.com/"
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {(goldSpot || silverSpot) && (
        <div className="sr-only" aria-label="Live gold and silver spot price data">
          <p>
            {goldSpot && `Gold Spot Price: $${goldSpot.price} per ounce. Daily change: $${goldSpot.price_change} (${goldSpot.price_change_percent}). `}
            {silverSpot && `Silver Spot Price: $${silverSpot.price} per ounce. Daily change: $${silverSpot.price_change} (${silverSpot.price_change_percent}). `}
            Data as of {goldSpot?.date || silverSpot?.date}.
          </p>
        </div>
      )}

      <Navbar />
      <div className="mt-[120px]">
        <StocksMarquee />
      </div>

      <Hero />

      <div className="flex flex-col md:flex-row gap-6 px-3 md:px-3 2xl:px-12 py-8 mb-8">
        <div className="lg:w-[76%] flex flex-col gap-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-9 gap-4 md:gap-x-6 ">
            <div className="md:col-span-3 border border-black/10 rounded-lg pl-2 pt-3 pr-3 overflow-hidden">
              <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
                Gold Price Chart
              </h2>
              <TVLithiumCFD />
            </div>
            <div className="md:col-span-6 border border-black/10 rounded-lg pl-2 pt-3 pb-3 pr-3 ">
              <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
                Prices
              </h2>
              <div className="border border-black/10 rounded-lg">
                <DirectHomeLithiumPrice />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-9 md:gap-4 md:gap-x-6 md:w-full ">
            <div className="md:col-span-9 border border-black/10 rounded-lg pl-2 pt-3 pr-3">
              <div className="flex justify-between items-center mb-3 border-b border-black/10 pb-1">
                <h2 className="text-[21px] cambay font-bold">
                  Gold & Silver Company Insider Transactions
                </h2>
                <a href="/investments" className="text-sm text-accent hover:text-accent/80 transition-colors">
                  view all
                </a>
              </div>
              <HomeInsiderTransactions />
            </div>
          </div>

          <LatestNews />
        </div>

        <div className="w-full lg:w-[24%] flex flex-col space-y-6 xl:space-y-2 2xl:space-y-6">
          <div className="border border-black/10 rounded-lg pl-2 pt-3 pr-3 pb-3 overflow-hidden">
            <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Silver price chart
            </h2>
            <TVLithium />
          </div>

          <Substacks />
          <DailyNewsletterAd />
          <PopularIntradayReturn />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 px-3 md:px-3 2xl:px-12 py-8 mb-8">
        <div className="w-full lg:w-[76%] flex flex-col space-y-12">
          <PressReleaseNews sliceVal={8} />
          <StockNews sliceVal={5} />
        </div>

        <div className="w-full lg:w-[26%] space-y-5">
          <div className="border border-black/10 rounded-lg pt-3 pl-3 pb-2 pr-1">
            <DirectLithiumPrice />
          </div>
          <PopularTools />
        </div>
      </div>

      <div className="px-3 md:px-3 2xl:px-12 py-8 ">
        <MostPopularNews />
      </div>

      <div className="px-3 md:px-3 2xl:px-12 py-8 mb-8">
        <MostFollowedStocksTable />
      </div>

      <div className="mb-8">
        <StayAhead />
      </div>

      <Footer />
    </div>
  );
};

export default home;

export async function getServerSideProps() {
  const dateModified = new Date().toISOString();
  let goldSpot = null;
  let silverSpot = null;

  try {
    const res = await fetch("https://metal-scrapper.onrender.com/commodities", {
      headers: { "Accept": "application/json" },
      signal: AbortSignal.timeout(5000),
    });

    if (res.ok) {
      const data = await res.json();
      const gold = Array.isArray(data)
        ? data.find((i) => i.name === "Gold" || i.name === "gold")
        : null;
      const silver = Array.isArray(data)
        ? data.find((i) => i.name === "Silver" || i.name === "silver")
        : null;

      if (gold) {
        goldSpot = {
          price: parseFloat(gold.price || 0).toFixed(4),
          price_change: parseFloat(gold.day_change || 0).toFixed(4),
          price_change_percent: gold.percent_change
            ? `${parseFloat(gold.percent_change).toFixed(2)}%`
            : "0.00%",
          date: dateModified,
        };
      }

      if (silver) {
        silverSpot = {
          price: parseFloat(silver.price || 0).toFixed(4),
          price_change: parseFloat(silver.day_change || 0).toFixed(4),
          price_change_percent: silver.percent_change
            ? `${parseFloat(silver.percent_change).toFixed(2)}%`
            : "0.00%",
          date: dateModified,
        };
      }
    }
  } catch (err) {
    console.warn("SSR gold/silver price fetch failed:", err.message);
  }

  const jsonLd = buildJsonLd(goldSpot, silverSpot, dateModified);

  return {
    props: {
      goldSpot,
      silverSpot,
      jsonLd,
    },
  };
}