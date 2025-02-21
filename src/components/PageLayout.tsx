import { Outlet, useNavigation } from "react-router-dom"
import { PuffLoader } from "react-spinners"
import Navbar from "./Navbar"

function PageLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
    return (
        <div className="flex flex-col relative h-screen bg-slate-800 text-amber-100">
            <header>
                <Navbar />
            </header>
            {isLoading ?
                <div className="absolute top-[50%]">
                    <PuffLoader color="purple" className="" />
                </div> :
                <div className="w-full h-full flex justify-center p-4 text-center">
                    <Outlet />
                </div>
            }
        </div>
    )
}
export default PageLayout