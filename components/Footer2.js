import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const Footer2 = () => {
  return (
    <div className="bg-accent text-white w-full py-8 pb-10">
      <div className="container flex flex-col justify-center items-center mx-auto text-center px-3 space-y-4">
        {/* Logo and Title */}
        <div className="w-full flex justify-center items-center mb-4">
          {/* Added margin-bottom (mb-6) for spacing */}
          <Image
            className="" // Adjusting size for different screens
            src="/Goldsilver_logo.png"
            alt="Gold & Silver Tracker"
            width={140} // Adjust as per image dimensions
            height={10}
            priority // Optimize loading
          />
        </div>

        {/* Contact Email */}
        <div className="flex flex-wrap justify-center items-center space-x-2 text-sm md:text-base">
          <MdEmail className="text-lg md:text-xl" />{" "}
          {/* Icon size adjusts with screen */}
          <span>info@goldandsilvertracker.com</span>
        </div>

        {/* Sister Sites */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs md:text-sm">
          <a href="https://www.lithiumtracker.com/" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80 hover:opacity-100">Lithium Tracker</a>
          <span className="opacity-40">|</span>
          <a href="https://www.coppertracker.com/" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80 hover:opacity-100">Copper Tracker</a>
          <span className="opacity-40">|</span>
          <a href="https://www.nickelmetaltracker.com/" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80 hover:opacity-100">Nickel Metal Tracker</a>
          <span className="opacity-40">|</span>
          <a href="https://www.uraniumtracker.com/" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80 hover:opacity-100">Uranium Tracker</a>
          <span className="opacity-40">|</span>
          <a href="https://www.pgmtracker.com/" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80 hover:opacity-100">PGM Tracker</a>
          <span className="opacity-40">|</span>
          <a href="https://www.goldandsilvertracker.com/" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80 hover:opacity-100">Gold & Silver Tracker</a>
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
