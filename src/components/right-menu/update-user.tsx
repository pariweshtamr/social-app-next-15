"use client"

import { updateProfile } from "@/lib/actions"
import { User } from "@prisma/client"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useActionState, useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5"
import { ZodErrors } from "../zod-errors"
import { useRouter } from "next/navigation"
import { SubmitButton } from "../submit-button"

const INITIAL_STATE = {
  zodErrors: null,
  serverError: null,
  message: null,
  success: false,
}

export const UpdateUser = ({ user }: { user: User }) => {
  const router = useRouter()
  const [state, formAction] = useActionState(updateProfile, INITIAL_STATE)
  const [open, setOpen] = useState(false)
  const [cover, setCover] = useState<any>(false)

  const handleClose = () => {
    setOpen(false)
    state.success && router.refresh()
    state.message = INITIAL_STATE.message
  }

  return (
    <>
      <button
        className="text-green-600 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </button>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black/65 flex items-center justify-center z-50">
          <form
            action={(formData) =>
              formAction({ formData, cover: cover?.secure_url ?? "" })
            }
            className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
          >
            {/* TITLE */}
            <h1 className="text-xl">Update Profile</h1>
            <p className="mt-2 text-xs text-gray-500">
              Use the navbar profile to change the avatar or username.
            </p>
            {/* COVER PICTURE */}
            <CldUploadWidget
              uploadPreset="friend_hive"
              onSuccess={(res) => setCover(res.info)}
            >
              {({ open }) => {
                return (
                  <button
                    type="button"
                    className="flex flex-col gap-4 my-4"
                    onClick={() => open()}
                  >
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        width={48}
                        height={32}
                        src={user.cover ?? "/noAvatar.png"}
                        alt=""
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">
                        Change
                      </span>
                    </div>
                  </button>
                )
              }}
            </CldUploadWidget>

            {/* INPUTS */}
            <div className="space-y-4">
              <div className="flex md:flex-row flex-col gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name" className="text-xs text-gray-500">
                    First Name
                  </label>
                  <input
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                    type="text"
                    placeholder={user.name ?? "Enter your first name"}
                    name="name"
                    id="name"
                  />
                  <ZodErrors error={state?.zodErrors?.name} />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="surname" className="text-xs text-gray-500">
                    Surname
                  </label>
                  <input
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                    type="text"
                    placeholder={user.surname ?? "Enter your surname"}
                    name="surname"
                    id="surname"
                  />
                  <ZodErrors error={state?.zodErrors?.surname} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-xs text-gray-500">
                  Description
                </label>
                <textarea
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                  placeholder={user.description ?? "Describe yourself..."}
                  name="description"
                  id="description"
                />
                <ZodErrors error={state?.zodErrors?.description} />
              </div>

              <div className="flex md:flex-row flex-col gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="city" className="text-xs text-gray-500">
                    City
                  </label>
                  <input
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                    type="text"
                    placeholder={user.city ?? "City"}
                    name="city"
                    id="city"
                  />
                  <ZodErrors error={state?.zodErrors?.city} />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="school" className="text-xs text-gray-500">
                    School
                  </label>
                  <input
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                    type="text"
                    placeholder={user.school ?? "School"}
                    name="school"
                    id="school"
                  />
                </div>
                <ZodErrors error={state?.zodErrors?.school} />
              </div>

              <div className="flex md:flex-row flex-col gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="work" className="text-xs text-gray-500">
                    Work
                  </label>
                  <input
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                    type="text"
                    placeholder={user.work ?? "Work"}
                    name="work"
                    id="work"
                  />
                  <ZodErrors error={state?.zodErrors?.work} />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="website" className="text-xs text-gray-500">
                    Website
                  </label>
                  <input
                    className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs outline-black"
                    type="text"
                    placeholder={user.website ?? "Any website"}
                    name="website"
                    id="website"
                  />
                  <ZodErrors error={state?.zodErrors?.website} />
                </div>
              </div>
            </div>
            <SubmitButton />

            {state.success && (
              <span className="text-green-600">{state.message}</span>
            )}

            <button
              type="button"
              onClick={handleClose}
              className="absolute right-6 top-6"
            >
              <IoCloseCircleOutline className="w-5 h-5" />{" "}
            </button>
          </form>
        </div>
      )}
    </>
  )
}
