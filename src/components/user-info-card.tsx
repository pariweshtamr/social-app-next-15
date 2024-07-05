import Image from "next/image"
import Link from "next/link"

export const UserInformationCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Lloyd Flemming</span>
          <span className="text-sm">@Lloyd</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          soluta. Lorem ipsum dolor sit amet.
        </p>
        <div className="flex items-center gap-2">
          <Image src={"/map.png"} alt="" width={16} height={16} />
          <span>
            Living in <b>Sydney</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/school.png"} alt="" width={16} height={16} />
          <span>
            Went to <b>XYZ High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/work.png"} alt="" width={16} height={16} />
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link href={"/"} className="text-green-500 font-medium">
              Portfolio
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src={"/date.png"} alt="" width={16} height={16} />
            <span>Joined November 2023</span>
          </div>
        </div>
        <button className="bg-green-500 text-white rounded-md text-xs p-2 cursor-pointer">
          Follow
        </button>
        <span className="text-red-500 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  )
}