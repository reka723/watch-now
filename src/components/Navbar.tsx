import { Popcorn } from "lucide-react"
import NavLinks from "./NavLinks"
function Navbar() {
    const user = localStorage.getItem('user')
    if (!user) return null
    return (
        <nav className="bg-slate-500 mb-8 p-4 text-gray-100">
            <div className="flex justify-between items-center">
                <Popcorn className="w-8 h-8" />
                <NavLinks />
                <p>Login</p>
            </div>
        </nav>
    )
}
export default Navbar