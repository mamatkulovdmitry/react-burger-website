import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealWrapper = ({ children, className, options }) => {
    useEffect(() => {
        const scrollReveal = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2500,
            delay: 300,
            // reset: true, // Uncomment if you want to constantly update the elements on the pageA
            ...options,
        });
        scrollReveal.reveal(`.${className}`, options);
    }, [className, options]);

    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default ScrollRevealWrapper;