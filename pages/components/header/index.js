import Image from "next/image"
import Divider from "../divider"

function Avatar() {
    return (
        <Image
            src="https://my-landing-page-52061.web.app/assets/img/avataaars.svg"
            alt="avatar"
            width={450}
            height={450}
            responvive="true"
            className="rounded-full mb-5 w-60"
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

function MastHead() {
    return (
        <header className="flex flex-col items-center w-full pt-[calc(2rem+50px)] md:pt-[calc(2rem+74px)] pb-[6rem] bg-[#1abc9c]">
            <div className="container flex flex-col items-center w-full">
                <Avatar />
                <h1 className=" text-3xl md:text-4xl text-white text-center ">
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
}

export default MastHead
