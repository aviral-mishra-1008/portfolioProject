import React, { useEffect, useState} from 'react'
import salesforceLogo from '../assets/salesforce-logo.png'
import mnnitLogo from '../assets/mnnit-logo.png'
import codingClubLogo from '../assets/cclogo.png'
import literaryClubLogo from '../assets/literaryclub-logo.jpeg'
import smplogo from '../assets/smp-logo.jpg'

function Experience() {
    const experienceData = [
        {
            role: "Software Engineering Intern",
            company: "Salesforce, Hyderabad",
            duration: "May - July 2025",
            tasks: [
                "Detailed responsibilities to be added"
            ],
            logo: salesforceLogo
        },
        {
            role: "Lead",
            company: "Computer Coding Club, MNNIT",
            duration: "Oct 2024 - Present",
            tasks: [
                "Organizing CC Club technical events",
                "Launched 'Turing's Playground' - an AI-based Development Event",
                "Working in the domain of AI"
            ],
            logo: codingClubLogo
        },

        {
            role: "SMP Mentor",
            company: "MNNIT Allahabad",
            duration: "Oct 2024 - Present",
            tasks: [
                "Guided assigned batch of 2023 and 2024 first and second-year students",
                "Developed leadership, counseling, and mentoring skills"
            ],
            logo:smplogo
        },
        {
            role: "Web Team Member",
            company: "Office of Dean Academics, MNNIT Allahabad",
            duration: "January 2024 - Present",
            tasks: [
                "Responsible for semester result generation",
                "Developed hostel allotment system",
                "Worked on PR Portal development",
                "Managed online registration processes"
            ],
            logo:mnnitLogo
        },
        {
            role: "Deputy Coordinator",
            company: "Literary Club, MNNIT",
            duration: "November 2024 - Present",
            tasks: [
                "Organizing various literary events",
                "Coordinated gnoTalks",
                "Managed Eloquence and Personality Development Workshop"
            ],
            logo:literaryClubLogo
        }
    ];
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        const experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach((item) => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(item);
        });

        return () => {
            experienceItems.forEach((item) => observer.unobserve(item));
        };
    }, []);

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <section id="experience" className="min-h-screen py-16 bg-gradient-to-br from-amber-800 via-transparent to-black bg-size-200 ">
            <div className="container mx-auto px-4 md:px-14">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    Experience
                </h2>

                {experienceData.map((exp, index) => (
                    <section
                        key={index}
                        className={`experience-item flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                        {/* Image Section (Adaptive) */}
                        <div className={`w-full lg:w-1/3 p-2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                            <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-9/12 h-auto object-contain"
                                onLoad={handleImageLoad}
                            />
                        </div>

                        {/* Content Section (Reveal Effect) */}
                        <div className={`w-full lg:w-2/3 p-6 text-white ${imageLoaded ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        {exp.role}
                                    </h3>
                                    <p className="text-gray-300">
                                        {exp.company}
                                    </p>

                                    <p className="text-sm text-gray-400">
                                        {exp.duration}
                                    </p>
                                </div>
                            </div>

                            <ul className="list-disc list-inside text-gray-200 space-y-2">
                                {exp.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
}

export default Experience;