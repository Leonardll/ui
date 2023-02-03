import { ImageResponse } from "@vercel/og"

// export const config = {
//     runtime: "edge",
// }

const mastheadData = [
    {
        name: "Leonard Lator",
        title1: "Full Stack Developer",
        title2: "Smart Contract Integration",
        title3: "Music Rights Specialist",
    },
]

export default async function () {
    return new ImageResponse(
        (
            // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
            // <div
            //   style={{
            //     height: '100%',
            //     width: '100%',
            //     display: 'flex',
            //     flexDirection: 'column',
            //     alignItems: 'center',
            //     justifyContent: 'center',
            //     backgroundColor: 'white',
            //   }}
            // >
            <div className="container flex flex-col items-center w-full">
                <img
                    width="256"
                    height="256"
                    src="/avatar.svg"
                    style={{
                        borderRadius: 128,
                    }}
                />
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
        ),
        //</div>
        {
            width: 1200,
            height: 630,
        }
    )
}
