"use client";
import React, {useRef, useState} from "react";

// import MyImage from "@/../public/zoombg.jpg"

export default function Picture({ref: picRef}:any) {

    const [isReset, setReset] = useState(false)
    function reset() {

        setReset((prevState) => !prevState)
        picRef.current.style.removeProperty("--tw-blur");
        picRef.current.style.removeProperty("--tw-brightness");
        picRef.current.style.removeProperty("--tw-contrast");
        picRef.current.style.removeProperty("--tw-hue-rotate");
        picRef.current.style.removeProperty("--tw-opacity");
        picRef.current.style.removeProperty("--tw-saturate");
    }

    console.log(isReset)
    return ( <>
         {/*@ts-ignore*/}
            <img
                ref={picRef}
                style={{
                    filter: `blur(var(--tw-blur, 0px))
      brightness(var(--tw-brightness, 100%)) 
      contrast(var(--tw-contrast, 100%)) 
      hue-rotate(var(--tw-hue-rotate, 0deg)) 
      opacity(var(--tw-opacity, 100%)) 
      saturate(var(--tw-saturate, 100%))`,
                }}
                src={"/zoombg.jpg"}
                alt="myimage"
                className={"w-full py-5"}
            />

            <div className={"my-4 mb-14 flex w-full flex-wrap justify-start gap-4"}>
                {/*<SliderValue value={30}></SliderValue>*/}
                <FilterSlider key={crypto.randomUUID()} filterName={"blur"} img={picRef} min={0} max={20}/>
                <FilterSlider key={crypto.randomUUID()}
                    filterName={"brightness"}
                    img={picRef}
                    max={500}
                    value={100}
                />
                <FilterSlider key={crypto.randomUUID()}
                    filterName={"contrast"}
                    img={picRef}
                    max={500}
                    value={100}
                />
                <FilterSlider key={crypto.randomUUID()} filterName={"hue-rotate"} img={picRef} max={360}/>
                <FilterSlider key={crypto.randomUUID()} filterName={"opacity"} img={picRef} value={100}/>
                <FilterSlider key={crypto.randomUUID()}
                    filterName={"saturate"}
                    img={picRef}
                    max={500}
                    value={100}
                />
            </div>

        <button className={"rounded-md cursor-pointer hover:scale-105 hover:bg-blue-400 text-center px-4 py-2 text-white self-center bg-blue-600 grow-0"}
        onClick={reset}

        >Reset</button>
        </>);
}

export function FilterSlider({
                                 filterName = "default", value = 0, min = 0, max = 100, img,
                             }) {


    const ref = useRef(null);
    const [currval, setCurrValue] = useState(value);

    const handleChange = (e: any) => {
        let val = e.target.value;
        switch (filterName) {
            case "blur":
                val = val + "px";
                break;
            case "brightness":
            case "contrast":
            case "opacity":
            case "saturate":
                val = `${val}%`;
                break;
            case "hue-rotate":
                val = `${val}deg`;
                break;
        }

        setCurrValue(val);
        if (img.current) img.current.style.setProperty("--tw-" + filterName, val);
    };

    return (<div className="flex w-[calc((100%-16px)/2)] flex-col gap-4">
            <label
                htmlFor="default-range"
                className="text-heading mb-2.5 block text-sm font-medium"
            >
                {filterName}
            </label>
            <div>
                <input
                    ref={ref}
                    id="default-range"
                    type="range"
                    defaultValue={value}
                    min={min}
                    max={max}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-blue-300"
                    onChange={handleChange}
                />
                <span>{currval}</span>
            </div>
        </div>);
}
