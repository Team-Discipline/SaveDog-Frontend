// Page.js

import React from "react";
import BrowseNav from "@/app/(pages)/directory/component/BrowseNav";
import BrowseContent from "@/app/(pages)/directory/component/BrowseContent";
import BrowseButtons from "@/app/(pages)/directory/component/BrowseButtons";
import InfiniteScroll from "@/app/(pages)/directory/component/InfiniteScroll"; // 스타일 모듈 import

const Page = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section className="my-6 text-6xl font-bold">
                <h1>Browse</h1>
            </section>
            <section>
                <BrowseButtons/>
            </section>
            <section className="flex">
                <BrowseNav/>
            </section>
            <section>
                {/*contnetBoxList 파일을 받아야 함*/}
                    <BrowseContent width={250} height={350}/>
            </section>
            <InfiniteScroll/>
        </div>
    )
}

export default Page;
