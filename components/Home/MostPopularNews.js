import { useEffect, useState } from "react";
import Link from "next/link";
import { STOCK_NEWS } from "@/src/api/lithiumAPI";

const MostPopularNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching news articles from the local database API
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(STOCK_NEWS);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Most Popular News data:", data);

        // Slice to get news starting from 6th item and limit to 8 items
        setNews(Array.isArray(data) ? data.slice(10, 18) : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching most popular news:", error);
        setError(error.message);
        setNews([]);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="mb-14 md:mb-10 border border-black/10 rounded-lg pl-2 pt-3 pr-3">
        <h2 className="text-[21px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-4">
          Most Popular
        </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center w-full border-b border-gray-300 pb-7 animate-pulse"
            >
              <div className="flex flex-col items-center justify-center mr-4">
                <div className="h-8 w-6 bg-zinc-200 rounded" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-5 w-14 bg-zinc-200 rounded-sm" />
                <div className="h-4 w-full bg-zinc-200 rounded" />
                <div className="h-4 w-4/5 bg-zinc-200 rounded" />
                <div className="h-3 w-32 bg-zinc-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-14 md:mb-10">
        <h2 className="text-[21px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-4">
          Most Popular
        </h2>
        <div className="text-center py-8 text-red-500">
          Error loading news: {error}
        </div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="mb-14 md:mb-10">
        <h2 className="text-[21px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-4">
          Most Popular
        </h2>
        <div className="text-center py-8 text-gray-500">
          No popular news available at this time
        </div>
      </div>
    );
  }

  return (
    <div className="mb-14 md:mb-10 border border-black/10 rounded-lg pl-2 pt-3 pr-3 ">
      <h2 className="text-[21px] font-bold cambay text-black1/80 border-b border-gray-300 pb-2 mb-4">
        Most Popular
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
        {news.map((item, index) => (
          <Link
            href={item.url}
            target="_blank"
            key={item.id || index}
            className="flex items-center group w-full border-b border-gray-300 pb-7"
          >
            {/* Number vertically aligned */}
            <div className="flex flex-col items-center justify-center mr-4">
              <span className="text-3xl font-bold text-black/30 group-hover:text-accent">
                {index + 1}
              </span>
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col">
              {/* Ticker Badge */}
              {item.ticker && (
                <div className="mb-2">
                  <span className="bg-accent text-[10px] rounded-sm text-white px-2 py-1">
                    {item.ticker}
                  </span>
                </div>
              )}
              {/* Title */}
              <h3
                className="text-[15px] group-hover:underline transition-all duration-200 font-medium flex-1"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.title}
              </h3>
              {/* Company Name */}
              {item.company_name && (
                <p className="text-[12px] text-gray-600 mt-1">
                  {item.company_name}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostPopularNews;
