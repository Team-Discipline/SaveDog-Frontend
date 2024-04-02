import { ButtonList } from "@/app/(pages)/directory/list/buttonList";
import BrowseButton from "@/app/(pages)/directory/component/Browse_button";
import React from "react";

interface ButtonItem {
    buttonItem: string;
    buttonImg: string;
    category: string;
}

const BrowseButtons: React.FC = () => {
    return (
        <div className="grid grid-cols-5 gap-3">
            {ButtonList.map(({ buttonItem, buttonImg, category }: ButtonItem, index: number) => (
                <BrowseButton
                    key={index}
                    name={buttonItem}
                    src={buttonImg}
                    category={category}
                />
            ))}
        </div>
    );
};

export default BrowseButtons;
