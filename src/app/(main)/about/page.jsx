import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* Icon */}
        <div className="text-6xl mb-4">📰</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to our news platform. We are dedicated to delivering accurate,
          fast, and reliable news from around the world. Our mission is to keep
          you informed with the latest updates in politics, technology, sports,
          entertainment, and more.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          We believe in truth, transparency, and responsible journalism. Our
          editorial team works around the clock to bring you breaking news and
          in-depth stories that matter.
        </p>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#D72050] text-white rounded-lg hover:bg-[#D72080] transition"
        >
          Back to Home
        </Link>

        {/* Footer note */}
        <p className="text-xs text-gray-400 mt-6">
          Stay informed. Stay ahead.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;