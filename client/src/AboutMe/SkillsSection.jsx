import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import Skills from '../data/skills';

const SkillsSection = () => {
    return (
        <div className="skills-container">
            {Skills.map((skill) => {
                return (
                   
                    <p className="skills-with-checkmark">  
                    <CheckIcon fontSize="small" className="checkmark-icon" />
                    {skill.skill}
                    </p>
                )
            })}
        </div>
    )
}

export default SkillsSection;
