import Image from "next/image";

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-green-700 uppercase font-semibold">
            Our Brands
          </h4>

          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            Trusted Brands Loved By Families
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We are proud to offer premium brands that deliver quality,
            nutrition, and value to our customers.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Brand 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/images/afya-plus.jpeg"
              alt="Brand 1"
              width={700}
              height={500}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                Afya Plus
              </h3>

              <p className="text-gray-600 leading-8">
               Healthy Living Starts Here
Nutritious fortified maize meal developed to support healthier lifestyles and growing families.
              </p>
            </div>
          </div>

          {/* Brand 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/images/nguvu-plus.jpeg"
              alt="Brand 2"
              width={700}
              height={500}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold text-green-700 mb-4">
                Nguvu plus
              </h3>

              <p className="text-gray-600 leading-8">
                Nguvu Plus is our premium fortified maize meal developed for hardworking families who need energy, nourishment, and quality they can trust.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}