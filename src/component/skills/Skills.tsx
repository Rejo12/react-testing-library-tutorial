import { useState, useEffect } from "react";
import { SkillType } from "./Skills.types";

export const Skills = (props: SkillType) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);
  const { skills } = props;
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={(e) => setIsLoggedIn(true)}>Log in</button>
      )}
    </>
  );
};
