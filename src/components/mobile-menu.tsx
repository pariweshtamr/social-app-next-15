"use client"
import Link from "next/link"
import { useState } from "react"

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-1 bg-green-500 rounded-sm ${
            isOpen && "rotate-45"
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-green-500 rounded-sm ease-in-out duration-500 ${
            isOpen && "opacity-0"
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-green-500 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen && "-rotate-45"
          } `}
        ></div>
      </button>
      {isOpen && (
        <nav className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={"/"}>Groups</Link>
          <Link href={"/"}>Stories</Link>
          <Link href={"/"}>Profile</Link>
        </nav>
      )}
    </div>
  )
}
