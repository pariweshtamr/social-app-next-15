import { auth } from "@clerk/nextjs/server"
import { Post } from "./post"
import { prisma } from "@/lib/client"

export const Feed = async ({ username }: { username?: string }) => {
  const { userId } = auth()

  let posts

  if (username) {
    await prisma.post.findMany({
      where: {
        user: {
          username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  }

  if (!username && userId) {
    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    })

    const followingIds = following.map((f) => f.followingId)
    const ids = [userId, ...followingIds]

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: ids,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  }
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-12">
      {posts && posts?.length > 0
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "No posts found!"}
    </div>
  )
}
