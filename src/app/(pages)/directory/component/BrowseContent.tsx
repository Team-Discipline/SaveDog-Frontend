import { ContentList } from "@/app/(pages)/directory/list/contentList";
import ContentBox from "@/components/directory/contentBox";
import React from "react";
interface BrowseContentProps {
    width: number;
    height: number;
}

const BrowseContent: React.FC<BrowseContentProps> = ({ width, height }) => {
    return (
        <div className="w-full flex justify-start items-start flex-wrap">
            {ContentList.map(
                ({ contentImg, category, content_name, views, tags }, index) => (
                    <ContentBox
                        key={index}
                        content={contentImg}
                        width={width}
                        height={height}
                        category={category}
                        content_name={content_name}
                        views={views}
                        tags={tags}
                    />
                )
            )}
        </div>
    );
};

export default BrowseContent;
