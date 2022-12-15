import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const navbarData = [
    {
        id: "home",
        title: "Home",
        url: "/#home",
    },
    {
        id: "stack",
        title: "Stack",
        url: "/#stack",
    },
    {
        id: "about",
        title: "About",
        url: "/#about",
    },
    {
        id: "portofolio",
        title: "Portfolio",
        url: "/#portofolio",
    },
    {
        id: "contact",
        title: "Contact",
        url: "/#contact",
    },
]

function NavToggler({ open, setOpen }) {
    return (
        <div className="py-2 px-4 md:hidden text-5xl">
            <GiHamburgerMenu
                onClick={() => {
                    console.log("clicked")
                    setOpen(!open)
                }}
                className="navbar-toggle "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            />
        </div>
    )
}

function NavLinks({ open }) {
    return (
        <div
            className={
                !open
                    ? "hidden w-full md:flex md:items-center md:w-auto "
                    : "block w-full md:flex-row md:items-center md:w-auto "
            }
        >
            <ul className="flex flex-col md:flex-row items-center justify-between w-full dropdowm-menu">
                {navbarData.map((item) => (
                    <Link href={item.url} passHref key={item.id} className="px-2 py-2">
                        {item.title}
                    </Link>
                ))}
            </ul>
        </div>
    )
}

const Logo = () => {
    return (
        <div className="px-2 py-2 text-3xl">
            <Image
                className="img-fluid"
                src="/logo.svg"
                height={100}
                width={150}
                responsive="true"
                alt="logo"
                style={{ width: "6em", height: "4em" }}
            />
        </div>
    )
}
function NavMenu({ open, setOpen }) {
    return (
        <nav className="w-full bg-[#2c3e50]  ">
            <div className="container  mx-auto lg:m-auto flex flex-wrap items-center justify-between  max-w-4xl  text-white text-lg py-4">
                <Logo />
                <NavToggler open={open} setOpen={setOpen} />
                <NavLinks open={open} />
            </div>
        </nav>
    )
}
function NavBar() {
    const [open, setOpen] = useState(false)
    return <NavMenu open={open} setOpen={setOpen} />
}

export default NavBar
