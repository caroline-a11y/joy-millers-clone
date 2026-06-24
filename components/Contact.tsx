export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h4 className="text-green-700 uppercase font-semibold">
            Contact Us
          </h4>

          <h2 className="text-4xl font-bold mt-4">
            Get In Touch
          </h2>
        </div>

        <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border p-4 rounded-lg"
          />

          <button className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}