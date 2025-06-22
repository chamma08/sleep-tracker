"use client";
import { SignInButton } from "@clerk/nextjs";
import { motion, easeInOut } from "framer-motion";
import { Moon, Zap, BarChart3, Star, CheckCircle } from "lucide-react";
import Image from "next/image";

const Guest = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut, // Use the imported easing function
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut, // Use the imported easing function
      },
    },
  };

  return (
    <div className="font-sans bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between p-6 md:p-16 bg-white pt-24 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex-1 mb-12 lg:mb-0 xl:pl-10"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Moon className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Better Sleep Starts Here
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Track Your Sleep,
            <span className="text-indigo-600"> Transform</span> Your Life
          </h1>

          <p className="text-lg md:text-xl mb-8 text-slate-600 leading-relaxed max-w-lg">
            Join thousands who have already improved their sleep quality with our intelligent
            tracking and personalized insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <SignInButton>
              <motion.button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Tracking Free
              </motion.button>
            </SignInButton>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="absolute inset-0 bg-indigo-200 rounded-3xl blur-3xl opacity-30"></div>
            <Image
              src="/sleep-tracker.png"
              alt="SleepTracker Dashboard"
              width={500}
              height={400}
              className="relative w-full max-w-lg rounded-3xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="py-20 px-6 bg-slate-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose SleepTracker?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Moon className="w-8 h-8 text-indigo-600" />,
                title: "Smart Sleep Analysis",
                description:
                  "Advanced algorithms analyze your sleep patterns and provide actionable insights.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
                title: "Detailed Analytics",
                description:
                  "Beautiful charts and reports help you understand your sleep trends over time.",
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-600" />,
                title: "Personalized Tips",
                description:
                  "Get customized recommendations to improve your sleep quality and energy levels.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Loved by Sleep Enthusiasts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "SleepTracker completely transformed my sleep schedule. I wake up feeling refreshed and energized every single day!",
                author: "Sarah Johnson",
                role: "Marketing Manager",
                rating: 5,
              },
              {
                quote:
                  "The insights helped me identify what was disrupting my sleep. My sleep quality improved by 40% in just two weeks!",
                author: "Michael Chen",
                role: "Software Developer",
                rating: 5,
              },
              {
                quote:
                  "Simple, beautiful, and incredibly effective. This app has become an essential part of my wellness routine.",
                author: "Emily Rodriguez",
                role: "Wellness Coach",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="py-20 px-6 bg-indigo-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Sleep?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-indigo-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of users who have already improved their sleep
            quality.
          </motion.p>
          <SignInButton>
            <motion.button
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl cursor-pointer font-semibold text-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </SignInButton>
        </div>
      </motion.div>
    </div>
  );
};

export default Guest;