import { HandHeart } from "lucide-react"
import NavLinks from "./NavLinks"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar({ handleModal }: { handleModal: () => void }) {
    const user = localStorage.getItem('accessToken')
    const [sticky, setSticky] = useState<string>('fixed h-24 mt-12 pt-6 ')

    const handleLogout = () => {
        //TODO user slice
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    }

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            const windowHeight = window.scrollY;
            if (windowHeight > 100) {
                setSticky('fixed top-0 left-0 mt-0 h-16 pt-2')
            }
            else { setSticky('fixed h-24 mt-12 pt-6 ') }

        }
    };

    return (
        <nav className={`overflow-x-scroll z-50 bg-background p-4 text-sm lg:text-xl text-foreground shadow-xl w-full ${sticky} transition-all duration-250 ease-in-out`}>
            <div className="flex justify-between items-center">
                <NavLink to={'/'}>
                    < HandHeart className="w-12 h-12" />
                </NavLink>
                <NavLinks />
                {!user ? <p onClick={handleModal}>Login</p> : <p onClick={handleLogout}>Logout</p>}
            </div >
        </nav >
    )
}
export default Navbar