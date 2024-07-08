"use client"
import { addStory } from "@/lib/actions"
import { useUser } from "@clerk/nextjs"
import { Story, User } from "@prisma/client"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useOptimistic, useState } from "react"
import { FaPlus } from "react-icons/fa"

type StoryWithUser = Story & { user: User }
export const StoryList = ({
  stories,
  userId,
}: {
  stories: StoryWithUser[]
  userId: string
}) => {
  const [storyList, setStoryList] = useState(stories)
  const [img, setImg] = useState<any>(null)
  const { user, isLoaded } = useUser()

  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value: StoryWithUser) => [value, ...state]
  )

  const add = async () => {
    if (!img?.secure_url) return
    addOptimisticStory({
      id: Math.random(),
      img: img.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        avatar: user?.imageUrl ?? "/noAvatar.png",
        name: "",
        surname: "",
        username: "Posting...",
        city: "",
        work: "",
        school: "",
        website: "",
        cover: "",
        description: "",
        createdAt: new Date(Date.now()),
      },
    })

    try {
      const createdStory = await addStory(img.secure_url)
      setStoryList((prev) => [createdStory!, ...prev])
      setImg(null)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <CldUploadWidget
        uploadPreset="friend_hive"
        onSuccess={(res, { widget }) => {
          setImg(res.info)
          widget.close()
        }}
      >
        {({ open }) => {
          return (
            <div className="flex flex-col items-center gap-2">
              <button type="button" className="relative" onClick={() => open()}>
                <Image
                  src={img?.secure_url || user?.imageUrl || "/noAvatar.png"}
                  alt=""
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full ring-2 ring-slate-400 object-cover"
                />

                <div className="absolute text-6xl text-gray-200 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  +
                </div>
              </button>
              {img ? (
                <form action={add}>
                  <button className="text-xs bg-green-600 p-1 px-1.5 rounded-md text-white">
                    Post
                  </button>
                </form>
              ) : (
                <span className="font-medium">Add a story</span>
              )}
            </div>
          )
        }}
      </CldUploadWidget>
      {optimisticStories.map((story) => (
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          key={story.id}
        >
          <Image
            src={story.img ?? "/noAvatar.png"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-slate-400"
          />
          <span className="font-medium">
            {story.user.name || story.user.username}
          </span>
        </div>
      ))}
    </>
  )
}
