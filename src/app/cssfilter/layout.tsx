import React, { ReactNode } from "react";

export default function CSSLayout({children}:{children:ReactNode}) {


    return (
        <div className={"flex flex-col justify-center mx-auto bg-green-100 w-[768px] px-4  min-h-screen"}>
<h1 className={"text-bold text-2xl font-serif my-10 text-center" }>CSS FILTER</h1>
            {children}



        </div>
    )
}
