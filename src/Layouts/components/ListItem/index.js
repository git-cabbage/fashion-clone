import React from 'react'

function ListItem({ title, children }) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="w-4/5 my-[40px] mx-auto text-5xl text-right underline">
                {title}
            </h1>
            <hr className="w-[90%] border-dashed border-black border-[3px] mx-0 my-auto" />
            <div className="flex justify-center">
                <div className="flex flex-wrap w-4/5 justify-start gap-x-[52px] gap-y-20 my-28">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ListItem
