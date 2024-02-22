'use client'
import Link from "next/link";

interface ContentBoxProps {
    content: string;
    width: number;
    height: number;
}
import React, { FC, ReactElement, useState } from 'react';

interface ContentBoxProps {
    content: string;
    width: number;
    height: number;
    category: string;
    content_name: string;
    views: number;
    tags: string[];

}

const ContentBox: FC<ContentBoxProps> = ({ content, width, height,
                                             category , content_name, views, tags}): ReactElement => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => {
        setIsHovered(true);
    };
    const handleMouseOut = () => {
        setIsHovered(false);
    };
    return (
        <div className="w-1/4 flex flex-col">
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{
                    marginLeft: '2%',
                    marginTop: '2%',
                    // @ts-ignore
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
                    width: `90%`,
                    height: `${height}px`,
                }}
            >
                <div>
                        <div className={`image-container`}>
                            <Link href={`/category/${category}`}>
                                <img alt="" src={content} width={width} height={height}/>
                            </Link>
                        </div>
                </div>
            </div>
            <div className="content-details ml-1">
                <div><span>{content_name}</span></div>
                <span>{views} viewers</span>
                <br/>
                {/*추후 연동 후 MAP으로 변경 예정*/}
                <a href="src/components#"
                   className="bg-gray-200 hover:bg-gray-300 py-1 px-2 rounded-lg text-sm">Technology</a>
                &nbsp;
                <a href="src/components#"
                   className="bg-gray-200 hover:bg-gray-300 py-1 px-2 rounded-lg text-sm">Programming</a>


                {/*<div className="tags">*/}
                {/*    {tags.map(({ tag }, index) => (*/}
                {/*        <span key={index}>{tag}</span>*/}
                {/*    ))}*/}
                {/*</div>*/}

            </div>

        </div>

    );
};

export default ContentBox;
