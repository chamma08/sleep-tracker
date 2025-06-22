import getRecords from '@/app/actions/getRecords';
import BarChart from './BarChat';

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='bg-red-50 text-red-700 border border-red-200 rounded-xl p-6 text-center'>
        <div className='text-3xl mb-2'>⚠️</div>
        <p className='font-medium'>{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm'>
        <div className='text-6xl mb-4'>😴</div>
        <h3 className='text-xl font-semibold text-gray-800 mb-2'>
          No Sleep Records Yet
        </h3>
        <p className='text-gray-500 text-sm'>
          Start tracking your sleep to see beautiful charts here
        </p>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center'>
          <span className='text-blue-600 text-lg'>📊</span>
        </div>
        <h3 className='text-lg font-semibold text-gray-800'>
          Sleep Pattern
        </h3>
      </div>
      <BarChart
        records={records.map((record) => ({
          ...record,
          date: String(record.date),
        }))}
      />
    </div>
  );
};

export default RecordChart;