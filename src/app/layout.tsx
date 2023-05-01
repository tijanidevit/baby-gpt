
import SideBar from '@/components/SideBar'
import './globals.css'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import Login from '@/pages/Login'


export const metadata = {
  title: 'BabyGPT',
  description: 'Created by Mustapha Tijani',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (

    <html lang="en">
      <body>
      <SessionProvider session={session}>
        {session && <div className='flex'>
            <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
              <SideBar />
            </div>
            {/* <ClientProvider /> */}

            <div className='bg-[#343541] flex-1'>{children}</div>
        </div>}

        {!session && <Login />}

    </SessionProvider>
      </body>
    </html>
  )
}
