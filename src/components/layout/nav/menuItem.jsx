import React, { useState } from "react"
import { GoTriangleDown } from "react-icons/go";



const MenuItem = ({ id, title, extend, setDropDownOpen, setActiveMenu, activeMenu, setExtendElement }) => {
    return (
        <div className="cursor-pointer flex items-center gap-x-1">
            <div className="text-[13px]">
                {extend &&
                    <GoTriangleDown
                        style={id === activeMenu ?
                            {
                                transform: 'rotate(180deg)',
                                transformOrigin: 'center',
                                transitionDuration: '500ms'
                            } :
                            {
                                transform: 'rotate(0deg)',
                                transformOrigin: 'center',
                                transitionDuration: '500ms'
                            }}
                    />
                }
            </div>

            <span
                className="link--metis link"
                onMouseEnter={() => {
                    setActiveMenu(id);
                    setDropDownOpen(true);
                    setExtendElement(extend)
                }}
            // onMouseLeave={() => {
            //     setActiveMenu(null);
            //     setExtendElement(null);
            //     setDropDownOpen(false);
            // }}
            >
                {title}
            </span>
        </div>
    )
}

export default MenuItem