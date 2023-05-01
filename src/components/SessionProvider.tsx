'use client'

import { Session } from "next-auth"
import { SessionProvider as Provider } from "next-auth/react"
type PropsType = {
    children  : React.ReactNode,
    session: Session | null
}
const SessionProvider = ({children, session} : PropsType) => {
  return (
    <div>
        <Provider>
            {children}
        </Provider>
    </div>
  )
}

export default SessionProvider