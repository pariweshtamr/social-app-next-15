import { prisma } from "@/lib/client"
import CommentList from "./comment-list"

export const Comments = async ({ postId }: { postId: number }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  })
  return (
    <div className="">
      <CommentList comments={comments} postId={postId} />
    </div>
  )
}
