import Image from "next/image";

export default function EmployeeGallery() {
  const images = [
    "/images/employees/factory.jpg",
    "/images/employees/team.jpg",
    "/images/employees/training.jpg",
    "/images/employees/community.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">
        Employee Gallery
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src={img}
              alt="employee"
              width={400}
              height={300}
              className="object-cover hover:scale-110 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}