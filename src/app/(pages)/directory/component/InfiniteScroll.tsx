"use client"
import { useEffect, useRef } from "react";

function InfiniteScroll() {
    const target = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (target.current) {
            observer.observe(target.current);
        }
    }, []);

    const options = {
        threshold: 1.0,
    };

    const callback = () => {
        if (target.current) {
            target.current.innerText += "관측되었습니다";
        }
    };

    const observer = new IntersectionObserver(callback, options);

    return (
        <>
            <div style={{ height: "300vh", backgroundColor: "green" }} />
            <div style={{ height: "100px", backgroundColor: "red" }} ref={target}>
                target
            </div>
        </>
    );
}

export default InfiniteScroll;