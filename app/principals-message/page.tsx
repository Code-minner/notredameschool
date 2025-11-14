import Image from "next/image";

export default function PrincipalsMessage() {
  return (
    <div className="bg-gray-50 w-full">
      {/* HEADER SECTION */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Principal’s Message
          </h1>
          <p className="text-lg text-gray-600 mt-3 leading-relaxed">
            A welcome address from our school leadership — committed to
            excellence, inclusion, and lifelong learning.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* LEFT – PRINCIPAL PHOTO */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="bg-white p-4 rounded-xl shadow-md border">
            <Image
              src="/Carmen2.jpg"
              alt="Principal Dr. Patricia Smith"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="mt-4 text-center">
              <p className="text-xl font-bold text-gray-800">Dr. Patricia Smith</p>
              <p className="text-sm text-gray-500">Principal, Notre Dame School</p>
            </div>
          </div>
        </div>

        {/* RIGHT – MESSAGE */}
        <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">

          <p className="text-lg">
            Welcome to <strong>Notre Dame School</strong> — a community where
            every learner is valued, every milestone is celebrated, and every
            individual’s potential is nurtured with dignity and purpose.
          </p>

          <p>
            For more than six decades, Notre Dame School has stood as a beacon of
            compassionate, faith-centered, and inclusive education for students
            with developmental disabilities. Our mission is rooted in recognizing
            the dignity and unique gifts of every student, while providing
            individualized learning experiences that inspire growth and
            independence.
          </p>

          <p>
            As Principal, I am honored to lead a dedicated team of educators who
            ensure that every classroom fosters academic progress, emotional
            stability, spiritual enrichment, and a strong sense of belonging.
            Through evidence-based instruction, adaptive learning strategies, and
            a warm school community, we guide each student toward meaningful
            achievements.
          </p>

          <p>
            I work closely with our <strong>Head of Grade Administration,
            Prof. Jim Lookman</strong>, whose vast experience and strong academic
            leadership help support our curriculum structure and classroom
            innovation. His role is essential in ensuring continuity, quality, and
            excellence across all grade levels.
          </p>

          <p>
            Notre Dame School’s holistic approach includes hands-on learning,
            community involvement, transition programs, and faith-driven values
            that prepare our students to become confident, capable, and engaged
            members of society.
          </p>

          <p>
            We warmly welcome families, visitors, and partners to learn more
            about our programs and discover what makes Notre Dame School a place
            of hope, excellence, and transformative education.
          </p>

          <div className="pt-6">
            <p className="font-semibold text-gray-900">Sincerely,</p>
            <p className="font-semibold text-gray-900">Dr. Patricia Smith</p>
            <p className="text-sm text-gray-500">Principal, Notre Dame School</p>

            <p className="mt-4 font-semibold text-gray-900">Prof. Jim Lookman</p>
            <p className="text-sm text-gray-500">
              Head of Grade Administration
            </p>
          </div>

        </div>
      </section>

      {/* CITY BANNER */}
      <div className="w-full mt-10">
        <Image
          src="/footer-img.jpg"
          alt="City landscape banner"
          width={1920}
          height={600}
          className="w-full h-auto object-cover shadow-inner"
        />
      </div>
    </div>
  );
}