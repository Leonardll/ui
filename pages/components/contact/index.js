import SectionHeader from "../sectionHeader"

function Contact() {
    return (
        <section
            id="Contact"
            className="w-full h-full bg-[#1abc9c] flex justify-center items-center"
        >
            <div className="container mx-auto">
                <SectionHeader
                    title={"Contact"}
                    titleColor={"text-white"}
                    bgColor={"bg-white"}
                    borderColor={"border-[#2c3e50]"}
                    textColor={"text-white"}
                />
            </div>
        </section>
    )
}

export default Contact
