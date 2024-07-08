"use client"
import { useUser } from "@clerk/nextjs"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { SubmitButton } from "./submit-button"
import { addPost } from "@/lib/actions"

export const AddPost = () => {
  const { user, isLoaded } = useUser()
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState<any>()

  if (!isLoaded) {
    return "Loading..."
  }
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      {/* avatar */}
      <Image
        src={user?.imageUrl ?? "/noAvatar.png"}
        width={48}
        height={48}
        alt="avatar"
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* post */}
      <div className="flex-1">
        <form
          action={(formData) => addPost(formData, img?.secureUrl ?? "")}
          className="flex gap-4 items-center"
        >
          <textarea
            name="desc"
            id="desc"
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-md flex-1 p-2"
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="space-y-2">
            <Image
              src={"/emoji.png"}
              width={20}
              height={20}
              alt="emoji"
              className="w-5 h-5 cursor-pointer self-end"
            />
            <SubmitButton className="mt-0" />
          </div>
        </form>
        {/* options */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-400">
          <CldUploadWidget
            uploadPreset="friend_hive"
            onSuccess={(res, { widget }) => {
              setImg(res.info)
              widget.close()
            }}
          >
            {({ open }) => {
              return (
                <button
                  type="button"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src={"/addimage.png"} width={20} height={20} alt="" />{" "}
                  Photo
                </button>
              )
            }}
          </CldUploadWidget>

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
