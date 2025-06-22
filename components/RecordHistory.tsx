import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';
import { Calendar, TrendingUp, Moon } from 'lucide-react';
import RecordHistoryClient from './RecordHistoryClient';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-lg font-semibold text-rose-800 mb-2">
            Unable to Load Records
          </h3>
          <p className="text-rose-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Moon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            No Sleep Records Yet
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Start tracking your sleep patterns to build your personal sleep history and insights.
          </p>
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>Track your first sleep session</span>
          </div>
        </div>
      </div>
    );
  }

  const averageSleep = records.reduce((acc, record) => acc + record.amount, 0) / records.length;
  const goodSleepCount = records.filter(record => record.amount >= 7).length;
  const sleepQuality = Math.round((goodSleepCount / records.length) * 100);

  return (
    <RecordHistoryClient 
      records={records}
      averageSleep={averageSleep}
      sleepQuality={sleepQuality}
    />
  );
};

export default RecordHistory;