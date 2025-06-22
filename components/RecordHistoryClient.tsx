'use client';
import { motion } from 'framer-motion';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';
import { Calendar, TrendingUp, Moon } from 'lucide-react';

interface RecordHistoryClientProps {
  records: Record[];
  averageSleep: number;
  sleepQuality: number;
}

const RecordHistoryClient = ({ records, averageSleep, sleepQuality }: RecordHistoryClientProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-6 space-y-6"
    >
      {/* Header with stats */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-blue-100 rounded-xl"
            >
              <Calendar className="w-6 h-6 text-blue-600" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Sleep History</h2>
              <p className="text-gray-600">{records.length} sleep sessions tracked</p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-blue-50 rounded-xl p-4 border border-blue-100 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Average Sleep</p>
                <motion.p 
                  className="text-2xl font-bold text-blue-800"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  {averageSleep.toFixed(1)}h
                </motion.p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Moon className="w-8 h-8 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-600">Sleep Quality</p>
                <motion.p 
                  className="text-2xl font-bold text-emerald-800"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  {sleepQuality}%
                </motion.p>
              </div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <TrendingUp className="w-8 h-8 text-emerald-500" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-purple-50 rounded-xl p-4 border border-purple-100 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Total Sessions</p>
                <motion.p 
                  className="text-2xl font-bold text-purple-800"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  {records.length}
                </motion.p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Calendar className="w-8 h-8 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Records list */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Sleep Sessions</h3>
          <div className="h-px bg-gray-200"></div>
        </motion.div>

        <motion.ul 
          className="space-y-3"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {records.map((record: Record, index: number) => (
            <motion.div
              key={record.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <RecordItem record={record} />
            </motion.div>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default RecordHistoryClient;