import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import { IoHomeOutline, IoLogInOutline } from "react-icons/io5"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { PiCirclesThreePlusLight } from "react-icons/pi"
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import Image from "next/image"
import { FaSearch } from "react-icons/fa"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-xl text-green-600">
          FriendHive
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex w-1/2 text-sm items-center justify-between">
        {/* Links */}
        <nav className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex items-center gap-1">
            <IoHomeOutline className="w-4 h-4 text-green-600" />
            <span>Home</span>
          </Link>
          <Link href={"/"} className="flex items-center gap-1">
            <LiaUserFriendsSolid className="w-4 h-4 text-green-600" />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex items-center gap-1">
            <PiCirclesThreePlusLight className="w-4 h-4 text-green-600" />
            <span>Stories</span>
          </Link>
        </nav>
        <div className="relative hidden xl:flex p-2 bg-slate-100 items-center rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <FaSearch className="w-3 h-3" />
        </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end text-gray-600">
        <ClerkLoading>
          <div
            className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-green-600 border-e-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={"/people.png"} alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src={"/messages.png"} alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src={"/notifications.png"} alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-1">
              <IoLogInOutline className="w-5 h-5 text-green-600" />
              <Link
                href={"/sign-in"}
                className="text-sm hover:text-green-500 duration-300 ease-in-out"
              >
                Login/Register
              </Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}
