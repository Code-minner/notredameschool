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
            A welcome note from our school leadership
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
              alt="Principal Photo"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="mt-4 text-center">
              <p className="text-xl font-bold text-gray-800">Dr. PATRICIA SMITH</p>
              <p className="text-sm text-gray-500">Principal, Notre Dame School</p>
            </div>
          </div>
        </div>

        {/* RIGHT – MESSAGE */}
        <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">

          <p className="text-lg">
            Welcome to Notre Dame School — a place where every learner is valued,
            every gift is honored, and every milestone is celebrated.
          </p>

          <p>
            For more than sixty years, Notre Dame School has been dedicated to
            providing an exceptional, faith-centered education to students with
            developmental disabilities. Our mission begins with recognizing the
            dignity and unique potential of each student, and continues through
            individualized instruction, compassionate guidance, and a community
            built on care and respect.
          </p>

          <p>
            Our teachers and staff are committed to creating an environment
            where students thrive academically, socially, emotionally, and
            spiritually. We believe that every student can achieve meaningful
            growth when supported by research-based instruction, hands-on
            learning, and a community that encourages independence and
            self-confidence.
          </p>

          <p>
            Notre Dame School's program includes innovative teaching methods,
            differentiated lessons, and transition skills that prepare students
            for greater independence and active participation in the
            community. This holistic approach ensures that each child receives
            the support and opportunities they need to reach their potential.
          </p>

          <p>
            I am honored to serve as Principal of this extraordinary community.
            I invite you to explore our campus, meet our dedicated educators,
            and experience the warmth and spirit that make Notre Dame School a
            remarkable place for students and families.
          </p>

          <div className="pt-6">
            <p className="font-semibold text-gray-900">Faithfully,</p>
            <p className="font-semibold text-gray-900">Dr. PATRICIA SMITH</p>
            <p className="text-sm text-gray-500">Principal</p>
          </div>

        </div>
      </section>

      {/* CITY BANNER */}
      <div className="w-full mt-10">
        <Image
          src="/footer-img.jpg"
          alt="City Landscape"
          width={1920}
          height={600}
          className="w-full h-auto object-cover shadow-inner"
        />
      </div>
    </div>
  );
}
