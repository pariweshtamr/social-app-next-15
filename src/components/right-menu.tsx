import { Advertisement } from "./advertisement"
import { Birthdays } from "./birthdays"
import { FriendRequests } from "./friend-requests"
import { UserInformationCard } from "./user-info-card"
import { UserMediaCard } from "./user-media-card"

export const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInformationCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Advertisement size="md" />
    </div>
  )
}
