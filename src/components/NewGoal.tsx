import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalInputRef = useRef<HTMLInputElement>(null);
  const summaryInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goalInputRef.current?.value;
    const enteredSummary = summaryInputRef.current?.value;

    if (!enteredGoal || !enteredSummary) return;

    onAddGoal(enteredGoal, enteredSummary);

    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goalInputRef} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summaryInputRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
