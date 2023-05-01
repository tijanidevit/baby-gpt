'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"

const Login = () => {
  return (
    <div className="bg-[#11A37F] flex h-screen justify-center items-center flex-col text-center">
        <Image
            src="https://links.papareact.com/2i6"
            width={300}
            height={300}
            alt="company logo"
        />

        <button onClick={() => signIn()} className="font-bold animate-pulse text-3xl">Sign in to use BabyGPT</button>
    </div>
  )
}

export default Login