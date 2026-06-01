import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const sisterSites = [
  {
    name: "Lithium Tracker",
    dot: "#22c55e",
    url: "https://www.lithiumtracker.com/",
  },
  {
    name: "Copper Tracker",
    dot: "#ef4444",
    url: "https://www.coppertracker.com/",
  },
  {
    name: "Nickel Metal Tracker",
    dot: "#60a5fa",
    url: "https://www.nickelmetaltracker.com/",
  },
  {
    name: "Uranium Tracker",
    dot: "#facc15",
    url: "https://www.uraniumtracker.com/",
  },
  {
    name: "PGM Tracker",
    dot: "#a78bfa",
    url: "https://www.pgmtracker.com/",
  },
  {
    name: "Gold & Silver Tracker",
    dot: "#C9A84C",
    url: "https://www.goldandsilvertracker.com/",
    active: true,
  },
];

const Footer2 = () => {
  return (
    <div className="bg-accent text-white w-full py-8 pb-10">
      <div className="container flex flex-col justify-center items-center mx-auto text-center px-3 space-y-4">
        {/* Logo and Title */}
        <div className="w-full flex justify-center items-center mb-4">
          <Image
            className=""
            src="/Goldsilver_logo.png"
            alt="Gold & Silver Tracker"
            width={140}
            height={10}
            priority
          />
        </div>

        {/* Contact Email */}
        <div className="flex flex-wrap justify-center items-center space-x-2 text-sm md:text-base">
          <MdEmail className="text-lg md:text-xl" />
          <span>info@goldandsilvertracker.com</span>
        </div>

        {/* Sister Sites Network Cards */}
        <div className="w-full mt-6">
          <p className="text-[10px] font-semibold tracking-widest text-white/50 uppercase mb-1">
            Commodities Tracker Network
          </p>
          <h3 className="text-lg font-bold text-white mb-1">
            Explore our suite of real-time commodity trackers
          </h3>
          <p className="text-xs text-white/60 mb-5">
            Built for investors who move fast.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {sisterSites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-start p-3 rounded-xl border transition-colors text-left ${
                  site.active
                    ? "border-white/30 bg-white/10 cursor-default pointer-events-none"
                    : "border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full mb-3"
                  style={{ backgroundColor: site.dot }}
                />
                <span className="text-xs font-semibold text-white leading-tight mb-2">
                  {site.name}
                </span>
                {site.active ? (
                  <span className="text-xs text-white/50">Current site</span>
                ) : (
                  <span className="text-xs text-[#C9A84C] font-medium">
                    Visit →
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto border-t border-white/40 my-4"></div>

        {/* Bottom Links */}
        <div className="text-xs md:text-sm lg:text-base flex flex-wrap justify-center space-x-2">
          <span>© 2026 Gold & Silver Tracker</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Disclaimer</span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
