"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Users,
  Award,
  BookOpen,
  Heart,
  Star,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function SchoolLandingPage() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-advance hero slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Auto-Playing Slider */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Slides */}
        {[
          {
            image:
              "https://www.notredameschool.org/rotating_images/8363/8363_13_1200_0_175.jpg",
            badge: "Excellence Since 1963",
            title: "Empowering Students. Building Futures.",
            subtitle:
              "Creating unlimited possibilities through specialized education programs that transform lives.",
          },
          {
            image:
              "https://www.notredameschool.org/rotating_images/8363/8363_26_1200_0_205.jpg",
            badge: "Individualized Learning",
            title: "Where Every Student Shines",
            subtitle:
              "Personalized programs designed to help each student reach their full potential.",
          },
          {
            image:
              "https://www.notredameschool.org/rotating_images/8363/8363_24_1200_0_619.jpg",
            badge: "Life Skills Training",
            title: "Preparing for Success",
            subtitle:
              "Comprehensive support that leads to meaningful employment and community integration.",
          },
        ].map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeTab ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-gray-900/40 to-gray-900/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-semibold mb-6 md:mb-8 transition-all duration-700 delay-300 ${
                    index === activeTab
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <Award className="w-3 h-3 md:w-4 md:h-4" />
                  {slide.badge}
                </div>

                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 transition-all duration-700 delay-500 ${
                    index === activeTab
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>

                <p
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto transition-all duration-700 delay-700 ${
                    index === activeTab
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={() => setActiveTab(activeTab === 0 ? 2 : activeTab - 1)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-3 md:p-4 transition-all duration-300"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => setActiveTab(activeTab === 2 ? 0 : activeTab + 1)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-3 md:p-4 transition-all duration-300"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeTab
                  ? "w-8 md:w-12 h-2 md:h-3 bg-white"
                  : "w-2 md:w-3 h-2 md:h-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* No Limits Section - Blue Background with Circular Images */}
      <section className="bg-blue-900 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight">
                No Limits,
                <br />
                Just Possibilities!
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Notre Dame School, recognizing that each person is created in
                the image of God, educates students with developmental
                disabilities and facilitates their integration into society.
              </p>
            </div>

            {/* Right Side - Circular Images */}
            <div className="flex gap-6 md:gap-8 justify-center md:justify-end">
              {/* Lower School Circle */}
              <div className="text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-xl mb-3 md:mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop"
                    alt="Lower School"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base md:text-xl font-bold">Lower School</h3>
                <p className="text-sm md:text-base text-red-400 italic font-semibold">Ages 6-15</p>
              </div>

              {/* Upper School Circle */}
              <div className="text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-xl mb-3 md:mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=400&fit=crop"
                    alt="Upper School"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base md:text-xl font-bold">Upper School</h3>
                <p className="text-sm md:text-base text-red-400 italic font-semibold">Ages 15-23</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Rule Section - Light Background */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-gray-900 mb-4 md:mb-6 text-center">
            As Notre Dame of Dallas Schools, we live by the Golden Rule:
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
            We treat everyone equally and with dignity, as we would want to be
            treated. We live by our founders' mission to stand in solidarity
            with anyone who has experienced some form of discrimination or
            limitation of their human rights.
          </p>
          <p className="text-center text-sm md:text-base text-gray-600 italic mt-4 md:mt-6">
            (School Sisters of Notre Dame, 2023)
          </p>
        </div>
      </section>

      {/* Mission Section - Image Left */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=900&fit=crop"
                alt="Our Mission"
                className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-blue-600 text-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-2xl max-w-[240px] md:max-w-xs">
                <p className="text-base md:text-lg font-semibold">
                  "Education that transforms lives and builds futures."
                </p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                Recognizing that each person is created in the image of God, we
                educate students with developmental disabilities and facilitate
                their integration into society with dignity and respect.
              </p>
              <div className="space-y-3 md:space-y-4 pt-4">
                {[
                  "Individualized learning programs",
                  "Experienced, caring educators",
                  "Safe and inclusive environment",
                  "Focus on life skills development",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Programs
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored educational experiences designed to meet each student
              where they are and help them reach their full potential.
            </p>
          </div>

          <div className="space-y-16 md:space-y-32">
            {/* Lower School */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-semibold">
                  Ages 6-12
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Lower School
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Building strong foundations through engaging, hands-on
                  learning experiences. Our lower school program focuses on core
                  academics while developing essential social and communication
                  skills.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Small class sizes for personalized attention",
                    "Creative arts and music programs",
                    "Physical education and recreation",
                    "Speech and occupational therapy",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 text-sm md:text-base">
                  Learn More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
              <div className="relative h-[400px] md:h-[500px] order-first md:order-last">
                <img
                  src="https://notredameschool.org/pics/lower-school-bg.png"
                  alt="Lower School"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Upper School */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative h-[400px] md:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=900&fit=crop"
                  alt="Upper School"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-xl"
                />
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-semibold">
                  Ages 12-22
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Upper School
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Preparing students for independent, fulfilling lives with
                  comprehensive life skills training and career preparation. We
                  focus on practical skills that lead to meaningful employment
                  and community integration.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Vocational training and internships",
                    "Independent living skills",
                    "Job placement assistance",
                    "Community integration programs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 text-sm md:text-base">
                  Learn More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
                Latest News
              </h2>
              <p className="text-base md:text-xl text-gray-600">
                Stay updated with what's happening at our school
              </p>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 transition-colors duration-300 text-sm md:text-base">
              View All <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
                date: "November 15, 2025",
                title: "Open House Registration Now Open",
                excerpt:
                  "Join us for an exclusive tour of our facilities and meet our dedicated staff.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
                date: "November 10, 2025",
                title: "Student Success Stories",
                excerpt:
                  "Celebrating the achievements of our students and their remarkable progress.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
                date: "November 5, 2025",
                title: "New Vocational Programs",
                excerpt:
                  "Introducing expanded career training opportunities for our upper school students.",
              },
            ].map((news, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-48 md:h-64 mb-4 md:mb-6 overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="text-xs md:text-sm text-blue-600 font-semibold">
                    {news.date}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">{news.excerpt}</p>
                  <button className="text-blue-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm md:text-base">
                    Read More <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-3 md:space-y-4 order-2 md:order-1">
              {[
                {
                  date: "Nov 27",
                  title: "Thanksgiving Prayer Service",
                  time: "10:00 AM",
                },
                { date: "Dec 15", title: "Winter Festival", time: "2:00 PM" },
                { date: "Jan 10", title: "Open House", time: "9:00 AM" },
                {
                  date: "Jan 25",
                  title: "Parent-Teacher Conferences",
                  time: "All Day",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{event.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-blue-100 text-xs md:text-sm">
                        <span className="flex items-center gap-1 md:gap-2">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1 md:gap-2">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                    <button className="text-white hover:text-blue-100 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Upcoming Events</h2>
              <p className="text-base md:text-xl text-blue-100 leading-relaxed">
                Join us for exciting events throughout the year. From open
                houses to fundraisers, there's always something happening at our
                school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              What Families Say
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from parents and students about their experiences at our
              school
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                quote:
                  "The care and dedication the staff shows our child is truly remarkable. We've seen incredible growth.",
                name: "Sarah Johnson",
                role: "Parent",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
              },
              {
                quote:
                  "This school gave me the skills and confidence I needed to succeed in life. I'm forever grateful.",
                name: "Michael Chen",
                role: "Alumni",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
              },
              {
                quote:
                  "Every day, I'm inspired by our students' determination and progress. It's a privilege to be part of this community.",
                name: "Emily Rodriguez",
                role: "Teacher",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
              },
            ].map((testimonial, index) => (
              <div key={index} className="space-y-4 md:space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm md:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}