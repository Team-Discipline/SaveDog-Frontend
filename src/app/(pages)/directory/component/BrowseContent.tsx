import ContentBox from "@/components/directory/contentBox";
import React from "react";
interface BrowseContentProps {
    width: number;
    height: number;
    ContentList: Content[]; // Include ContentList as an array of Content in the props
}

interface Content {
    contentImg: string; // 이미지 경로
    category: string; // 카테고리
    content_name: string; // 컨텐츠 이름
    views: number; // 조회수
    tags: string[]; // 태그 목록
}
const BrowseContent: React.FC<BrowseContentProps> = ({ ContentList, width, height }) => {
    return (
        <div className="w-full flex flex-wrap justify-between gap-4">
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
