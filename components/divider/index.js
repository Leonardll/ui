import { AiFillStar } from "react-icons/ai"

function Divider({ bgColor, borderColor, textColor }) {
    return (
        <div className="flex h-20  w-full justify-center items-center py-3">
            <div
                className={`block h-2 max-w-[10em] w-full ${bgColor}  rounded ${borderColor} mx-3`}
            ></div>
            <div className="text-2xl">
                <span className={`${textColor} mx-4`}>
                    <AiFillStar className="h-9 w-9" />
                </span>
            </div>
            <div
                className={`flex h-2 max-w-[10em] w-full ${bgColor} rounded ${borderColor} mx-3`}
            ></div>
        </div>
    )
}

export default Divider
