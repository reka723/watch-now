import { LoaderFunction, redirect, useLoaderData } from "react-router-dom"
import { Popcorn } from "lucide-react"
import { useState } from "react"
import Login from "../components/Login"
import { MovieResponse } from "../utils/types"

export const loader: LoaderFunction = async (): Promise<unknown> => {
    const user = localStorage.getItem("user")
    if (user) return redirect("/home")
    // const resp = await customFetch('/shows/search/filters')
    // return { ...resp.data }
    return { shows: [] }
}

function Landing() {
    const data = useLoaderData() as MovieResponse
    console.log(data)
    const [showLogin, setShowLogimage] = useState(false)
    const handleClick = () => setShowLogimage(!showLogin)
    return (
        <>

            {!showLogin ? <Login /> :
                (<div className="w-2/3 flex flex-col justify-center"><div className="flex flex-row gap-5 w-2/5 items-center cursor-pointer group transition-colors duration-500 hover:text-amber-300 " onClick={handleClick}>
                    <Popcorn className="w-40 h-40 group-hover:animate-bounce" />
                    <h1 className="uppercase text-5xl" >ready</h1>
                </div> </div >)}

            {/* <Banner movies={data.shows} speed={50000} /> */}


        </>
    )
}
export default Landing