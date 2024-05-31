import { AnimatePresence, motion } from "framer-motion";
const containerVars = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
        },
    },
};

import ExtendItem from "./extendItem"



const menus = [
    {
        title: 'Capabilities',
        extend: (

            <div className="flex  p-10 px-[100px]">
                <div className="w-[40%]">
                    {[
                        'Cloud',
                        'Cybersecurity',
                        'Data and Artificial Intelligence',
                        'Digital Engineering and Manufacturing',
                        'Emerging Technology',
                        'Enterprise Platforms',
                        'Finance and Risk Management',
                        'Learning',
                        'Marketing and Experience',

                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}
                </div>
                <div>
                    {[
                        'Metaverse',
                        'Private Equity',
                        'Data and Artificial Intelligence',
                        'Digital Engineering and Manufacturing',
                        'Emerging Technology',
                        'Enterprise Platforms',
                        'Finance and Risk Management',
                        'Learning',
                        'Marketing and Experience',

                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}</div>
            </div>
        )

    },
    {
        title: 'Industries'
    },
    {
        title: 'Solutions'
    },
    {
        title: 'Company',
        extend: (
            <div className="flex gap-x-[200px] p-10 px-[100px]">
                <div>
                    {[
                        'Projects',
                        'Investors',

                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}
                </div>
            </div>
        )
    },
    {
        title: 'Resources'
    },
]

export default menus


