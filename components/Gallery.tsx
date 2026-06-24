import Image from "next/image";

const products = [
  {
    title: "Wheat Flour",
    image: "/images/family.jpeg",
    description: "Premium quality wheat flour for baking and cooking.",
  },
  {
    title: "Fresh maize harvest",
    image: "/images/fresh-maize.jpeg",
    description: "Nutritious maize flour processed to the highest standards.",
  },
  {
    title: "Milling Operations",
    image: "/images/milling.jpg",
    description: "Quality feed products formulated for healthy livestock.",
  },
  {
    title: "Nguvu Plus Packaging",
    image: "/images/nguvu-plus.jpeg",
    description: "A variety of specialized products tailored to customer needs.",
  },
  {
    title: "Afya Plus Packaging",
    image: "/images/afya-plus.jpeg",
    description: "A variety of specialized products tailored to customer needs.",
  },
  {
    title: "Retail",
    image: "/images/retail.jpg",
    description: "A variety of specialized products tailored to customer needs.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h4 className="text-green-700 font-semibold uppercase">
            Gallery
          </h4>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Quality Products You Can Trust
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
                  Learn More
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}