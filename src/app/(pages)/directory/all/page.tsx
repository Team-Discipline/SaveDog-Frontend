// Page.js
'use client'
import React from "react";
import BrowseContent from "@/app/(pages)/directory/component/BrowseContent";
import BrowseButtons from "@/app/(pages)/directory/component/BrowseButtons";
import InfiniteScroll from "@/app/(pages)/directory/component/InfiniteScroll";
import Tabs from "@/components/Tabs";
import {DirectorySearch} from "@/components/directory/DirectorySearch";
import {DirectorySort} from "@/components/directory/DirectorySort";
import {ContentList} from "@/app/(pages)/directory/list/contentList2";
import {useSortedContents} from "@/app/(pages)/directory/hooks/useSortedContents";


const Page = () => {
    const { contents, setSortOption } = useSortedContents(ContentList);

    return (
        <div className="w-full h-fit p-10 flex flex-col justify-center items-center">
            <section className="my-6 text-6xl font-bold">
                <h1>Browse</h1>
            </section>
            <section>
                <BrowseButtons/>
            </section>
            <section className="flex flex-col">
                <div className="flex flex-col my-2">
                    <Tabs />
                </div>
                <div className="flex w-full justify-between">
                    <div className="w-1/4">
                        <DirectorySearch />
                    </div>
                    <div className="flex w-1/3">
                        <span className="w-1/2 flex justify-end items-center mr-4 font-bold">Sort by</span>
                        <DirectorySort onChange={setSortOption} />
                    </div>
                </div>
            </section>
            <section>
                {/*contnetBoxList 파일을 받아야 함*/}
                <BrowseContent ContentList={contents}/>
            </section>
            <InfiniteScroll/>
        </div>
    )
}

export default Page;
