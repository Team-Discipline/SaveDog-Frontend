// Page.js
import ContentBox from "@/components/contentBox";
import React from "react";
import {ButtonList} from "@/app/(pages)/directory/buttonList";
import BrowseButton from "@/components/browse_button";
import {ContentList} from "@/app/(pages)/directory/contentList"; // 스타일 모듈 import

const Page = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section className="text-3xl font-bold">
                <h1>Browse</h1>
            </section>
            <section className="flex">
                <a href="/directory" className="flex items-center py-5 px-2 text-gray-700">
                    <span className="font-bold">Categories</span>
                </a>
                <a href="/directory" className="flex items-center py-5 px-2 text-gray-700">
                    <span className="font-bold">Live Channels</span>
                </a>
            </section>
            <section className="flex flex-wrap gap-4">
                {ButtonList.map(({buttonItem, buttonImg}, index) => (
                    <BrowseButton key={index} name={buttonItem} src={buttonImg} />
                ))}
            </section>
            <section>
                {/*<ContentBox content='#' width={250} height={350}/>*/}
                {/*contnetBoxList 파일을 받아야 함*/}
                {ContentList.map(({ contentImg, width, height }, index) => (
                    <ContentBox key={index} content={contentImg} width={width} height={height} />
                ))}
            </section>
        </div>
    )
}

export default Page;
