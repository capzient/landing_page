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

const ExtendParent = ({ children }) => (
    <div className="w-full flex text-[20px] justify-between border-[#ffffff81] border-t-[1px] mt-[50px]  p-10 px-[100px]">
        {children}
    </div>
)


const menus = [
    {
        title: 'Capabilities',
        extend: (
            <ExtendParent>
                <div className="w-full">
                    {[
                        'Cloud',
                        'Cybersecurity',
                        'Data and Artificial Intelligence',
                        'Digital Engineering and Manufacturing',
                        'Emerging Technology',
                        'Enterprise Platforms',
                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}
                </div>
                <div className="w-full">
                    {[
                        'Finance and Risk Management',
                        'Learning',
                        'Marketing and Experience',
                        'Metaverse',
                        'Private Equity',
                        'Data and Artificial Intelligence',

                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}
                </div>
                <div className="w-full">
                    {[

                        'Digital Engineering and Manufacturing',
                        'Emerging Technology',
                        'Enterprise Platforms',
                        'Finance and Risk Management',
                        'Learning',
                        'Marketing and Experience',

                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}</div>
            </ExtendParent>
        )

    },
    {
        title: 'Industries',
        extend: (

            <ExtendParent>
                <div className="w-full">
                    {[
                        'Aerospace and Defense',
                        'Automotive',
                        'Banking',
                        'Capital Markets',
                        'Chemicals',
                        'Communications and Media',


                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}
                </div>
                <div className="w-full">
                    {[
                        'Consumer Goods and Services',
                        'Energy',
                        'Health',
                        'High Tech',
                        'Industrial',
                        'Insurance',

                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}
                </div>
                <div className="w-full">
                    {[

                        'Life Sciences',
                        'Natural Resources',
                        'Public Service',
                        'Retail',
                        'Software and Platforms',
                        'Travel',
                        'Utilities',

                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}
                </div>
            </ExtendParent>
        )
    },
    {
        title: 'Solutions'
    },
    {
        title: 'Company',
        extend: (
            <ExtendParent>
                <div>
                    {[
                        'Projects',
                        'Investors',

                    ].map((aItem, idx) => (
                        <ExtendItem key={idx} title={aItem} />
                    ))}
                </div>
            </ExtendParent >
        )
    },
    {
        title: 'Resources'
    },
]

export default menus


