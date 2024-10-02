'use client'
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  let auth = {
    isAuth: false,
    name: null,
    email: null,
    image: null
  }

  if (session?.user) {
    auth = {
      isAuth: true,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  return (
    auth.isAuth ?
      <div className="flex items-center justify-center flex-col gap-4 bg-orange-500 h-screen">
        <p>Logged in {auth.name}</p>
        <button className="bg-white shadow-lg p-2 rounded-md" onClick={() => signOut('google')}>
          Log Out with Google
        </button>
        {/* Display the image using the correct `auth.image` field */}
        {auth.image && (
          <Image src={auth.image} width="100" height="100" className=" rounded-full" alt={`${auth.name}'s profile picture`} />
        )}
      </div>
      :
      <div className="bg-blue-500 flex items-center justify-center h-screen">
        <div className="bg-white px-4 p-2 rounded-lg shadow-md">
          <button onClick={() => signIn('google')}>
            Login with Google
          </button>
        </div>
      </div>
  )
}
