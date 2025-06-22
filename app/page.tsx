import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

export default async function HomePage() {
  const user = await currentUser();
  if(!user) {
    return <Guest />;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to SleepTracker</h1>
      <p className="text-lg text-gray-700 mb-8">Track your sleep patterns and improve your rest.</p>
      <p className="text-lg text-gray-700">Hello!</p>
    </div>

  );
}
