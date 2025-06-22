'use client';
import addSleepRecord from '@/app/actions/addSleepRecord';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(6);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sleepQuality, setSleepQuality] = useState('');

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set('amount', amount.toString());
    formData.set('text', sleepQuality);

    const { error } = await addSleepRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('Sleep record added successfully!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount(6);
      setSleepQuality('');
    }

    setIsLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='bg-transparent flex items-center justify-center'
    >
      <div className='bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 w-full border border-white/20 hover:shadow-2xl transition-all duration-300'>
        <motion.div
          variants={itemVariants}
          className='text-center mb-8'
        >
          <div className='text-4xl mb-3'>🌙</div>
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>
            Track Your Sleep
          </h3>
          <p className='text-gray-600'>Log your nightly rest and build better sleep habits</p>
        </motion.div>

        <motion.form
          ref={formRef}
          variants={containerVariants}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current!);
            clientAction(formData);
          }}
          className='space-y-6'
        >
          {/* Sleep Quality and Sleep Date */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            {/* Sleep Quality */}
            <div className='space-y-2'>
              <label
                htmlFor='text'
                className='block text-sm font-semibold text-gray-700'
              >
                How did you sleep?
              </label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                id='text'
                name='text'
                value={sleepQuality}
                onChange={(e) => setSleepQuality(e.target.value)}
                className='block w-full cursor-pointer border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 bg-white/50 backdrop-blur-sm transition-all duration-200'
                required
              >
                <option value='' disabled>
                  Select your Sleep Quality..
                </option>
                <option value='Refreshed'>🌞 Refreshed & Energized</option>
                <option value='Tired'>😴 A bit tired</option>
                <option value='Neutral'>😐 Okay, nothing special</option>
                <option value='Exhausted'>😫 Exhausted</option>
                <option value='Energetic'>⚡ Super energetic</option>
              </motion.select>
            </div>

            {/* Sleep Date */}
            <div className='space-y-2'>
              <label
                htmlFor='date'
                className='block text-sm font-semibold text-gray-700'
              >
                Sleep Date
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type='date'
                name='date'
                id='date'
                className='block w-full cursor-pointer border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 bg-white/50 backdrop-blur-sm transition-all duration-200'
                required
                onFocus={(e) => e.target.showPicker()}
              />
            </div>
          </motion.div>

          {/* Hours Slept */}
          <motion.div variants={itemVariants} className='space-y-4'>
            <div>
              <label
                htmlFor='amount'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Hours of Sleep
              </label>
              <p className='text-xs text-gray-500 mb-4'>
                Slide to select between 0 and 12 hours (in 0.5 hour steps)
              </p>
            </div>
            
            <div className='relative'>
              <input
                type='range'
                name='amount'
                id='amount'
                min='0'
                max='12'
                step='0.5'
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className='w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider'
                style={{
                  background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${(amount / 12) * 100}%, #e5e7eb ${(amount / 12) * 100}%, #e5e7eb 100%)`
                }}
              />
              <motion.div
                key={amount}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className='text-center mt-4'
              >
                <div className='inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full border-2 border-indigo-100'>
                  <span className='text-2xl'>💤</span>
                  <span className='text-lg font-bold text-indigo-700'>{amount} hours</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            type='submit'
            className='w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed'
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className='h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                  ></path>
                </motion.svg>
                <span>Adding record...</span>
              </>
            ) : (
              <>
                <span className='text-xl'>✨</span>
                <span className='cursor-pointer'>Add Sleep Record</span>
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Alert Message */}
        <AnimatePresence>
          {alertMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`mt-6 p-4 rounded-xl text-sm font-medium ${
                alertType === 'success'
                  ? 'bg-green-50 text-green-800 border-2 border-green-200'
                  : 'bg-red-50 text-red-800 border-2 border-red-200'
              }`}
            >
              <div className='flex items-center gap-2'>
                <span className='text-lg'>
                  {alertType === 'success' ? '✅' : '❌'}
                </span>
                {alertMessage}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AddRecord;