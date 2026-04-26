import Link from "next/link";
import React from "react";

const CareerPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="text-6xl mb-4">💼</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Career Opportunities
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          We’re currently not hiring or no job postings are available right now.
          Please check back later for future opportunities.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block px-5 py-3 bg-[#D72050] text-white rounded-lg hover:bg-[#D72080] transition"
        >
          Back to Home
        </Link>

        {/* Footer note */}
        <p className="text-xs text-gray-400 mt-6">
          Thank you for your interest in joining our news team
        </p>
      </div>
    </div>
  );
};

export default CareerPage;