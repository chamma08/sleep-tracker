'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Record } from '@/types/Record';
import deleteRecord from '@/app/actions/deleteRecord';
import { Trash2, Moon, Sun } from 'lucide-react';

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    setIsLoading(false);
  };

  const isGoodSleep = record?.amount >= 7;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${
        isGoodSleep ? 'hover:border-emerald-200' : 'hover:border-rose-200'
      }`}
    >
      {/* Subtle background accent */}
      <div
        className={`absolute inset-0 opacity-5 ${
          isGoodSleep ? 'bg-emerald-500' : 'bg-rose-500'
        }`}
      />
      
      {/* Side accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${
          isGoodSleep ? 'bg-emerald-500' : 'bg-rose-500'
        }`}
      />

      <div className="relative p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Sleep icon */}
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`p-3 rounded-full ${
              isGoodSleep 
                ? 'bg-emerald-100 text-emerald-600' 
                : 'bg-rose-100 text-rose-600'
            }`}
          >
            {isGoodSleep ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </motion.div>

          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-gray-800">
                {record?.amount}
                <span className="text-sm font-normal text-gray-500 ml-1">
                  hours
                </span>
              </span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  isGoodSleep
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                {isGoodSleep ? 'Good Sleep' : 'Poor Sleep'}
              </span>
            </div>
            <p className="text-sm text-gray-600 font-medium">
              {record?.text}
            </p>
            <p className="text-xs text-gray-400">
              {new Date(record?.date).toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        {/* Delete button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleDeleteRecord(record.id)}
          className="group relative p-2 cursor-pointer rounded-full bg-gray-100 hover:bg-rose-100 transition-colors duration-200 disabled:opacity-50"
          aria-label="Delete record"
          disabled={isLoading}
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            </motion.div>
          ) : (
            <Trash2 className="w-5 h-5 text-gray-600 group-hover:text-rose-600 transition-colors" />
          )}
        </motion.button>
      </div>
    </motion.li>
  );
};

export default RecordItem;