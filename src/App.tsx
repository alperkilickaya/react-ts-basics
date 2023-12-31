import { useState } from "react";
import CourseGoal from "./components/CourseGoal.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };

      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== id);
      return updatedGoals;
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
