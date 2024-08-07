"use client"

import { addComment } from "@/lib/actions"
import { useUser } from "@clerk/nextjs"
import { Comment, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"

type CommentsWithUser = Comment & { user: User }

const CommentList = ({
  comments,
  postId,
}: {
  comments: CommentsWithUser[]
  postId: number
}) => {
  const { user } = useUser()
  const [commentState, setCommentState] = useState(comments)
  const [desc, setDesc] = useState("")
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    commentState,
    (state, value: CommentsWithUser) => [value, ...state]
  )

  const add = async () => {
    if (!user || !desc) return
    addOptimisticComment({
      id: Math.random(),
      desc,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user.id,
      postId: postId,
      user: {
        id: user.id,
        avatar: user.imageUrl ?? "/noAvatar.png",
        name: "",
        surname: "",
        username: "Posting | Please wait...",
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
      const createdComment = await addComment(postId, desc)
      setCommentState((prev) => [createdComment, ...prev])
    } catch (error) {}
  }
  return (
    <>
      {/* WRITE */}
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl ?? "/noAvatar.png"}
            alt=""
            className="w-8 h-8 rounded-full"
            width={32}
            height={32}
          />
          <form
            action={add}
            className="flex-1 flex items-center justify-between bg-slate-100 rounded-lg text-sm px-6 py-2 w-full"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
              onChange={(e) => setDesc(e.target.value)}
            />
            <Image
              src={"/emoji.png"}
              alt=""
              className="cursor-pointer"
              width={16}
              height={16}
            />
          </form>
        </div>
      )}

      {/* Comments */}
      <div className="">
        {optimisticComments.map((comment) => (
          <div className="flex gap-4 justify-between mt-6" key={comment.id}>
            {/* avatar */}
            <div className="">
              <Image
                src={comment.user.avatar ?? "/noAvatar.png"}
                alt=""
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            </div>
            {/* desc */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">
                {" "}
                {comment.user.name && comment.user.surname
                  ? comment.user.name + " " + comment.user.surname
                  : comment.user.username}
              </span>
              <p>{comment.desc}</p>
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
        ))}
      </div>
    </>
  )
}
export default CommentList
