import React, { useState } from "react"
import { IoChevronUp } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";


const MenuItem = ({ id, title, extend, setActiveMenu, activeMenu, setExtendElement }) => {
    return (
        <div className="cursor-pointer flex items-center gap-x-1">
            <div className="text-[10px]">
                {extend && (id === activeMenu ?
                    <IoChevronUp />
                    :
                    <GoChevronDown />
                )}
            </div>

            <span onClick={() => {
                if (id === activeMenu) {
                    setActiveMenu(null);
                    setExtendElement(null);
                    return;
                }
                setActiveMenu(id)
                setExtendElement(extend)
            }}>
                {title}
            </span>
        </div>
    )
}

export default MenuItem