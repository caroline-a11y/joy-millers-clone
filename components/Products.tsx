import Image from "next/image";

export default function ProductDetails() {
  return (
    <section
      id="products"
      className="relative py-28"
    >

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
          <p className="text-gray-700 leading-8">
            Modern milling technology + strict quality control ensures every pack meets high standards.
          </p>

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
          <p className="text-gray-700 leading-8">
            Advanced milling + strict hygiene standards ensure top quality.
          </p>

        </div>

      </div>
    </section>
  );
}