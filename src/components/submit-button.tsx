"use client"

import { useFormStatus } from "react-dom"
import { Oval } from "react-loader-spinner"

export const SubmitButton = () => {
  const status = useFormStatus()
  return (
    <button
      type="submit"
      className="bg-green-600 text-white rounded-md p-2 mt-2 flex justify-center items-center disabled:bg-opacity-50 disabled:cursor-not-allowed"
      disabled={status.pending}
    >
      {status.pending ? (
        <Oval height={20} width={20} color="white" />
      ) : (
        "Submit"
      )}
    </button>
  )
}
