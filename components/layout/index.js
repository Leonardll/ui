import Head from "next/head"
import NavBar from "../navbar"
import MastHead from "../header/"
import Footer from "../footer"
import myImageLoader from "../../loader"
import { forwardRef } from "react"
const Layout = forwardRef(({ children, active }, ref) => {
    return (
        <div className="flex flex-1 min-h-screen  flex-col items-center justify-center">
            <NavBar active={active} />
            <MastHead loader={myImageLoader} ref={ref} />
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                {children}
            </main>
            <Footer />
        </div>
    )
})

export default Layout
