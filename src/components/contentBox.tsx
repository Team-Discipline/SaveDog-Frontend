'use client'
interface ContentBoxProps {
    content: string;
    width: number;
    height: number;
}
// h3 {
//     font-family: system-ui, sans-serif;
//     font-size: 3rem;
//     margin:0;
//     cursor: pointer;
//     padding: 0 .1em;
// }
//
// .d-1:hover {
//     transform: translate(0,0);
//     clip-path:
//     polygon(
//         0% var(--d),
//     var(--d) 0%,
//     100% 0%,
//     100% calc(100% - var(--d)),
//     calc(100% - var(--d)) 100%,
//     0% 100%
// );
// }
import React, { FC, ReactElement, useState } from 'react';

interface ContentBoxProps {
    content: string;
    width: number;
    height: number;
}

const ContentBox: FC<ContentBoxProps> = ({ content, width, height }): ReactElement => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{
                    marginLeft: '80px',
                    '--c': '#1095c1',
                    '--b': '1px',
                    '--d': '8px',
                    '--_s': `calc(var(--d) + var(--b))`,
                    color: 'var(--c)',
                    border: '1px solid #0000',
                    background: `
                    conic-gradient(at left var(--d) bottom var(--d),
                    #0000 90deg, rgb(255 255 255 /0.3) 0 225deg,rgb(255 255 255 /0.6) 0) border-box,
                    conic-gradient(at left var(--_s) bottom var(--_s),
                    #0000 90deg,var(--c) 0) 0 100%/calc(100% - var(--b)) calc(100% - var(--b))  border-box
                `,
                    transform: isHovered ? 'translate(0,0)' : `translate(calc(var(--d)/-1),var(--d))`,
                    clipPath: isHovered ?
                        `
                        polygon(
                        0% var(--d),
                        var(--d) 0%,
                        100% 0%,
                        100% calc(100% - var(--d)),
                        calc(100% - var(--d)) 100%,
                        0% 100%
                        )
                    `:`
                        polygon(
                        var(--d) 0%,
                        var(--d) 0%,
                        100% 0%,
                        100% calc(100% - var(--d)),
                        100% calc(100% - var(--d)),
                        var(--d) calc(100% - var(--d))
                        )`,
                    transition: '0.1s',
                    width: `${width}px`,
                    height: `${height}px`,
                }}
            >
                <img alt="" src={content} width={width} height={height}/>

            </div>
        </>

    );
};

export default ContentBox;
