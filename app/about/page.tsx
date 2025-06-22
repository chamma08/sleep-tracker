"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Moon,
  Brain,
  BarChart3,
  Users,
  Sparkles,
  ArrowRight,
  Heart,
  Shield,
  Zap,
} from "lucide-react";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };
  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-slate-50 to-blue-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/sleep-bg.jpg")' }}
      >
        {/* Add overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100/90 backdrop-blur-sm rounded-full mb-6 shadow-lg">
              <Moon className="w-10 h-10 text-blue-600" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            About <span className="text-blue-600">SleepTracker</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
          >
            Your ultimate companion for tracking sleep and improving your health
            through intelligent insights.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>Science-backed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span>Privacy-focused</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full">
              <Heart className="w-4 h-4" />
              <span>Health-driven</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-20 left-10 w-4 h-4 bg-blue-200/70 rounded-full opacity-60 z-10"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-32 right-16 w-6 h-6 bg-purple-200/70 rounded-full opacity-40 z-10"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At SleepTracker, we believe that quality sleep is the foundation
                of a healthy, productive life. Our mission is to democratize
                sleep science and make professional-grade sleep insights
                accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through cutting-edge technology and evidence-based
                methodologies, we empower individuals to understand their sleep
                patterns and make informed decisions about their wellness
                journey.
              </p>
            </div>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sleep Science</h3>
                <p className="text-gray-600">
                  Backed by research and validated by sleep experts worldwide.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-8 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose SleepTracker?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of advanced technology and
              user-centric design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Comprehensive Tracking",
                description:
                  "Monitor your sleep patterns with precision and identify areas for improvement through detailed analytics.",
              },
              {
                icon: Brain,
                title: "AI-Powered Insights",
                description:
                  "Receive personalized recommendations based on machine learning algorithms and sleep science.",
              },
              {
                icon: Zap,
                title: "Instant Feedback",
                description:
                  "Get real-time updates and actionable insights to optimize your sleep immediately.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 md:p-12 rounded-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SleepTracker was born from a simple observation: despite sleep
                  being crucial for our health, most people lack the tools to
                  understand and improve their sleep quality.
                </p>
              </div>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">
                      100K+
                    </div>
                    <div className="text-gray-600">Happy Users</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-8 bg-gray-900 text-center"
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Sleep?
          </h2>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Join thousands of users who have already improved their sleep
            quality and overall health with SleepTracker.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-gray-400 mt-4">
            Free trial • No credit card required
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
