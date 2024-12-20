import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav'

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session){
    return(
      <div className='bg-blue-900 h-screen w-screen flex items-center'       >
    <div className='text-center w-full'>
      <button onClick={() => signIn('google')} className='bg-white p-2'> Login With Google</button>
    </div>
  </div>
    )
  }
  return (
  <div className='bg-blue-900 h-screen flex  w-screen '>
    <Nav/>
  <div className='bg-white mt-1 mr-1 rounded-lg p-4 mb-2  flex-grow'>
  {children}
  </div>
  </div>
  )
}



