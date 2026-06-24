"use client";

import Image from "next/image";
import { useState } from "react";
import ApplyModal from "@/components/ApplyModal";

export default function CareersPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  return (
    <main>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">

        <Image
            src="/images/career2.jpeg"
            alt="Careers"
            fill
            className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white px-6 max-w-4xl">
          <h1 className="text-6xl font-bold mb-8">
            Build Your Future With Us
          </h1>

          <p className="text-2xl mb-6">
            Join a team that's helping feed a growing nation.
          </p>

          <p className="text-lg leading-8 mb-10">
            At FortiCereals Foods Ltd, our people are at the heart of everything
            we do. We are always looking for passionate, talented, and hardworking
            individuals who share our commitment to quality, innovation, and service.
          </p>

          <button
            onClick={() => {
              document
                .getElementById("openings")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-green-700 px-8 py-4 rounded-lg hover:bg-green-800 transition"
          >
            View Open Positions
          </button>
        </div>

      </section>

      {/* WHY WORK WITH US */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-6">
            Why Work With Us
          </h2>

          <h3 className="text-3xl text-center text-green-700 mb-12">
            More Than a Workplace
          </h3>

          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto leading-8 mb-16">
            We believe that when our employees grow, our company grows.
            We are committed to creating a safe, supportive, and rewarding
            environment where every team member can thrive.
          </p>

        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section id="openings" className="py-28 bg-yellow-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-4">
            Current Openings
          </h2>

          <p className="text-center text-gray-600 mb-16">
            This section will be updated whenever we're recruiting.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* JOBS */}
            {[
              {
                title: "Miller",
                desc: "Operate milling machinery, monitor production quality, and ensure efficient processing operations.",
              },
              {
                title: "Sales & Marketing Executive",
                desc: "Drive sales growth, build customer relationships, and expand our market presence.",
              },
              {
                title: "Quality Assurance Officer",
                desc: "Ensure all products meet food safety and quality standards.",
              },
              {
                title: "Production Assistant",
                desc: "Support daily production activities and maintain operational efficiency.",
              },
            ].map((job) => (
              <div
                key={job.title}
                className="bg-white p-10 rounded-2xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-green-700 mb-4">
                  {job.title}
                </h3>

                <p className="text-gray-700 mb-6">{job.desc}</p>

                <p className="mb-6">📍 Location: Ruiru</p>

                <button
                  onClick={() => {
                    setSelectedPosition(job.title);
                    setIsOpen(true);
                  }}
                  className="bg-green-700 text-white px-6 py-3 rounded-lg"
                >
                  Apply Now
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EARLY CAREERS */}
      <section className="py-28 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-8">
            Start Your Journey With Us
          </h2>

          <p className="text-xl mb-10">
            We welcome applications from:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>✓ Recent Graduates</div>
            <div>✓ Interns</div>
            <div>✓ Apprentices</div>
            <div>✓ Industrial Attachment Students</div>
            <div>✓ Entry-Level Professionals</div>
          </div>

        </div>
      </section>

      {/* CULTURE */}
      <section className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            The People Behind FortiCereals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg italic">
              "Every day I know I'm contributing to something meaningful."
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg italic">
              "FortiCereals has given me opportunities to learn and grow."
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg italic">
              "We're one team working towards one purpose."
            </div>
          </div>

        </div>
      </section>

      {/* APPLY MODAL */}
      <ApplyModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position={selectedPosition}
      />

    </main>
  );
}