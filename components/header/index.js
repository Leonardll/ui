import Image from "next/image"
import { forwardRef } from "react"
import Divider from "../divider"

function Avatar() {
    return (
        <Image
            src="https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Favatar.svg?alt=media&token=8e5d9915-c16e-42ee-8506-365ed98ce3b7"
            alt="avatar"
            width={450}
            height={450}
            responvive="true"
            className="rounded-full mb-5 w-60"
            priority="true"
        />
    )
}

const mastheadData = [
    {
        name: "Leonard Lator",
        title1: "Full Stack Developer",
        title2: "Smart Contract Integration",
        title3: "Music Rights Specialist",
    },
]

const MastHead = forwardRef((props, ref) => {
    return (
        <header
            ref={ref}
            className="flex flex-col items-center w-full pt-[calc(2rem+50px)] md:pt-[calc(2rem+74px)] pb-[6rem] bg-[#1abc9c]"
            id="home"
        >
            <div className="container flex flex-col items-center w-full">
                <Avatar />
                <h1 className=" text-5xl md:text-6xl text-white text-center ">
                    {mastheadData[0].name}
                </h1>
                <Divider
                    bgColor={"bg-white"}
                    borderColor={"border-gray-400"}
                    textColor={"text-white"}
                />
                <p className="text-xl flex md:text-2xl text-center text-white px-3 py-5">
                    {`${mastheadData[0].title1} - ${mastheadData[0].title2} - ${mastheadData[0].title3}`}
                </p>
            </div>
        </header>
    )
})

export default MastHead
