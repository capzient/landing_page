import React, { useState } from "react"


const ExtendItem = ({ title }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="flex gap-[5px] link--metis p-2 cursor-pointer">
            <div className="extend-item-before mt-[13px] duration-300"
                style={
                    isHovered ?
                        {
                            width: '30px'
                        } : {
                            width: '0px'
                        }
                }
            ></div>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="text-[#ffffff81] hover:text-[#ffffff] duration-500">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default ExtendItem