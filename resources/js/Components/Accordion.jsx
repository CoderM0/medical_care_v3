import { useEffect, useState } from "react";

const Accordion = ({ title, icon, routes = [], children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = routes.some((r) => route().current(r));
    useEffect(() => {
        if (isActive) setIsOpen(true);
    }, [isActive]);
    return (
        <div className="w-full text-right text-md font-tajawal " dir="rtl">
            {/* العنوان */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex justify-between items-center w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-md transition-colors duration-300"
                 ${isActive ? "bg-blue-700 " : "  "} `}
            >
                <div className="flex items-center px-2 gap-2 w-full">
                    {icon}
                    <p className="text-right">{title}</p>
                </div>
                <span
                    className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    <svg
                        data-accordion-icon=""
                        class="w-6 h-6 shrink-0 rotate-180"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </span>
            </button>

            {/* المحتوى */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-60 mt-2" : "max-h-0"
                }`}
            >
                <div className="flex flex-col bg-blue-600 text-white rounded-md ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
