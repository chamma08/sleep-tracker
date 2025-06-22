"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Clock, TrendingUp } from "lucide-react";
import getUserRecord from "@/app/actions/getUserRecord";

interface SleepData {
  record: number;
  daysWithRecords: number;
}

const AverageSleep = () => {
  const [sleepData, setSleepData] = useState<SleepData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const data = await getUserRecord();
        setSleepData(data);
      } catch (err) {
        console.error("Error fetching user record:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSleepData();
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="bg-blue-100 p-3 rounded-full"
            >
              <Moon className="w-8 h-8 text-blue-600" />
            </motion.div>
          </div>
          <h4 className="text-lg font-semibold text-gray-700 text-center">
            Loading your sleep data...
          </h4>
        </motion.div>
      </div>
    );
  }

  if (error || !sleepData) {
    return (
      <div className="bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center border border-red-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4"
          >
            <Moon className="w-8 h-8 text-red-600" />
          </motion.div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Oops!</h4>
          <p className="text-red-600">
            Unable to calculate your average sleep. Please try again later.
          </p>
        </motion.div>
      </div>
    );
  }

  // Ensure valid numbers
  const validRecord = sleepData.record || 0;
  const validDays =
    sleepData.daysWithRecords && sleepData.daysWithRecords > 0
      ? sleepData.daysWithRecords
      : 1;

  // Calculate the average sleep for the days with records
  const averageSleep = validRecord / validDays;

  // Extract hours and minutes
  const hours = Math.floor(averageSleep);
  const minutes = Math.round((averageSleep - hours) * 60);

  // Determine sleep quality color
  const getSleepQuality = (totalHours: number) => {
    if (totalHours >= 7 && totalHours <= 9)
      return {
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        status: "Excellent",
      };
    if (totalHours >= 6 && totalHours < 7)
      return { color: "text-amber-600", bg: "bg-amber-50", status: "Good" };
    return {
      color: "text-red-500",
      bg: "bg-red-50",
      status: "Needs Improvement",
    };
  };

  const sleepQuality = getSleepQuality(averageSleep);

  return (
    <div className="bg-slate-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border"
      >
        {/* Header with icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className="flex items-center justify-center mb-6"
        ></motion.div>

        {/* Title */}
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg font-semibold text-gray-700 mb-2 text-center"
        >
          Average Sleep Duration
        </motion.h4>

        {/* Main sleep time display */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {hours}h {minutes}m
          </h1>
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${sleepQuality.bg} ${sleepQuality.color}`}
          >
            <TrendingUp className="w-4 h-4 mr-1" />
            {sleepQuality.status}
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gray-50 rounded-xl p-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">Days tracked</span>
            </div>
            <span className="font-semibold text-gray-800">{validDays}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Moon className="w-4 h-4 mr-2" />
              <span className="text-sm">Total hours</span>
            </div>
            <span className="font-semibold text-gray-800">
              {validRecord.toFixed(1)}h
            </span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6"
        >
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Poor</span>
            <span>Good</span>
            <span>Excellent</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((averageSleep / 9) * 100, 100)}%` }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full ${
                averageSleep >= 7
                  ? "bg-emerald-500"
                  : averageSleep >= 6
                  ? "bg-amber-500"
                  : "bg-red-500"
              }`}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AverageSleep;
