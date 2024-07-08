import { prisma } from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import { StoryList } from "./story-list"

export const Stories = async () => {
  const { userId: currentUserId } = auth()
  if (!currentUserId) return null

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
          userId: currentUserId,
        },
      ],
    },
    include: {
      user: true,
    },
  })
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* <div className="flex flex-col items-center gap-2 cursor-pointer">
          <div className="w-20 h-20 rounded-full bg-slate-300 ring-2 ring-slate-400"></div>
          <span>Add story</span>
        </div> */}
        <StoryList stories={stories} userId={currentUserId} />
      </div>
    </div>
  )
}
