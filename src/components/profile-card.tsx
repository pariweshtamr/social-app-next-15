import Image from "next/image"

export const ProfileCard = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image fill src={""} alt="" className="rounded-md object-cover" />
        <Image
          src={""}
          alt=""
          height={48}
          width={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-24 py-3 flex flex-col gap-2 items-center">
        <span className="font-semibold">Pariwesh Tamrakar</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src={""}
              alt=""
              height={12}
              width={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src={""}
              alt=""
              height={12}
              width={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src={""}
              alt=""
              height={12}
              width={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="text-white text-xs rounded-md p-2 bg-green-600">
          My Profile
        </button>
      </div>
    </div>
  )
}