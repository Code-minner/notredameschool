export const metadata = {
  title: "About Us | Notre Dame School",
  description:
    "Learn more about Notre Dame School—our mission, values, community, and long-standing commitment to inclusive education in Dallas.",
};

export default function AboutUs() {
  return (
    <main className="text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/about-hero.jpg"
          alt="Notre Dame School campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold drop-shadow-lg">
            About Notre Dame School
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Who We Are
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Notre Dame School is a faith-based educational community dedicated to
          empowering students with developmental disabilities. Since 1963, our mission
          has been to provide individualized, compassionate, and comprehensive
          education that helps each student grow academically, socially, emotionally,
          and spiritually.
        </p>

        <p className="text-lg leading-relaxed">
          Guided by the School Sisters of Notre Dame, we believe that every child is
          created in the image of God and deserves the opportunity to develop their
          unique gifts. With over sixty years of service, Notre Dame School remains a
          leading institution in Dallas for inclusive, faith-driven education.
        </p>
      </section>

      {/* VALUES GRID */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Sponsorship & Ministry
              </h3>
              <p className="leading-relaxed">
                Inspired by the School Sisters of Notre Dame, our mission reflects a
                commitment to educating the whole person through faith-driven service
                and academic excellence.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Individual Growth
              </h3>
              <p className="leading-relaxed">
                We honor the unique gifts of every student. Through individualized
                instruction, we help each learner reach their full potential in an
                atmosphere of love and genuine concern.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Community Inclusion
              </h3>
              <p className="leading-relaxed">
                Students thrive when connected with their communities. We promote
                inclusion through meaningful activities that build independence,
                confidence, and social engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Life at Notre Dame School
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-56 rounded-lg overflow-hidden shadow-md">
            <img
              src="/group.jpg"
              alt="Students learning together"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-center py-2 text-sm">
              Student Group
            </div>
          </div>

          <div className="relative h-56 rounded-lg overflow-hidden shadow-md">
            <img
              src="/learning.jpg"
              alt="Inclusive classroom activities"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-center py-2 text-sm">
              Learning Together
            </div>
          </div>

          <div className="relative h-56 rounded-lg overflow-hidden shadow-md">
            <img
              src="/classroom.jpg"
              alt="Students in class"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-center py-2 text-sm">
              Classroom
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY SECTION */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our History</h2>

          <p className="text-lg leading-relaxed mb-6">
            Founded in 1963 with just two classrooms, Notre Dame School has grown into
            a thriving educational institution serving families across North Texas.
            Every chapter of our history reflects our enduring commitment to inclusion,
            compassion, and academic excellence.
          </p>

          <p className="text-lg leading-relaxed">
            Today, we continue to build on this legacy—embracing innovation in
            educational practices, strengthening community partnerships, and helping
            every student realize their God-given potential.
          </p>
        </div>
      </section>
    </main>
  );
}
