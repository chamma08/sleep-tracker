import AddNewRecord from "@/components/AddNewRecord";
import AverageSleep from "@/components/AverageSleep";
import BestWorstSleep from "@/components/BestWorstSleep";
import Guest from "@/components/Guest";
import RecordChart from "@/components/RecordChart";
import RecordHistory from "@/components/RecordHistory";
import { currentUser } from "@clerk/nextjs/server";

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-2xl transition-all duration-300">
            {/* User Image */}
            <div className="relative">
               <img
                src={user.imageUrl}
                alt="profile"
                className="w-24 h-24 rounded-2xl border-2 border-indigo-100 shadow-lg object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            {/* User Details */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Welcome Back,{" "}
                <span className="text-indigo-600 font-extrabold">
                  {user.firstName}
                </span>
                <span className="ml-2 text-2xl">👋</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ready to track another great night's sleep? Monitor your
                patterns and improve your rest quality.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Member since:
                    </span>{" "}
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Last seen:
                    </span>{" "}
                    {user.lastActiveAt
                      ? new Date(user.lastActiveAt).toLocaleString()
                      : "Just now"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AddNewRecord />
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Sleep Better Tonight
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                <div className="text-2xl">💤</div>
                <p className="text-sm text-gray-600">Keep a consistent sleep schedule</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl">📱</div>
                <p className="text-sm text-gray-600">Avoid screens 1 hour before bed</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl">🌡️</div>
                <p className="text-sm text-gray-600">Keep your room cool (60-67°F)</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="text-2xl">☕</div>
                <p className="text-sm text-gray-600">Limit caffeine after 2 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Placeholder for future components */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Sleep Analytics
            </h3>
            <RecordChart />
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Sleep Goals
            </h3>
            <AverageSleep />
            <BestWorstSleep />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <RecordHistory />
      </div>
    </main>
  );
}
