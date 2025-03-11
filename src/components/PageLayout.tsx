import { Outlet, useNavigation } from "react-router-dom"
import { PuffLoader } from "react-spinners"
import Navbar from "./Navbar"
import { useState } from "react"
import Login from "./Login"

function PageLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const handleModal = () => {
        setIsLogin((value) => !value)
    }
    return (
        <div className="flex flex-col relative h-full bg-foreground text-primary">
            <header>
                <Navbar handleModal={handleModal} />
            </header>
            <Login isOpen={isLogin} handleModal={handleModal} />
            {isLoading ?
                <div className="h-screen flex items-center justify-center">
                    <PuffLoader color="white" className="" />
                </div> :
                <div className="w-full h-full flex justify-center items-center p-4 text-center mt-52 ">
                    <Outlet />
                </div>
            }
        </div>
    )
}
export default PageLayout