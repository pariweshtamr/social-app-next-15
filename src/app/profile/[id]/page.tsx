import { Feed } from "@/components/feed"
import { LeftMenu } from "@/components/left-menu"
import { RightMenu } from "@/components/right-menu"
import Image from "next/image"

const ProfilePage = () => {
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
                src={"/noAvatar.png"}
                fill
                className="object-cover rounded-md"
                alt=""
              />
              <Image
                src={"/noAvatar.png"}
                width={128}
                height={128}
                className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
                alt=""
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              Pariwesh Tamrakar
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Post</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">246</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">167</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  )
}
export default ProfilePage
