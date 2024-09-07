import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const { data: session }: any = useSession()
    console.log(session)
    localStorage.setItem('session', JSON.stringify(session))
    if (session) {
        return <>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        <button onClick={() => signIn()}>Sign in</button>
    </>
}