import React, { ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children: ReactNode;
  id: number;
  onDelete: (id: number) => void;
}

const CourseGoal: React.FC<CourseGoalProps> = ({
  title,
  children,
  onDelete,
  id,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
      </div>
      {children}
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
