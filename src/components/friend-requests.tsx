import Image from "next/image"
import Link from "next/link"

export const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href={"/"} className="text-green-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Prerana Tamrakar</span>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />{" "}
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Divyesh Shrestha</span>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />{" "}
          <Image
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
