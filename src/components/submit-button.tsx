"use client"

import { useFormStatus } from "react-dom"
import { Oval } from "react-loader-spinner"

export const SubmitButton = ({ className }: { className?: string }) => {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className={`bg-green-600 text-white rounded-md p-2 mt-2 flex justify-center items-center disabled:bg-opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={pending}
    >
      {pending ? <Oval height={20} width={20} color="white" /> : "Submit"}
    </button>
  )
}
