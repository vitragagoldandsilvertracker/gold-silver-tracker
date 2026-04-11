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

const home = () => {
  return (
    <div>
      <SEO
        title="Gold & Silver Tracker - Real-time News, Prices & Analysis"
        description="Stay ahead with real-time Gold & Silver market news, price updates, and in-depth analysis. Get accurate insights into the gold and silver market trends."
        keywords="Gold prices, Silver prices, Gold & Silver news, Gold & Silver market analysis, Precious metals, Gold trading, Silver trading, Gold & Silver updates, Gold & Silver investment, Real-time precious metals updates, investment"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/"
      />

      <Navbar />
      <div className="mt-[90px]">
        <StocksMarquee />
      </div>

      <Hero />

      {/* 3 cols  */}

      <div className="flex flex-col md:flex-row gap-6 px-3 md:px-10 lg:px-12 py-8 mb-8">
        <div className="flex flex-col gap-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-9 gap-4 md:gap-x-6 ">
            <div className="md:col-span-3 border border-black/10 rounded-lg pl-2 pt-3 pr-3 ">
              <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
                Gold & Silver Price Chart
              </h1>
              <TVLithiumCFD />
            </div>
            <div className="md:col-span-6 border border-black/10 rounded-lg pl-2 pt-3 pb-3 pr-3 ">
              <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
                Prices
              </h1>
              <div className="border border-black/10 rounded-lg">
                <DirectHomeLithiumPrice />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-9 md:gap-4 md:gap-x-6 md:w-full ">
            <div className="md:col-span-9 border border-black/10 rounded-lg pl-2 pt-3 pr-3">
              <div className="flex justify-between items-center mb-3 border-b border-black/10 pb-1">
                <h1 className="text-[21px] cambay font-bold">
                  Recent Canadian Company Insider Transactions
                </h1>
                <a
                  href="/investments"
                  className="text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  view all
                </a>
              </div>
              <HomeInsiderTransactions />
            </div>
          </div>
          <LatestNews />
        </div>

        <div className="w-full lg:w-[24%] flex flex-col space-y-6">
          <div className="border border-black/10 rounded-lg pl-2 pt-3 pr-3">
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Gold & Silver Futures
            </h1>
            <TVLithium />
          </div>

          <Substacks />

          <DailyNewsletterAd />
        </div>
      </div>

      {/* 2 cols  */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-3 md:px-10 lg:px-12 py-8 mb-8">
        {/* <div className="grid grid-col-9 gap-6 px-3 md:px-10 lg:px-12 py-8 mb-8"> */}
        <div className="w-full lg:w-[76%] flex flex-col space-y-12">
          <PressReleaseNews sliceVal={8} />
          <StockNews sliceVal={5} />
        </div>

        <div className="w-full lg:w-[26%] space-y-5">
          <DirectLithiumPrice />
          {/* <LithiumTradingviewChart /> */}
          <PopularIntradayReturn />
          <PopularTools />
          {/* <DailyNewsletterAd /> */}
          {/* <Substacks /> */}
        </div>
      </div>

      <div className="px-3 md:px-10 lg:px-12 ">
        <MostPopularNews />
      </div>

      {/* Most Followed Stocks Table */}
      <div className="">
        <MostFollowedStocksTable />
      </div>

      {/* Stay ahead section */}
      <div className="mb-8">
        <StayAhead />
      </div>

      {/* footer -------------------------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default home;
