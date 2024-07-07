"use client"
import { switchBlock, switchFollow } from "@/lib/actions"
import { useOptimistic, useState } from "react"

export const UserInfoCardInteraction = ({
  userId,
  isFollowing,
  isUserBlocked,
  isFollowSent,
}: {
  userId: string
  isFollowing: boolean
  isUserBlocked: boolean
  isFollowSent: boolean
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followReqSent: isFollowSent,
  })
  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followReqSent:
              !state.following && !state.followReqSent ? true : false,
          }
        : {
            ...state,
            blocked: !state.blocked,
          }
  )

  const follow = async () => {
    switchOptimisticState("follow")
    try {
      await switchFollow(userId)
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followReqSent: !prev.following && !prev.followReqSent ? true : false,
      }))
    } catch (error) {}
  }

  const block = async () => {
    switchOptimisticState("block")
    try {
      await switchBlock(userId)
      setUserState((prev) => ({
        ...prev,
        block: !prev.blocked,
      }))
    } catch (error) {}
  }
  return (
    <>
      <form action={follow}>
        <button className="w-full bg-green-500 text-white rounded-md text-xs p-2 cursor-pointer">
          {optimisticState.following
            ? "Following"
            : optimisticState.followReqSent
            ? "Friend request sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
          <span className="text-red-500 text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  )
}
