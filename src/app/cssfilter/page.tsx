'use client'

import { FileInput } from "@/components/cssfilter/fileinput";
import React, {useRef} from "react";
import Picture from "@/components/cssfilter/picture";


export default function CSSFilter() {

    const picRef = useRef(null);


  return (<>

    <FileInput ref={picRef} size={"small"} color={"info"}/>

      <Picture ref={picRef} />

 </>
  );
}
