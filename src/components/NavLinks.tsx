import { NavLink } from "react-router-dom";
import { links } from "../utils/links";

export default function NavLinks() {
    const user = localStorage.getItem('user')
    return (
        <div className="justify-center items-center flex gap-x-5">
            {links.map((link, index) => {
                return (
                    <NavLink key={index} to={link.href}>{link.label}</NavLink>
                )
            })}
        </div>
    )
}
