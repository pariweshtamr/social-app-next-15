import { Post } from "./post"

export const Feed = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-12">
      <Post />
    </div>
  )
}