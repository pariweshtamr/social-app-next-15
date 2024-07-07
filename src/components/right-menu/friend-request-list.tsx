"use client"

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions"
import { User } from "@clerk/nextjs/server"
import { FollowRequest } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"
import { GoIssueClosed } from "react-icons/go"
import { IoCloseCircleOutline } from "react-icons/io5"

type RequestWithUser = FollowRequest & {
  sender: User
}
export const FriendRequestList = ({
  requests,
}: {
  requests: RequestWithUser[]
}) => {
  const [requestState, setRequestState] = useState(requests)

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  )

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId)
    try {
      await acceptFollowRequest(userId)
      setRequestState((prev) => prev.filter((req) => req.id !== requestId))
    } catch (error) {}
  }

  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId)
    try {
      await declineFollowRequest(userId)
      setRequestState((prev) => prev.filter((req) => req.id !== requestId))
    } catch (error) {}
  }
  return (
    <>
      {optimisticRequests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar ?? "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <form action={() => accept(request.id, request.sender.id)}>
              <button>
                <GoIssueClosed />
              </button>
            </form>
            <form action={() => decline(request.id, request.sender.id)}>
              <button>
                <IoCloseCircleOutline />
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  )
}
