import Image from "next/image"
import Link from "next/link"

export const UserMediaCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href={"/"} className="text-green-500 text-xs">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            fill
            src={"/noAvatar.png"}
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            fill
            src={"/noAvatar.png"}
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            fill
            src={"/noAvatar.png"}
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            fill
            src={"/noAvatar.png"}
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            fill
            src={"/noAvatar.png"}
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            fill
            src={"/noAvatar.png"}
            alt=""
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  )
}
