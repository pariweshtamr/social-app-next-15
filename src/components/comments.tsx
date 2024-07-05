import Image from "next/image"

export const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src={""}
          alt=""
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-lg text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            className="cursor-pointer"
            width={16}
            height={16}
          />
        </div>
      </div>

      {/* Comments */}
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          {/* avatar */}
          <div className="">
            <Image
              src={""}
              alt=""
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
            />
          </div>
          {/* desc */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Pariwesh Tamrakar</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate nam porro corrupti quam in alias ipsum ab fuga dolorem,
              iste a expedita blanditiis, sequi quibusdam atque aliquid nesciunt
              perferendis eum.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-4">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* icon */}
          <Image
            src={"/more.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  )
}
