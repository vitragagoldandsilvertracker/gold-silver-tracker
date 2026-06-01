import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SUBSTACKS } from "@/src/api/lithiumAPI";

const FALLBACK_IMG = "/Goldsilver_logo.png";

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

// Skeleton loader row
const SkeletonRow = () => (
  <div className="flex items-start justify-between gap-3 pb-4 border-b border-gray-100 last:border-b-0 animate-pulse">
    <div className="flex flex-col flex-grow gap-2">
      <div className="h-3 w-32 bg-gray-200 rounded" />
      <div className="h-4 w-4/5 bg-gray-200 rounded" />
      <div className="h-3 w-full bg-gray-200 rounded" />
      <div className="h-3 w-5/6 bg-gray-200 rounded" />
      <div className="h-3 w-20 bg-gray-200 rounded mt-1" />
    </div>
    <div className="w-[72px] h-[68px] bg-gray-200 rounded-lg flex-shrink-0" />
  </div>
);

const Substacks = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubstacks = async () => {
      try {
        const response = await fetch(SUBSTACKS);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSubstacks();
  }, []);

  return (
    <div className="border border-black/10 rounded-lg p-3">
      <h2 className="text-[19px] md:text-[21px] cambay font-bold border-b border-gray-200 pb-2 mb-3">
        Gold & Silver Substacks
      </h2>

      {loading && (
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)}
        </div>
      )}

      {!loading && error && (
        <p className="text-sm text-red-500 py-4 text-center">
          Unable to load substacks. Please try again later.
        </p>
      )}

      {!loading && !error && posts.length === 0 && (
        <p className="text-sm text-gray-500 py-4 text-center">
          No posts available at this time.
        </p>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="space-y-4">
          {posts.slice(0, 6).map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-3 pb-4 border-b border-gray-100 last:border-b-0 group cursor-pointer"
            >
              {/* Text content */}
              <div className="flex flex-col flex-grow min-w-0">
                <p className="text-xs font-semibold text-accent mb-0.5 truncate">
                  {post.source}
                </p>
                <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                )}
                {post.date && (
                  <span className="text-xs text-gray-400 mt-1.5">
                    {formatDate(post.date)}
                  </span>
                )}
              </div>

              {/* Thumbnail */}
              <div className="flex-shrink-0 w-[72px] h-[68px] rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={post.image || FALLBACK_IMG}
                  alt={post.title?.slice(0, 30) || "Substack post"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  onError={(e) => {
                    e.target.src = FALLBACK_IMG;
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Substacks;
