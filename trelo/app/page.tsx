import { UserButton } from "@clerk/nextjs"
import { Logo } from "./(auth)/_components/logo"
export default function Home(){
    return(
     <div className=" flex flex-col gap-y-4">
        <h1>Dashboard</h1>
        <UserButton
        afterSignOutUrl="/"
        />

     </div>
    )
}
