import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Projects() {
    const projectsData = [
        {
            title: "Face Recognition System",
            technologies: ["InceptionV3", "TensorFlow", "Keras", "OpenCV", "Python"],
            description: [
                "Implemented FaceNet research paper using InceptionV3 as base CNN layer",
                "Fine-tuned pre-trained model for improved accuracy on Indian faces",
                "Used Keras Functional API, Transfer Learning, and One-Shot Learning",
                "Achieved 6% improvement in accuracy for Indian faces",
                "Developed multiple model pipelines across datasets: LFW, BLFW, IISCIFD",
                "Handled Casia-Webface dataset with over 450,000 images using MXNet"
            ],
            githubLink: "https://github.com/Ayushman444/FaceRecognitionSystem"
        },
        {
            title: "Sushrut",
            technologies: ["Dummy", "Technologies", "To", "Be", "Added"],
            description: [
                "Dummy point 1",
                "Dummy point 2",
                "Dummy point 3",
                "Dummy point 4"
            ],
            githubLink: "#"
        },
        {
            title: "Netra Attendance System",
            technologies: ["Django", "HTML", "TailwindCSS", "TensorFlow", "Python", "SQLite3"],
            description: [
                "Utilized Django authentication system for professor and student registration",
                "Implemented login/logout with admin-level master userID verification",
                "Used Base64 encoding for client-side webcam image capture",
                "Generated face embeddings using FaceNet",
                "Implemented monthly updates via SMTPlib",
                "Interacted with SQLite3 database using Django Query API"
            ],
            githubLink: "https://github.com/aviral-mishra-1008/Netra_Attendance_System"
        }
    ]

    return (
        <section
            id="projects"
            className="min-h-screen bg-gradient-to-tl from-red-800 via-transparent to-black bg-size-200 py-16 flex items-center justify-center"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="
                                bg-gray-950
                                rounded-xl
                                p-6
                                transform
                                transition-all
                                duration-300
                                hover:-translate-y-4
                                hover:shadow-2xl
                                hover:bg-gradient-to-bl from-blue-900 to-gray-700 bg-size-10
                                border
                                border-gray-700
                            "
                        >
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="
                                            bg-red-800
                                            text-white
                                            text-xs
                                            px-2
                                            py-1
                                            rounded-full
                                        "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
                                {project.description.map((point, pointIndex) => (
                                    <li key={pointIndex}>{point}</li>
                                ))}
                            </ul>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    items-center
                                    text-white
                                    hover:text-blue-400
                                    transition-colors
                                    duration-300
                                "
                            >
                                <FaGithub className="mr-2" />
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects