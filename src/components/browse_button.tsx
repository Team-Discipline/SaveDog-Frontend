import React from "react";

interface propsType{
    name : string,
    src : string
}
const BrowseButton = ({name, src} : propsType) => {
    return (
        <button className="w-1/4  min-w-24 rounded-md py-1 h-12 bg-indigo-500 flex justify-around items-center text-gray-700 hover:text-gray-900">
            <div className="inline">{name}</div>
            <img alt="" className="w-50 h-50" src={src}/>
        </button>
    )
}

export default BrowseButton