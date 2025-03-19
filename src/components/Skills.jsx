import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

function Skills() {
    const skills = [
        'ReactJS', 'Springboot', 'Django', 'Python', 'FastAPI',
        'C++', 'Tailwind CSS', 'Computer Vision', 'Transfer Learning',
        'Natural Language Processing', 'Rest Framework', 'HTML',
        '8085 Assembly', 'Figma', '~Drag To View~'
    ];

    const [activeSkills, setActiveSkills] = useState([]);
    const sectionRef = useRef(null);

    const handleDragEnd = (event, info, skill) => {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const isWithinSection =
            info.point.y >= sectionRect.top &&
            info.point.y <= sectionRect.bottom;

        if (isWithinSection) {
            if (!activeSkills.some(s => s.skill === skill)) {
                setActiveSkills([...activeSkills, { skill, x: info.point.x - sectionRect.left, y: info.point.y - sectionRect.top }]);
            }
        } else {
            setActiveSkills(activeSkills.filter(s => s.skill !== skill));
        }
    };

    const spring = {
        type: "spring",
        stiffness: 200,
        damping: 40,
    };

    const getHorizontalPosition = (index) => {
        const sectionWidth = sectionRef.current.clientWidth;
        const spacing = sectionWidth / (activeSkills.length + 1);
        return spacing * (index + 1);
    };

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="min-h-screen bg-gradient-to-r from-black via-slate-950 to-gray-950 bg-size-200 py-16 flex flex-col items-center justify-center relative"
        >
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-4 w-4/5">
                {skills.map((skill) => (
                    <motion.div
                        key={skill}
                        className="bg-red-400 text-white px-4 py-2 rounded-full cursor-move hover:bg-red-600 transition-colors absolute"
                        drag
                        dragConstraints={sectionRef}
                        onDragEnd={(event, info) => handleDragEnd(event, info, skill)}
                        initial={{ y: 0 }}
                        animate={activeSkills.some(s => s.skill === skill) ? { y: sectionRef.current.clientHeight - 40, x: getHorizontalPosition(activeSkills.findIndex(s => s.skill === skill)) } : { y: 0 }}
                        transition={spring}
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;