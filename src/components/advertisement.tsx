import Image from "next/image"

export const Advertisement = ({ size }: { size: "sm" | "md" | "lg" }) => {
  const imageHeight = size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src={"/more.png"} alt="" className="" width={16} height={16} />
      </div>
      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div className={`relative w-full ${imageHeight}`}>
          <Image
            src={"/more.png"}
            alt=""
            className="rounded-lg object-cover"
            fill
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={"/more.png"}
            alt=""
            className="rounded-lg w-6 h-6 object-cover"
            width={24}
            height={24}
          />
          <span className="text-green-500 font-medium">Bla bla bla</span>
        </div>
        <p
          className={`font-light ${
            size === "sm"
              ? "text-xs text-ellipsis line-clamp-2"
              : "text-sm text-ellipsis line-clamp-4"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, id
          quibusdam numquam recusandae quis quisquam laboriosam aliquid dolore
          illum repellat.
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  )
}
