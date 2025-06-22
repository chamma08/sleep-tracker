'use client';

import { motion, easeOut, easeInOut } from 'framer-motion';
import { Moon, Sun, TrendingUp, TrendingDown } from 'lucide-react';
import getBestWorstSleep from '@/app/actions/getBestWorstSleep';
import { useEffect, useState } from 'react';

const BestWorstSleep = () => {
  const [data, setData] = useState<{ bestSleep?: number; worstSleep?: number }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBestWorstSleep();
        setData(result);
      } catch (error) {
        console.error('Error fetching sleep data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: easeInOut
      }
    }
  };

   const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded-lg mb-6 mx-auto w-48"></div>
          <div className="flex gap-6">
            <div className="flex-1 bg-slate-200 rounded-xl h-32"></div>
            <div className="flex-1 bg-slate-200 rounded-xl h-32"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-slate-50 to-slate-100 mt-2.5 p-6 rounded-2xl shadow-sm border border-black"
    >
      {/* Header */}
      <motion.div
        variants={cardVariants}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Sleep Performance
        </h3>
        <p className="text-slate-600 text-sm">
          Your best and worst sleep duration
        </p>
      </motion.div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Best Sleep Card */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <motion.div
              variants={iconVariants}
              className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center"
            >
              <TrendingUp className="w-6 h-6 text-green-600" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
            >
              <Sun className="w-4 h-4 text-green-700" />
            </motion.div>
          </div>
          
          <h4 className="text-lg font-semibold text-slate-700 mb-2">
            Best Sleep
          </h4>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            className="flex items-baseline gap-1"
          >
            <span className="text-3xl font-bold text-green-600">
              {data.bestSleep !== undefined ? data.bestSleep : '--'}
            </span>
            <span className="text-green-500 font-medium">
              {data.bestSleep !== undefined ? 'hours' : 'No data'}
            </span>
          </motion.div>
          
          <div className="mt-3 w-full bg-green-50 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: data.bestSleep ? `${Math.min((data.bestSleep / 12) * 100, 100)}%` : '0%' }}
              transition={{ delay: 1, duration: 1 }}
              className="bg-green-500 h-2 rounded-full"
            />
          </div>
        </motion.div>

        {/* Worst Sleep Card */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-xl p-6 shadow-sm border border-red-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <motion.div
              variants={iconVariants}
              className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center"
            >
              <TrendingDown className="w-6 h-6 text-red-600" />
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"
            >
              <Moon className="w-4 h-4 text-red-700" />
            </motion.div>
          </div>
          
          <h4 className="text-lg font-semibold text-slate-700 mb-2">
            Worst Sleep
          </h4>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            className="flex items-baseline gap-1"
          >
            <span className="text-3xl font-bold text-red-600">
              {data.worstSleep !== undefined ? data.worstSleep : '--'}
            </span>
            <span className="text-red-500 font-medium">
              {data.worstSleep !== undefined ? 'hours' : 'No data'}
            </span>
          </motion.div>
          
          <div className="mt-3 w-full bg-red-50 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: data.worstSleep ? `${Math.min((data.worstSleep / 12) * 100, 100)}%` : '0%' }}
              transition={{ delay: 1, duration: 1 }}
              className="bg-red-500 h-2 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      {data.bestSleep !== undefined && data.worstSleep !== undefined && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-6 p-4 bg-white rounded-xl border border-slate-200"
        >
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
            <span>Difference:</span>
            <span className="font-semibold text-slate-800">
              {Math.abs(data.bestSleep - data.worstSleep).toFixed(1)} hours
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BestWorstSleep;