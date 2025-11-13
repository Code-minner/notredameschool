export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601327603262-5c4f40a7a6b3?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Notre Dame School
          </h1>
          <p className="text-lg max-w-2xl">
            Inspiring academic excellence and moral integrity in every student.
          </p>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-6 max-w-3xl text-center text-gray-700">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Our Commitment
        </h2>
        <p className="text-lg leading-relaxed">
          At Notre Dame School, we believe in holistic education — developing
          the mind, body, and spirit. Our goal is to empower every student with
          the skills, confidence, and compassion needed to shape a better
          tomorrow.
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="flex gap-6 mb-16">
        <a
          href="/principals-message"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Principal’s Message
        </a>
        <a
          href="/mission-vision"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          Mission & Vision
        </a>
      </section>
    </main>
  );
}
