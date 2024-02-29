'use client'
import { useState, useEffect } from 'react';

interface Content {
    contentImg: string; // 이미지 경로
    category: string; // 카테고리
    content_name: string; // 컨텐츠 이름
    views: number; // 조회수
    tags: string[]; // 태그 목록
}

export const useSortedContents = (initialContents: Content[]) => {
    const [contents, setContents] = useState<Content[]>(initialContents);
    const [sortOption, setSortOption] = useState<string>('recommended');

    useEffect(() => {
        switch (sortOption) {
            case 'views':
                setContents([...contents].sort((a, b) => b.views - a.views));
                break;
            default:
                setContents(initialContents);
        }
    }, [sortOption, initialContents]);

    return { contents, setSortOption };
};
