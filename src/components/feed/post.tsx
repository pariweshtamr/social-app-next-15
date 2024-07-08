import Image from "next/image"
import { Comments } from "./comments"
import { Post as PostType, User } from "@prisma/client"
import { PostInteraction } from "./post-interaction"
import { Suspense } from "react"
import { PostInfo } from "./post.info"
import { auth } from "@clerk/nextjs/server"

type FeedPostType = PostType & { user: User } & {
  likes: { userId: string }[]
} & { _count: { comments: number } }

export const Post = ({ post }: { post: FeedPostType }) => {
  const { userId } = auth()
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar ?? "/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span>
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
        </div>
        {userId === post.user.id && <PostInfo postId={post.id} />}
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}

        <p>{post.desc}</p>
      </div>
      {/* interaction */}
      <Suspense fallback="Loading...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        />
      </Suspense>
      <Comments postId={post.id} />
    </div>
  )
}
