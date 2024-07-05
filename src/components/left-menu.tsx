import Link from "next/link"
import { ProfileCard } from "./profile-card"
import Image from "next/image"
import { Advertisement } from "./advertisement"

const links = [
  {
    name: "My Posts",
    href: "/",
    img: "/posts.png",
  },
  {
    name: "Activity",
    href: "/",
    img: "/activity.png",
  },
  {
    name: "Market place",
    href: "/",
    img: "/market.png",
  },
  {
    name: "Events",
    href: "/",
    img: "/events.png",
  },
  {
    name: "Albums",
    href: "/",
    img: "/albums.png",
  },
  {
    name: "Videos",
    href: "/",
    img: "/videos.png",
  },
  {
    name: "News",
    href: "/",
    img: "/news.png",
  },
  {
    name: "Courses",
    href: "/",
    img: "/courses.png",
  },
  {
    name: "Lists",
    href: "/",
    img: "/lists.png",
  },
  {
    name: "Settings",
    href: "/",
    img: "/settings.png",
  },
]

export const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white shadow-md rounded-lg text-sm text-gray-500 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300 ease-in-out"
          >
            <Image src={link.img} alt="" width={20} height={20} />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
      <Advertisement size="sm" />
    </div>
  )
}
