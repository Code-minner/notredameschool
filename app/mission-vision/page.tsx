export default function MissionVision() {
  return (
    <main className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-10 tracking-tight text-center sm:text-left">
        Mission & Vision
      </h1>

      {/* Mission Statement Box */}
      <div className="bg-blue-50 border-l-4 border-blue-900 p-6 sm:p-8 mb-8 rounded-r-lg shadow-sm">
        <p className="text-lg sm:text-xl leading-relaxed text-gray-800">
          <strong>
            Notre Dame School, recognizing that each person is created in the
            image of God, educates students with developmental disabilities and
            facilitates their integration into society.
          </strong>
        </p>
      </div>

      {/* Mission Paragraph */}
      <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed">
        For over sixty years this mission statement has guided Notre Dame School
        as it has served as a unique educational resource in Dallas. The
        school's individualized curriculum ensures that each child's needs are
        met in a caring and appropriate way.
      </p>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {/* Student Group */}
        <div className="relative rounded-lg overflow-hidden shadow-md group">
          <img
            src="/group.jpg"
            alt="Student Group"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold text-lg">Student Group</p>
          </div>
        </div>

        {/* Learning Together */}
        <div className="relative rounded-lg overflow-hidden shadow-md group">
          <img
            src="/learning.jpg"
            alt="Learning Together"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold text-lg">Learning Together</p>
          </div>
        </div>

        {/* Classroom */}
        <div className="relative rounded-lg overflow-hidden shadow-md group">
          <img
            src="/classroom.jpg"
            alt="Classroom"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold text-lg">Classroom</p>
          </div>
        </div>
      </div>

      {/* Organizational Values */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-200 pb-3">
          Organizational Values
        </h2>

        <ul className="space-y-6 text-gray-700">
          <li className="leading-relaxed flex">
            <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mr-4 mt-2 flex-shrink-0"></span>
            <span>
              <strong className="text-blue-900">Sponsorship & Ministry:</strong>{" "}
              Notre Dame School is under the sponsorship of the School Sisters
              of Notre Dame Central Pacific Province whose mission is expressed
              through ministry directed towards education. For the School
              Sisters of Notre Dame, education means enabling persons to reach
              the fullness of their potential as individuals created in God's
              image and assisting them in using their gifts to the best of their
              ability.
            </span>
          </li>
          <li className="leading-relaxed flex">
            <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mr-4 mt-2 flex-shrink-0"></span>
            <span>
              <strong className="text-blue-900">Individual Growth:</strong>{" "}
              Notre Dame School believes each child is a unique individual who
              should have the opportunity to develop to his/her potential in an
              atmosphere of love and genuine concern. As a Catholic educational
              institution, Notre Dame of Dallas believes in providing a
              Christian educational environment that prepares students to be
              integrated into society.
            </span>
          </li>
          <li className="leading-relaxed flex">
            <span className="inline-block w-2 h-2 bg-blue-900 rounded-full mr-4 mt-2 flex-shrink-0"></span>
            <span>
              <strong className="text-blue-900">Community Inclusion:</strong> We
              believe in the philosophy of inclusion demonstrated through
              activities to enhance interactions with the broader community.
            </span>
          </li>
        </ul>
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-blue-900 text-white rounded-lg shadow-md">
          <h3 className="text-3xl sm:text-4xl font-bold mb-2">60+</h3>
          <p className="text-sm sm:text-base">Years of Service</p>
        </div>
        <div className="text-center p-6 bg-blue-900 text-white rounded-lg shadow-md">
          <h3 className="text-3xl sm:text-4xl font-bold mb-2">100%</h3>
          <p className="text-sm sm:text-base">Individualized Care</p>
        </div>
        <div className="text-center p-6 bg-blue-900 text-white rounded-lg shadow-md">
          <h3 className="text-3xl sm:text-4xl font-bold mb-2">Faith</h3>
          <p className="text-sm sm:text-base">Based Education</p>
        </div>
      </div>
    </main>
  );
}
