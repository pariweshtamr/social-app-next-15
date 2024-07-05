import Image from "next/image"

export const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      {/* avatar */}
      <Image
        src={""}
        width={48}
        height={48}
        alt="avatar"
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* post */}
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-md flex-1 p-2"
          ></textarea>
          <Image
            src={"/emoji.png"}
            width={20}
            height={20}
            alt="emoji"
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* options */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addimage.png"} width={20} height={20} alt="" /> Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addVideo.png"} width={20} height={20} alt="" /> Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/poll.png"} width={20} height={20} alt="" /> Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addevent.png"} width={20} height={20} alt="" /> Event
          </div>
        </div>
      </div>
    </div>
  )
}
