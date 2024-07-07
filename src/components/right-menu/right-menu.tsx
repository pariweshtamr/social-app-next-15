import { User } from "@prisma/client"
import { Advertisement } from "../advertisement"
import { Birthdays } from "./birthdays"
import { FriendRequests } from "./friend-requests"
import { UserInformationCard } from "./user-info-card"
import { UserMediaCard } from "./user-media-card"
import { Suspense } from "react"

export const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInformationCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Advertisement size="md" />
    </div>
  )
}
