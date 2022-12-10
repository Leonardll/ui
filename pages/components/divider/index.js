import { AiFillStar } from "react-icons/ai"

function Divider({ bgColor, borderColor, textColor }) {
    return (
        <div className="flex h-20  w-full justify-center items-center px-3 py-3">
            <div
                className={`block h-2 max-w-[10em] w-full ${bgColor}  rounded ${borderColor} mx-3`}
            ></div>
            <div className="text-2xl">
                <span className={`${textColor} mx-4`}>
                    <AiFillStar />
                </span>
            </div>
            <div
                className={`flex h-2 max-w-[10em] w-full ${bgColor} rounded ${borderColor} mx-3`}
            ></div>
        </div>
    )
}

export default Divider
