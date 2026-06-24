import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-yellow-500"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - IMAGES */}
        <div className="space-y-6">

          <Image
            src="/images/nguvu-plus.jpeg"
            alt="Nguvu Plus"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />

          <Image
            src="/images/afya-plus.jpeg"
            alt="Afya Plus"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />

        </div>

        {/* RIGHT SIDE - TEXT CARDS */}
        <div className="space-y-6">

          {/* Heading */}
          <div>
            <h4 className="text-white font-semibold uppercase mb-2">
              About Us
            </h4>

            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted Nutrition for Every Kenyan Home
            </h2>
          </div>

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-700 leading-7">
              FortiCereals Foods Ltd is a Kenyan grain processing company
              committed to producing high-quality fortified maize meal products
              that nourish communities and support national food security.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-yellow-600">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-7">
              To provide nutritious, affordable, and accessible maize meal
              products that improve the wellbeing of Kenyan families.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-yellow-600">
              Our Story
            </h3>
            <p className="text-gray-700 leading-7">
              We believe every meal matters. From carefully selected maize to
              strict quality control, we ensure every product supports stronger,
              healthier communities across Kenya.
            </p>
          </div>

          {/* Button */}
          <button className="bg-green-700 text-white px-8 py-4 rounded-md hover:bg-green-800 transition">
            Read More
          </button>

        </div>

      </div>
    </section>
  );
}