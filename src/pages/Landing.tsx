import { LoaderFunction, redirect, useLoaderData } from "react-router-dom"
import { customFetch } from "../utils/customFetch"
import Banner from "../components/Banner"
import { Popcorn } from "lucide-react"
import { useState } from "react"

export const loader: LoaderFunction = async (): Promise<unknown> => {
    const user = localStorage.getItem("user")
    if (user) return redirect("/home")
    // const resp = await customFetch('/shows/search/filters')
    // return { ...resp.data }
    return { shows: [] }
}

function Landing() {
    const data = useLoaderData()
    console.log(data)
    const [showLogin, setShowLogimage] = useState(false)
    const handleClick = () => setShowLogimage(!showLogin)
    return (
        <div className="w-2/3 flex flex-col justify-center ">
            {showLogin ? <div>Login</div> :
                (<div className="flex flex-row gap-5 w-2/5 items-center cursor-pointer group transition-colors duration-500 hover:text-amber-300 " onClick={handleClick}>
                    <Popcorn className="w-40 h-40 group-hover:animate-bounce" />
                    <h1 className="uppercase text-5xl" >ready</h1>
                </div>)}

            <Banner movies={data.shows} speed={50000} />
        </div >

    )
}
export default Landing