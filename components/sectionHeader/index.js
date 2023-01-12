import Divider from "../divider"

function SectionHeader({ title, titleColor, bgColor, borderColor, textColor }) {
    return (
        <>
            <div className={`text-center text-5xl ${titleColor} mt-3`}>
                <h1>{title}</h1>
            </div>
            <Divider bgColor={bgColor} borderColor={borderColor} textColor={textColor} />
        </>
    )
}

export default SectionHeader
