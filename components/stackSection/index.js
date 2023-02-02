import Image from "next/image"
import { forwardRef, useEffect } from "react"
import Divider from "../divider"

function CardItem({ cardUrl, cardTitle }) {
    return (
        <div className="bg-white flex flex-col justify-center rounded-lg shadow-xl p-5 mx-auto overflow-hidde ">
            <Image
                src={cardUrl}
                height={150}
                width={200}
                alt={cardTitle}
                //object-fit="cover"
                className="w-full h-full mt-3   object-scale-down object-center"
            />
            <div className="text-center m-3">
                <h3 className="font-bold p-3">{cardTitle}</h3>
            </div>
        </div>
    )
}
const StackSection = forwardRef(({ data, loader }, ref) => {
    return (
        <section ref={ref} className="mb-8 scroll-mt-24" id="stack">
            <div className="container  my-8 mx-auto">
                <div className="text-center text-[#2c3e50] text-5xl mt-3">
                    <h1>Stack</h1>
                </div>
                <Divider
                    bgColor={"bg-[#2c3e50]"}
                    borderColor={"border-[#2c3e50]"}
                    textColor={"text-[#2c3e50]"}
                />

                <div className="grid grid-cols-2 auto-rows-fr md:grid-cols-4 gap-2 md:gap-4 place-items-stretch place-content-center m-5">
                    {data.map((card) => (
                        <CardItem
                            key={card._id}
                            cardUrl={card.url}
                            cardTitle={card.title}
                            loader={loader}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
})
export default StackSection
