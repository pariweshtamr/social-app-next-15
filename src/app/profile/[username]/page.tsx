import { Feed } from "@/components/feed/feed"
import { LeftMenu } from "@/components/left-menu/left-menu"
import { RightMenu } from "@/components/right-menu/right-menu"
import { prisma } from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import { notFound } from "next/navigation"

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  })
  if (!user) return notFound()

  const { userId: currentUserId } = auth()

  let isBlocked
  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    })
    if (res) isBlocked = true
  } else {
    isBlocked = false
  }

  if (isBlocked) return notFound()

  return (
    <div className="flex gap-6 pt-6">
      {/* LEFT */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/* CENTER */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover ?? "/noAvatar.png"}
                fill
                className="object-cover rounded-md border border-white"
                alt="cover"
              />
              <Image
                src={user.avatar ?? "/noAvatar.png"}
                width={128}
                height={128}
                className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
                alt="avatar"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.posts}</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followings}</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  )
}
export default ProfilePage