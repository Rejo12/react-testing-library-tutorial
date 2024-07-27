import { SkillType } from "./Skills.types";

export const Skills = (props: SkillType) => {
  const { skills } = props;
  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};
