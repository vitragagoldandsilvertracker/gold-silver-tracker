import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // For navigation
import { PRESS_RELEASE } from "@/src/api/lithiumAPI";

const PressRelease = ({ sliceVal }) => {
  const router = useRouter();
  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the press releases from the local API
  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        console.log("Fetching press releases from:", PRESS_RELEASE);
        const res = await fetch(PRESS_RELEASE);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Press releases data:", data);
        setPressReleases(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching press releases:", error);
        setError(error.message);
        setPressReleases([]);
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  // Navigate to a specific press release
  const handleNavigate = (id) => {
    router.push(`/news/press-release/${id}`);
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      console.warn("Invalid date format:", dateString);
      return "";
    }
  };

  if (loading) {
    return (
      <div className="border border-black/10 rounded-lg pl-2 pt-3 pr-3 pb-3">
        <h2 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Gold & Silver Company Press Release
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-7">
            {Array.from({ length: sliceVal }).map((_, index) => (
              <div
                key={index}
                className="flex overflow-hidden border-b border-black/10 pb-4 animate-pulse"
              >
                <div className="flex-1">
                  <div className="h-5 w-14 bg-zinc-200 rounded-sm mb-2" />

                  <div className="h-4 w-full bg-zinc-200 rounded mb-1" />
                  <div className="h-4 w-4/5 bg-zinc-200 rounded mb-1" />
                  <div className="h-4 w-3/5 bg-zinc-200 rounded mb-1" />

                  <div className="h-3 w-36 bg-zinc-200 rounded mb-1" />

                  <div className="h-3 w-20 bg-zinc-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Gold & Silver Company Press Release
        </h2>
        <div className="text-center py-8 text-red-500">
          Error loading press releases: {error}
        </div>
      </div>
    );
  }

  if (pressReleases.length === 0) {
    return (
      <div>
        <h2 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
          Gold & Silver Company Press Release
        </h2>
        <div className="text-center py-8 text-gray-500">
          No press releases available at this time
        </div>
      </div>
    );
  }

  return (
    <div className="border border-black/10 rounded-lg pl-2 pt-3 pr-3">
      {/* Heading */}
      <h2 className="text-[21px] cambay font-bold mb-5 border-b border-black/10 pb-2">
        Gold & Silver Company Press Release
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Vertical List of Press Releases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-7">
          {pressReleases.slice(0, sliceVal).map((release) => (
            <div
              key={release.id}
              className="flex overflow-hidden group cursor-pointer border-b border-black/10 pb-4"
              onClick={() => handleNavigate(release.id)}
            >
              <div className="flex-1">
                {release.ticker && (
                  <div className="mb-2">
                    <span className="bg-accent text-[11px] rounded-sm text-white px-2 py-1">
                      {release.ticker}
                    </span>
                  </div>
                )}

                <h3 className="text-[15px] leading-6 mb-1 font-medium group-hover:underline">
                  {release.title && release.title.length > 120
                    ? `${release.title.substring(0, 120)}...`
                    : release.title || "No title available"}
                </h3>

                {release.company_name && (
                  <p className="text-[13px] text-gray-600 mb-1">
                    {release.company_name}
                  </p>
                )}

                <div className="text-[12px] text-gray-500">
                  {formatDate(release.date || release.created_at)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressRelease;
