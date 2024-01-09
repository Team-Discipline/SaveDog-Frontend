// Page.js
import ContentBox from "@/components/contentBox";
import React from "react";
import {ButtonList} from "@/app/(pages)/directory/buttonList";
import BrowseButton from "@/components/browse_button";
import {ContentList} from "@/app/(pages)/directory/contentList";
import BrowseNav from "@/components/BrowseNav"; // 스타일 모듈 import

const Page = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section className="my-6 text-6xl font-bold">
                <h1>Browse</h1>
            </section>
            <section className="flex flex-wrap justify-center my-5">
                {ButtonList.map(({buttonItem, buttonImg, category}, index) => (
                    <BrowseButton key={index} name={buttonItem} src={buttonImg} category={category} />
                ))}
            </section>
            <section className="flex">
                <BrowseNav/>
            </section>
            <section>
                {/*<ContentBox content='#' width={250} height={350}/>*/}
                {/*contnetBoxList 파일을 받아야 함*/}
                <div className="w-full flex justify-start items-start flex-wrap">
                    {ContentList.map(({ contentImg, width, height , category, content_name,  views, tags}, index) => (
                        <ContentBox key={index} content={contentImg} width={width} height={height} category={category} content_name={content_name} views={views} tags={tags}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Page;
