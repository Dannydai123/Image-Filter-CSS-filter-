'use client'
import { Button, Checkbox, Label } from "flowbite-react";
import React from "react";

export function Quiz({quiz,handleSubmit}) {


  const {answer:ans, id, options: answer, question} = quiz

  function submitChoices(formData) {
    console.log(formData)
    const ansArr = formData.getAll('anw')

    console.log(ansArr)
    handleSubmit(ansArr)

  }

  return (
    <>
    <p className={"font-bold text-2xl"}>{question}</p>
    <form className={""} action={submitChoices}>
    <div className="flex flex-col w-full min-w-[576px] gap-4 mb-5" id="checkbox">
      <div className="flex items-center gap-2">
        <Checkbox id="accept" name={"anw"} value={1}/>
        <Label htmlFor="accept" className="flex">
          {answer[0]}

        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="promotion" name={"anw"} value={2}/>
        <Label htmlFor="promotion" className={"w-full"}>{answer[1]}</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="age" name={"anw"} value={3}/>
        <Label htmlFor="age">{answer[2]}</Label>
      </div>

      <div className="flex items-center gap-2 w-full">
        <Checkbox id="age" name={"anw"} value={4}/>
        <Label htmlFor="age" className={"w-full"}>{answer[3]} </Label>
      </div>


    </div>

  <Button className={"mx-auto active:bg-blue-400 active:scale-90"} type={"submit"}>
    Submit

  </Button>
    </form>


      </>
  );
}
