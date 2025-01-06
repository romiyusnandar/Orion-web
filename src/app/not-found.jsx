"use client"

import { useRouter } from "next/navigation"
import Image from "next/image";

const Page = () => {
  const router = useRouter()

  const handleGoBack = () => {
      router.back()
    }

  return (
    <div className="w-full min-h-screen py-44">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center space-x-2">
          <Image src="/orion-new.svg" alt="orion" width={100} height={100} />
          <h1 className="text-2xl font-bold pb-4">Ooops! page not found</h1>
          <button
          onClick={handleGoBack}
          className="p-2 font-mono text-xl bg-neutral-300 hover:bg-neutral-500 hover:text-emerald-500 transition-all duration-300 rounded-md"
          >
            back
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page;