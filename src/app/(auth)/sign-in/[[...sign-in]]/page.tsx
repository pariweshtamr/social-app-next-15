import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="h-[calc(100vh-96px)] flex py-20 justify-center">
      <SignIn />
    </div>
  )
}
