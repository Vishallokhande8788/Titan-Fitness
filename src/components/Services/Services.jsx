import React from "react";
import {
  FaDumbbell,
  FaRunning,
  FaHeartbeat,
  FaUserShield,
  FaRegClock,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const services = [
    {
      icon: <FaDumbbell className="text-4xl" />,
      title: "Strength Training",
      description:
        "Customized weight training programs with expert guidance to build muscle and power.",
      features: [
        "Personalized plans",
        "Premium equipment",
        "Progress tracking",
      ],
      bgColor: "bg-orange-100",
    },
    {
      icon: <FaRunning className="text-4xl" />,
      title: "Cardio Programs",
      description:
        "High-energy workouts to boost endurance and burn calories effectively.",
      features: ["Treadmills", "Ellipticals", "HIIT sessions"],
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Group Classes",
      description:
        "Motivating group sessions for all fitness levels in various disciplines.",
      features: ["Zumba", "Spin classes", "Yoga", "CrossFit"],
      bgColor: "bg-purple-100",
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "Personal Training",
      description:
        "One-on-one coaching with certified trainers for maximum results.",
      features: ["Tailored workouts", "Nutrition guidance", "Accountability"],
      bgColor: "bg-green-100",
    },
    {
      icon: <FaRegClock className="text-4xl" />,
      title: "24/7 Access",
      description:
        "Flexible gym access to fit your schedule anytime, day or night.",
      features: ["Keycard entry", "Security monitored", "All hours access"],
      bgColor: "bg-red-100",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Transform Your{" "}
            <span className="text-orange-600">Fitness Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-xl text-gray-600 mx-auto"
          >
            Premium services designed to help you achieve your goals faster and
            more effectively
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={serviceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className={`${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div
                className={`w-16 h-16 ${
                  index % 2 === 0 ? "bg-orange-500" : "bg-gray-800"
                } rounded-full flex items-center justify-center mb-6 text-white`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-orange-500 mt-0.5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
                Learn more <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-medium text-white bg-orange-600 rounded-full group hover:bg-orange-700 transition-all duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative flex items-center">
              Explore All Membership Options
              <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
