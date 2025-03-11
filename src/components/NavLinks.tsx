import { NavLink } from "react-router-dom";
import { links } from "../utils/links";

export default function NavLinks() {
    const user = localStorage.getItem('accessToken')
    return (
        <div className="justify-center items-center flex gap-x-5">
            {links.map((link, index) => {
                if (!user && link.secret) return null
                return (
                    <NavLink className='w-20' key={index} to={link.href}>{link.label}</NavLink>
                )
            })}
        </div>
    )
}
