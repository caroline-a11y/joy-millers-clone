import Image from "next/image";
import {
  FaSeedling,
  FaBroom,
  FaIndustry,
  FaShieldAlt,
  FaBoxOpen,
  FaTruck,
} from "react-icons/fa";

const steps = [
  {
    number: "1",
    icon: <FaSeedling size={30} />,
    title: "Quality Grain Selection",
    description:
      "We source quality maize from trusted suppliers and farming partners.",
  },
  {
    number: "2",
    icon: <FaBroom size={30} />,
    title: "Cleaning & Sorting",
    description:
      "Every grain undergoes careful cleaning and inspection.",
  },
  {
    number: "3",
    icon: <FaIndustry size={30} />,
    title: "Precision Milling",
    description:
      "Modern equipment ensures consistency and quality.",
  },
  {
    number: "4",
    icon: <FaShieldAlt size={30} />,
    title: "Fortification",
    description:
      "Essential vitamins and minerals are added to support nutrition.",
  },
  {
    number: "5",
    icon: <FaBoxOpen size={30} />,
    title: "Packaging",
    description:
      "Products are securely packaged to preserve freshness.",
  },
  {
    number: "6",
    icon: <FaTruck size={30} />,
    title: "Distribution",
    description:
      "Delivered to wholesalers, retailers, institutions, and families across Kenya.",
  },
];

export default function OurProcess() {
  return (
    <section id="process" className="relative py-28">

      {/* Background */}
      <Image
        src="/images/fresh-maize.jpeg"
        alt="Our Process"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-/50"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 text-white">
          <h2 className="text-5xl font-bold mb-4">
            OUR PROCESS
          </h2>

          <h3 className="text-3xl font-semibold mb-4">
            From Farm to Family
          </h3>

          <p className="max-w-3xl mx-auto text-lg text-black-200">
            Every grain that enters our facility goes through a carefully
            managed process to ensure the highest standards of food safety
            and quality.
          </p>
        </div>

        {/* Main White Box */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <div className="relative">

            {/* Vertical line */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-green-700"></div>

            <div className="space-y-10">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-8 items-start group hover:bg-gray-50 p-4 rounded-xl transition duration-300"
                >

                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">

                    <div className="w-20 h-20 rounded-full bg-white border-4 border-green-700 flex items-center justify-center text-3xl font-bold text-green-700 shadow-lg group-hover:scale-110 transition">
                      {step.number}
                    </div>

                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-700 flex items-center justify-center shadow">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h3 className="text-3xl font-bold text-black mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-700 text-lg leading-8">
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}