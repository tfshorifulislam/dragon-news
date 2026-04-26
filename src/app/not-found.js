import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="text-center max-w-md">
                {/* Icon / Illustration */}
                <div className="text-7xl mb-4">📰</div>

                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>

                {/* Message */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mb-6">
                    Sorry, the news article or page you are looking for doesn’t exist or
                    has been moved.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-[#D72050] text-white rounded-lg shadow hover:bg-[#D72090] transition"
                >
                    Back to Home
                </Link>

                {/* Extra hint */}
                <p className="text-xs text-gray-400 mt-6">
                    Stay updated with the latest breaking news
                </p>
            </div>
        </div>
    );
};

export default NotFound;