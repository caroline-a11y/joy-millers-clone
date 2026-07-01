"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductDetails() {
  const [showNguvuBrand, setShowNguvuBrand] = useState(false);
  const [showAfyaBrand, setShowAfyaBrand] = useState(false);

  return (
    <section id="products" className="relative py-28">
      {/* Background Image */}
      <Image
        src="/images/fresh-maize.jpeg"
        alt="Products background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-20 text-black">
          Our Products
        </h2>

        {/* NGUVU PLUS */}
        <div className="bg-white shadow-lg rounded-2xl p-10 mb-16 text-black">
          <h3 className="text-4xl font-bold text-green-700 mb-4">
            NGUVU PLUS
          </h3>

          <h4 className="text-2xl font-semibold mb-3">
            Strength in Every Meal
          </h4>

          <p className="text-gray-700 leading-8 mb-8">
            Fortified maize meal crafted for families who value energy, nourishment, and quality.
            Nguvu Plus is our premium fortified maize meal designed for hardworking families.
          </p>

          <h4 className="text-2xl font-semibold mb-3">Benefits</h4>
          <ul className="list-disc ml-8 text-gray-700 mb-8">
            <li>Smooth ugali texture</li>
            <li>Fortified vitamins and minerals</li>
            <li>Consistent quality</li>
            <li>Great taste every time</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-3">Sizes Available</h4>
          <p className="text-gray-700 mb-8">
            500g | 1kg | 2kg | 5kg | 10kg | 25kg
          </p>

          <h4 className="text-2xl font-semibold mb-3">Why Choose It</h4>
          <p className="text-gray-700 leading-8 mb-8">
            We are committed to quality, nutrition, and supporting Kenyan families with trusted food products.
          </p>

          <h4 className="text-2xl font-semibold mb-3">Production Process</h4>
          <p className="text-gray-700 leading-8 mb-8">
            Modern milling technology + strict quality control ensures every pack meets high standards.
          </p>

          {/* Toggle Button */}
          <button
            onClick={() => setShowNguvuBrand((prev) => !prev)}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            {showNguvuBrand ? "Hide Brand Details" : "View Brand Details"}
          </button>

          {/* Brand Details */}
          {showNguvuBrand && (
            <div className="mt-8 bg-gray-50 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
              <Image
                src="/images/nguvu-plus.jpeg"
                alt="Nguvu Plus Brand"
                width={700}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-green-700 mb-4">
                  Nguvu Plus
                </h3>
                <p className="text-gray-600 leading-8">
                  Nguvu Plus is our premium fortified maize meal developed for
                  hardworking families who need energy, nourishment, and
                  quality they can trust.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* AFYA PLUS */}
        <div className="bg-white shadow-lg rounded-2xl p-10 text-black">
          <h3 className="text-4xl font-bold text-green-700 mb-4">
            AFYA PLUS
          </h3>

          <h4 className="text-2xl font-semibold mb-3">
            Healthy Living Starts Here
          </h4>

          <p className="text-gray-700 leading-8 mb-8">
            Nutritious fortified maize meal designed to support healthier lifestyles and families.
          </p>

          <h4 className="text-2xl font-semibold mb-3">Benefits</h4>
          <ul className="list-disc ml-8 text-gray-700 mb-8">
            <li>Smooth ugali texture</li>
            <li>Fortified vitamins and minerals</li>
            <li>Consistent quality</li>
            <li>Great taste every time</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-3">Sizes Available</h4>
          <p className="text-gray-700 mb-8">
            500g | 1kg | 2kg | 5kg | 10kg | 25kg
          </p>

          <h4 className="text-2xl font-semibold mb-3">Why Choose It</h4>
          <p className="text-gray-700 leading-8 mb-8">
            Trusted quality maize meal designed for health-conscious families.
          </p>

          <h4 className="text-2xl font-semibold mb-3">Production Process</h4>
          <p className="text-gray-700 leading-8 mb-8">
            Advanced milling + strict hygiene standards ensure top quality.
          </p>

          {/* Toggle Button */}
          <button
            onClick={() => setShowAfyaBrand((prev) => !prev)}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            {showAfyaBrand ? "Hide Brand Details" : "View Brand Details"}
          </button>

          {/* Brand Details */}
          {showAfyaBrand && (
            <div className="mt-8 bg-gray-50 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
              <Image
                src="/images/afya-plus.jpeg"
                alt="Afya Plus Brand"
                width={700}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-green-700 mb-4">
                  Afya Plus
                </h3>
                <p className="text-gray-600 leading-8">
                  Healthy Living Starts Here. Nutritious fortified maize meal
                  developed to support healthier lifestyles and growing
                  families.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}