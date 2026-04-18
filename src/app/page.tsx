import Image from "next/image";
// import { Button } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (<div>
    <main>

      <Link href={"/quiz"}>

        <button  >to Quiz</button>
      

          </Link>
    <Link href={"/cssfilter"}>
   <button  >to Css Filter</button>
    </Link>
      </main>
    </div>
  );
}
