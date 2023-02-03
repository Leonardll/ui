import { ImageResponse } from "@vercel/og"

export const config = {
    runtime: "experimental-edge",
}

export default async function () {
    return new ImageResponse(
        (
            // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
            <div
                style={{
                    display: "flex",
                    //fontSize: 60,
                    color: "black",
                    background: "#1abc9c",
                    width: "100%",
                    height: "100%",
                    paddingTop: 50,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <p tw="text-3xl flex md:text-2xl text-center text-white px-3 py-5">
                    Full Stack Developer - Smart Contract Integration - Music Rights Specialist
                </p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}
