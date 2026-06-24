import Link from "next/link";
import Image from "next/image"; 

<Link
  href="/careers"
  className="bg-green-700 text-white px-8 py-4 rounded-lg"
>
  Explore Careers
</Link>

export default function CareersPreview() {
  return (
    <section className="relative py-28">

      {/* Background */}
      <Image
        src="/images/career2.jpeg"
        alt="Careers"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-12">

          <h4 className="text-green-700 uppercase font-semibold mb-4">
            Careers
          </h4>

          <h2 className="text-5xl font-bold text-black mb-6">
            Build Your Future With Us
          </h2>

          <p className="text-gray-700 leading-8 text-lg mb-10">
            At FortiCereals Foods Ltd, our people are our greatest asset.
            We offer opportunities for growth, learning, and meaningful work
            that impacts families and communities across Kenya.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-green-700 mb-2">
                Why Work With Us
              </h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-green-700 mb-2">
                We Are Hiring
              </h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-green-700 mb-2">
                Graduate & Internship Program
              </h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-green-700 mb-2">
                Our Culture
              </h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-green-700 mb-2">
                How To Apply
              </h3>
            </div>

          </div>

          <Link
            href="/careers"
            className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition"
          >
            Explore Careers
          </Link>

        </div>

      </div>

    </section>
  );
}