import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>CC</span>
              </div>
              <h2 className='text-xl font-bold text-white'>
                SleepTracker
              </h2>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
              Transform your sleep habits with intelligent tracking and personalized insights for better rest.
            </p>
            <div className='flex space-x-3'>
              <div className='w-9 h-9 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-indigo-500 transition-colors cursor-pointer'>
                <span className='text-gray-300 text-sm'>📱</span>
              </div>
              <div className='w-9 h-9 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-indigo-500 transition-colors cursor-pointer'>
                <span className='text-gray-300 text-sm'>💬</span>
              </div>
              <div className='w-9 h-9 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:border-indigo-500 transition-colors cursor-pointer'>
                <span className='text-gray-300 text-sm'>📧</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-white uppercase tracking-wider'>
              Quick Links
            </h3>
            <div className='space-y-3'>
              <Link
                href='/'
                className='block text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200'
              >
                Dashboard
              </Link>
              <Link
                href='/'
                className='block text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200'
              >
                Sleep Analytics
              </Link>
              <Link
                href='/'
                className='block text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200'
              >
                Settings
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold text-white uppercase tracking-wider'>
              Support
            </h3>
            <div className='space-y-3'>
              <Link
                href='/about'
                className='block text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200'
              >
                About Us
              </Link>
              <Link
                href='/contact'
                className='block text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200'
              >
                Contact
              </Link>
              <Link
                href='/privacy'
                className='block text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200'
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} SleepTracker. All rights reserved.
            </p>
            <div className='flex items-center space-x-1 text-gray-500 text-sm'>
              <span>Made with</span>
              <span className='text-red-500'>♥</span>
              <span>for better sleep</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;