import { ReactElement, useState } from "react";
import { ZodType } from "zod";

export function useMultistepForm(steps: ReactElement[], zodSchema: ZodType<any>[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0)
  const [stepIndex, setStepIndex] = useState<number[]>([0])


  function next() {
    setCurrentStepIndex((i) => {

      if (i >= steps.length - 1) return i;
      setDirection(1)
      setStepIndex([
        ...stepIndex,
        i + 1
      ])
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {

      if (i <= 0) return i;
      setDirection(-1)
      return i - 1;
    });
  }


  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    schema: zodSchema[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    direction: direction,
    isLastStep: currentStepIndex === steps.length - 1,
    stepIndex,
    next,
    back,
  };
}
