import React from 'react';
import './Skills.css';

const SkillItem = ({ skill, percentage }) => {
  const progressBarWidth = `${percentage}%`;

  return (
    <div className="item">
      <div className="item-text">
        <span>{skill}</span>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: progressBarWidth }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { skill: 'Swift', percentage: 70 },
    { skill: 'Kotlin', percentage: 75 },
    { skill: 'HTML', percentage: 85 },
    { skill: 'CSS', percentage: 80 },
    { skill: 'React.js', percentage: 85 },
    { skill: 'PHP', percentage: 75 },
    { skill: 'MySQL', percentage: 70 },
    { skill: 'JavaScript', percentage: 70 },
  ];

  return (
    <section className="skills">
      <div className="title">
        <h2>My Skills</h2>
      </div>

      <div className="row">
        {skills.map(({ skill, percentage }) => (
          <SkillItem key={skill} skill={skill} percentage={percentage} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
