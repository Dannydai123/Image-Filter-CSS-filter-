"use client";

import React, { useState } from "react";
// import { Button, Card } from "flowbite-react";
import { Quiz } from "@/components/quiz/quiz";
import quizArr from "@/providers/quizData";


let scoreG = 0;

function QuizPage() {
  const [currQuizIdx, setCurrQuizIdx] = useState(0);
  const [scoreDisplay, setScoreDisplay] = useState(false);

  const handleSubmittedAns = (anws: string[] ) => {

    console.log("in quizPage...", anws)
    if ((typeof quizArr[currQuizIdx].answer) === "number") {
      // @ts-expect-error
      if (anws[0] == quizArr[currQuizIdx].answer)
        scoreG++;


    } else {
      if (JSON.stringify(anws) === JSON.stringify(quizArr[currQuizIdx].answer)) {
        scoreG++;
      }
    }
    if (currQuizIdx >= quizArr.length - 1) {
      setScoreDisplay(true);
    }

    else setCurrQuizIdx(prevState => prevState+1);

    console.log(currQuizIdx)

  };

  const reset = () => {
    setScoreDisplay(false);
    setCurrQuizIdx(0)
  };


  return (
    <div className={"flex h-dvh flex-col items-center justify-center"}>
      <Card className="max-w-4xl min-w-[576px]">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Network Quizzes
        </h5>
        <h4>Question {currQuizIdx+1}</h4>

        {scoreDisplay?<><dialog open className={"mx-auto w-1/3 h-16 bg-amber-200 flex justify-center items-center text-blue-600 text-center"}>SCORE:{scoreG}</dialog>
          <p className={"text-center text-4xl"}>SCORE: {scoreG}</p>

          <Button onClick={reset}>Restart</Button>
          </>
          :
          <Quiz quiz={quizArr[currQuizIdx]} handleSubmit={handleSubmittedAns} />
        }

      </Card>
    </div>
  );
}

export default QuizPage;
