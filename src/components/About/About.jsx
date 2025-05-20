import React from "react";
import { FaDumbbell, FaHeartbeat, FaUsers, FaAward } from "react-icons/fa";

import gymheadingimg from "../../assets/gym Heading img.jpeg";
import aboutourstory from "../../assets/about our story.jpeg";

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src={aboutourstory}
            alt="Gym interior"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our <span className="text-orange-500">Story</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl">
            From humble beginnings to becoming the premier fitness destination
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={gymheadingimg}
                alt="Titan Fitness gym"
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Welcome to{" "}
                <span className="text-orange-600">Titan Fitness</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Founded in 2015, Titan Fitness was born from a passion for
                transforming lives through fitness. What started as a single
                location has grown into a premier fitness destination with
                state-of-the-art facilities and a community of over 10,000
                members.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our mission is simple: to provide an inclusive, motivating
                environment where everyone - from beginners to elite athletes -
                can achieve their fitness goals. We combine cutting-edge
                equipment with expert coaching to deliver results you can see
                and feel.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <FaDumbbell className="text-3xl text-orange-500" />,
                    text: "300+ Equipment Pieces",
                  },
                  {
                    icon: <FaHeartbeat className="text-3xl text-orange-500" />,
                    text: "50+ Classes Weekly",
                  },
                  {
                    icon: <FaUsers className="text-3xl text-orange-500" />,
                    text: "10,000+ Members",
                  },
                  {
                    icon: <FaAward className="text-3xl text-orange-500" />,
                    text: "15 Certified Trainers",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our <span className="text-orange-600">Core Values</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community",
                description:
                  "We believe fitness is better together. Our supportive environment helps members stay motivated and accountable.",
                icon: "👥",
              },
              {
                title: "Innovation",
                description:
                  "We constantly evolve with the latest fitness science and technology to deliver cutting-edge results.",
                icon: "⚡",
              },
              {
                title: "Integrity",
                description:
                  "We're committed to honest training methods, transparent pricing, and ethical business practices.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Meet Our Expert Team
          </h2>
          <p className="mt-4 max-w-2xl text-xl mx-auto">
            Our certified trainers are ready to help you achieve your goals
          </p>
          <button className="mt-8 px-8 py-3 border border-white rounded-md font-medium hover:bg-white hover:text-orange-600 transition-colors">
            View Trainer Profiles
          </button>
        </div>
      </section>
    </div>
  );
}
