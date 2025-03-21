import React from "react";
import CourseGoal from "./CourseGoal.tsx";
type CourseGoalListProps = {
  goel: {
    title: string;
    description: string;
    id: number;
  }[];
  onDelete: (id: number) => void;
};
const CourseGoelList: React.FC<CourseGoalListProps> = ({ goel, onDelete }) => {
  return (
    <div>
      <ul>
        {goel.map((goel) => {
          return (
            <li key={goel.id}>
              <CourseGoal
                key={goel.id}
                title={goel.title}
                onDelete={onDelete}
                id={goel.id}
              >
                <p>{goel.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseGoelList;
