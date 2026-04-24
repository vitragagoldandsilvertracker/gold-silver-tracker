import React from "react";
import { useRouter } from "next/router";

const DailyNewsletterAd = () => {
  const router = useRouter();

  const handleSubscribe = () => {
    router.push("/data"); // Redirects to the signup page
  };

  return (
    <div className="bg-gradient-to-b from-accent to-accent/50 rounded-lg p-9 md:p-3 2xl:p-9">
      {/* Heading Section */}
      <h2 className="text-white text-3xl xl:text-xl 2xl:text-3xl font-semibold cambay">
<<<<<<< data
        See our <span className="text-white">LATEST</span>
      </h2>
      <h2 className="text-white text-3xl xl:text-xl 2xl:text-3xl font-bold cambay">
        Weekly Data.
=======
        Receive our <span className="text-white">FREE</span>
      </h2>
      <h2 className="text-white text-3xl xl:text-xl 2xl:text-3xl font-bold cambay">
        Weekly Newsletter.
>>>>>>> main
      </h2>

      {/* Button Section */}
      <div className="mt-8 xl:mt-1 2xl:mt-8">
        <button
          onClick={handleSubscribe}
          className="w-full text-sm bg-white hover:bg-white/80 text-black font-bold py-[10px] rounded transition-colors duration-200"
        >
          SEE DATA
        </button>
      </div>
    </div>
  );
};

export default DailyNewsletterAd;
