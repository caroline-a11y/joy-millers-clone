import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <Image
            src="/images/about.jpg"
            alt="About furaha Millers"
            width={700}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h4 className="text-green-700 font-semibold uppercase mb-3">
            About Us
          </h4>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Delivering Quality Milling Products
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            We are committed to producing high-quality flour and related
            products while maintaining excellent standards of service and
            customer satisfaction. Our goal is to provide nutritious and
            affordable products that meet the needs of households and
            businesses.
          </p>

          <button className="bg-green-700 text-white px-8 py-4 rounded-md hover:bg-green-800 transition">
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}