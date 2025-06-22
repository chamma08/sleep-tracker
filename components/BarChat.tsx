'use client';

import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for a record
interface Record {
  date: string; // ISO date string
  amount: number; // Hours slept
}

const BarChart = ({ records }: { records: Record[] }) => {
  // Prepare data for the chart
  const data = {
    labels: records.map((record) => {
      const date = new Date(record.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }),
    datasets: [
      {
        data: records.map((record) => record.amount),
        backgroundColor: records.map((record) =>
          record.amount < 7
            ? 'rgba(239, 68, 68, 0.8)'
            : 'rgba(34, 197, 94, 0.8)'
        ),
        borderColor: records.map((record) =>
          record.amount < 7 ? 'rgba(239, 68, 68, 1)' : 'rgba(34, 197, 94, 1)'
        ),
        borderWidth: 0,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: TooltipItem<'bar'>) {
            return `${context.parsed.y} hours`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            weight: '500' as const,
          },
          color: '#6b7280',
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Hours',
          font: {
            size: 12,
            weight: '600' as const,
          },
          color: '#374151',
        },
        ticks: {
          font: {
            size: 11,
            weight: '500' as const,
          },
          color: '#6b7280',
          stepSize: 1,
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
          drawBorder: false,
        },
        border: {
          display: false,
        },
        suggestedMin: 4,
        suggestedMax: 10,
      },
    },
    elements: {
      bar: {
        borderRadius: 6,
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const,
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-64"
    >
      <Bar data={data} options={options} />
    </motion.div>
  );
};

export default BarChart;