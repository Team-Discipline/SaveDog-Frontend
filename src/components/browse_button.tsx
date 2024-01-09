import React from "react";
import Link from "next/link";

interface propsType{
    name : string;
    src : string;
    category: string;

}
const BrowseButton = ({name, src, category} : propsType) => {
    return (
        <div className="w-1/5">
            <Link href={`/category/${category}`}>
                <button className="w-5/6 max-w-32 min-w-24 rounded-md py-1 h-12 bg-indigo-500 flex justify-around items-center text-gray-700 hover:text-gray-900">
                <div className="inline">{name}</div>
                <img className="w-50 h-50" src={src} alt={name} />
            </button>
            </Link>
        </div>
    )
}

export default BrowseButton