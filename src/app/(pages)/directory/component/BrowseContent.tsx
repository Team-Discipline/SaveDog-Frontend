import ContentBox from "@/components/directory/contentBox";
import React from "react";

interface BrowseContentProps {
    ContentList: Content[]; // `width`와 `height` 속성 제거
}

interface Content {
    contentImg: string; // 이미지 경로
    category: string; // 카테고리
    content_name: string; // 컨텐츠 이름
    views: number; // 조회수
    tags: string[]; // 태그 목록
}

const BrowseContent: React.FC<BrowseContentProps> = ({ ContentList }) => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {ContentList.map(({ contentImg, category, content_name, views, tags }, index) => (
                <ContentBox
                    key={index}
                    content={contentImg}
                    // `width`와 `height` 속성을 제거하고, Tailwind CSS를 사용하여 스타일을 조정합니다.
                    category={category}
                    content_name={content_name}
                    views={views}
                    tags={tags}
                />
            ))}
        </div>
    );
};

export default BrowseContent;
