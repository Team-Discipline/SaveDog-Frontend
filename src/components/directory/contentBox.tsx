import Link from "next/link";
import React, { FC, ReactElement, useState } from 'react';

interface ContentBoxProps {
    content: string;
    category: string;
    content_name: string;
    views: number;
    tags: string[];
}

const ContentBox: FC<ContentBoxProps> = ({
                                             content,
                                             category,
                                             content_name,
                                             views,
                                             tags
                                         }): ReactElement => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    const dynamicStyle = {
        marginLeft: '2%',
        marginTop: '2%',
        '--c': 'purple',
        '--b': '1px',
        '--d': '8px',
        '--_s': `calc(var(--d) + var(--b))`,
        color: 'var(--c)',
        border: '1px solid white',
        background: isHovered ? `
            conic-gradient(at left var(--d) bottom var(--d),
            #0000 90deg, rgb(255 255 255 /0.3) 0 225deg,rgb(255 255 255 /0.6) 0) border-box,
            conic-gradient(at left var(--_s) bottom var(--_s),
            #0000 90deg,var(--c) 0) 0 100%/calc(100% - var(--b)) calc(100% - var(--b))  border-box
        ` : "",
        transform: isHovered ? 'translate(0,0)' : `translate(calc(var(--d)/-1),var(--d))`,
        clipPath: isHovered ?
            `polygon(0% var(--d), var(--d) 0%, 100% 0%, 100% calc(100% - var(--d)), calc(100% - var(--d)) 100%, 0% 100%)`
            :
            `polygon(var(--d) 0%, var(--d) 0%, 100% 0%, 100% calc(100% - var(--d)), 100% calc(100% - var(--d)), var(--d) calc(100% - var(--d)))`,
        transition: '0.1s',
    } as React.CSSProperties; // Cast the style object to React.CSSProperties

    return (
        <div>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={dynamicStyle}
            >
                <div className="pl-2 pb-2">
                    <Link href={`/category/${category}`}>
                        <img
                            className="w-full h-full"
                            alt={content_name}
                            src={content}
                            style={{ objectFit: 'cover' }}
                        />
                    </Link>
                </div>
            </div>
            <div className="content-details p-2">
                <div><span>{content_name}</span></div>
                <span>{views} viewers</span>
                <br/>
                <div className={`flex flex-wrap gap-1`}>
                    {tags.map((tag, index) => (
                        <a key={index} href="#" className="bg-gray-200 hover:bg-gray-300 py-1 px-2 rounded-lg text-sm mr-2">{tag}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentBox;
