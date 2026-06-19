export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/images/hero.jpeg')",
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Quality Flour Products
          </h1>

          <p className="text-2xl mb-8">
            Delivering Excellence Every Day
          </p>

          <button className="bg-yellow-500 px-8 py-4 rounded-md text-black font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}