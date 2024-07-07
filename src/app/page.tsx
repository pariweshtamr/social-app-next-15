import { AddPost } from "@/components/add-post"
import { Feed } from "@/components/feed/feed"
import { LeftMenu } from "@/components/left-menu/left-menu"
import { RightMenu } from "@/components/right-menu/right-menu"
import { Stories } from "@/components/stories"

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* LEFT */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      {/* CENTER */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  )
}

export default Homepage
