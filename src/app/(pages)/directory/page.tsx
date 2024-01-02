// Page.js
import ContentBox from "@/components/contentBox";
import React from "react";
import {ButtonList} from "@/app/(pages)/directory/buttonList";
import BrowseButton from "@/components/browse_button";
import {ContentList} from "@/app/(pages)/directory/contentList"; // 스타일 모듈 import

const Page = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section className="my-6 text-6xl font-bold">
                <h1>Browse</h1>
            </section>
            <section className="flex flex-wrap justify-center my-5">
                {ButtonList.map(({buttonItem, buttonImg}, index) => (
                    <BrowseButton key={index} name={buttonItem} src={buttonImg} />
                ))}
            </section>
            <section className="flex">
                <div className="flex items-center text-xl">
                    <a href="/directory"  >
                        <span className="font-bold">Categories</span>
                    </a>
                    <a href="/directory" className="ml-5">
                        <span className="font-bold">Live Channels</span>
                    </a>
                </div>
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
