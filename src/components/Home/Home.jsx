import React from "react";
import { Link } from "react-router-dom";
import gymheadingimg from "../../assets/gym Heading img.jpeg";

import strengthzone from "../../assets/strength zone.jpeg"; 
import functionaltraining from "../../assets/functional traning.jpeg";
import personaltraining from "../../assets/personal traning.jpeg";
import cardiodeck from "../../assets/cardio deck.jpeg";
import freeweights from "../../assets/free weights.jpeg";
import recoveryarea from "../../assets/recovery area.jpeg";

import strengthtraning from "../../assets/strength training.jpg";
import cardioconditioning from "../../assets/cardio conditioning.jpg";
import combatfitness from "../../assets/combat fitness.jpg";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src={gymheadingimg}
            alt="Gym background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
              Titan <span className="text-orange-500">Fitness</span>
            </h1>
            <p className="text-xl text-gray-300">
              High-performance training facility with cutting-edge equipment and
              expert coaching to transform your body and mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="inline-flex items-center px-6 py-3 font-medium bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Join Now
              </Link>
              <Link
                to="/tour"
                className="inline-flex items-center px-6 py-3 font-medium bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Book a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Titan Fitness
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We're more than just a gym - we're a fitness community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                ),
                title: "Cutting-Edge Equipment",
                description:
                  "300+ pieces of premium strength and cardio equipment from leading brands",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Expert Trainers",
                description:
                  "Certified coaches with personalized training programs",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                title: "Progress Tracking",
                description:
                  "Smart technology to monitor and optimize your workouts",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-6 text-xl font-bold text-center">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Facilities
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              State-of-the-art equipment in a premium environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: strengthzone,
                title: "Strength Zone",
              },
              {
                img: functionaltraining,
                title: "Functional Training",
              },
              {
                img: personaltraining,
                title: "Personal Training",
              },
              {
                img: cardiodeck,
                title: "Cardio Deck",
              },
              {
                img: freeweights,
                title: "Free Weights",
              },
              {
                img: recoveryarea,
                title: "Recovery Area",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden h-64"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.img}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Training Programs
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Customized programs for every fitness level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: strengthtraning,
                title: "Strength Training",
                description:
                  "Build muscle and increase power with our progressive programs",
              },
              {
                img: cardioconditioning,
                title: "Cardio Conditioning",
                description:
                  "Improve endurance and burn fat with our HIIT and endurance programs",
              },
              {
                img: combatfitness,
                title: "Combat Fitness",
                description:
                  "Boxing, MMA and functional training for total body conditioning",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={program.img}
                    alt={program.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{program.title}</h3>
                  <p className="mt-2 text-gray-600">{program.description}</p>
                  <button className="mt-4 text-orange-600 font-medium hover:text-orange-700">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Transform Your Body?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Join Titan Fitness today and get 1 week free trial
          </p>
          <div className="mt-8">
            <Link
              to="/membership"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
