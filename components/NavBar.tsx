import { checkUser } from "@/lib/checkUser";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

import Link from "next/link";

export default async function Navbar() {
  const user = await checkUser();
  console.log("Current User:", user);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Sleep Tracker Logo"
                  width={80}
                  height={80}
                  className="h-20 w-20 sm:h-16 sm:w-16"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-white hover:text-gray-300 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium hidden sm:block"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-gray-300 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium "
            >
              About
            </Link>

            <SignedOut>
              <SignInButton>
                <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-800 text-white sm:px-4 sm:py-2 px-3 py-1 text-sm sm:text-md rounded-md font-medium cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}