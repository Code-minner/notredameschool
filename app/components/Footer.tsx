"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 — Logo and About */}
        <div>
          <img
            src="/logo.png"
            alt="Notre Dame School Logo"
            className="h-14 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Notre Dame School is dedicated to inspiring excellence, fostering
            faith, and nurturing lifelong learning for all our students.
          </p>
        </div>

        {/* Column 2 — Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              📍 <span>456 Learning Way, Dallas, TX 75205</span>
            </li>
            <li>
              📞 <a href="tel:+12145557890" className="hover:text-white">
                (214) 555-7890
              </a>
            </li>
            <li>
              ✉️ <a href="mailto:info@notredameschool.org" className="hover:text-white">
                info@notredameschool.org
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Partners / Socials */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Our Partners
          </h3>
          <div className="flex items-center gap-4">
            <img
              src="/logo (3).png"
              alt="Partner Logo"
              className="h-10 w-10 object-contain bg-white rounded-full p-1"
            />
            <span className="text-sm">Catholic Education Alliance</span>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Notre Dame School. All rights reserved.
      </div>
    </footer>
  );
}
