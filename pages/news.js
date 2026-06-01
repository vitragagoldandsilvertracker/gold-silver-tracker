import Footer from "@/components/Footer";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import Substacks from "@/components/Home/Substacks";
import Navbar from "@/components/Navbar";
import Hero from "@/components/News/Hero";
import React from "react";
import MoreNews from "@/components/News/MoreNews";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import SEO from "@/components/SEO";
import DirectLithiumPrice from "@/components/Home/DirectLithiumPrice";

const news = () => {
  return (
    <div>
      <SEO
        title="Gold & Silver News - Latest Industry News, Stock Trends & Press Releases"
        description="Stay updated with the latest news on Gold & Silver, featuring company press releases, stock market trends, and real-time industry developments. Get accurate insights into financial updates, market movements, and key events shaping the Gold & Silver sector."
        keywords="Gold & Silver news,Company Press Releases, Stock news, Market news, Trending stock news,Company news"
        canonicalUrl="https://www.goldandsilvertracker.com/news/"
      />
      <Navbar />
      <div className="mt-[126px]">
        <Hero />
      </div>

      <div className="flex flex-col md:flex-row justify-between flex-wrap px-3 md:px-10 lg:px-16 mt-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-9 gap-4 md:gap-x-6">
          <div className="md:col-span-6">
            <div className="flex flex-col gap-4">
              <LatestNews />
              <PressReleaseNews sliceVal={6} />
              <StockNews sliceVal={3} />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex flex-col gap-5">
              <DailyNewsletterAd />
              <Substacks />
              <PopularIntradayReturn />
            </div>
          </div>
        </div>
      </div>

      {/* More News Section */}
      <div className="">
        <MoreNews />
      </div>

      {/* Footer Section */}
      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default news;
