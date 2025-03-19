import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import cs50Logo from '../assets/harvard-logo.jpg'
import iitMadrasLogo from '../assets/iitm-logo.jpg'

function Certifications() {
    const certificationsData = [
        {
            title: "CS50's Introduction to Artificial Intelligence with Python",
            issuer: "Harvard CS50",
            logo: cs50Logo,
            date: "Issued Jul 2024",
            credentialId: "a58d3ab1-d045-4321-a90f-0e2663c557ed",
            skills: [
                "Artificial Intelligence (AI)",
                "Computer Vision",
                "Natural Language Processing",
                "Transformers"
            ],
            credentialLink: "https://certificates.cs50.io/a58d3ab1-d045-4321-a90f-0e2663c557ed.pdf?size=letter"
        },
        {
            title: "Summer Training: Introduction to Machine Learning",
            issuer: "Programming Club, CFI, IIT Madras",
            logo: iitMadrasLogo,
            date: "Issued Aug 2023",
            credentialId: "",
            skills: [
                "Machine Learning",
                "Data Science",
                "Python",
                "Statistical Analysis"
            ],
            credentialLink: "https://drive.google.com/file/d/1QQANPUmXpQAoAixSs18C_vZnHW1BzUsl/view"
        }
    ]

    return (
        <section
            id="certifications"
            className="min-h-screen bg-gradient-to-bl from-red-800 via-transparent to-black bg-size-200 py-16 flex items-center justify-center"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    Certifications
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {certificationsData.map((cert, index) => (
                        <div
                            key={index}
                            className="
                                bg-gray-900
                                rounded-xl
                                p-6
                                transform
                                transition-all
                                duration-300
                                hover:-translate-y-4
                                hover:shadow-2xl
                                hover:bg-gradient-to-bl from-yellow-700 to-gray-700 bg-size-10
                                border
                                border-black
                                relative
                                pt-16
                            "
                        >
                            {/* Centered Circular Logo */}
                            <div className="
                                absolute
                                top-0
                                left-1/2
                                transform
                                -translate-x-1/2
                                -translate-y-1/2
                                w-24
                                h-24
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                shadow-lg
                            ">
                                <img
                                    src={cert.logo}
                                    alt={`${cert.issuer} logo`}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>

                            {/* Certification Details */}
                            <div className="text-center mt-8">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {cert.issuer}
                                </p>

                                {/* Date and Credential */}
                                <div className="mb-4">
                                    <p className="text-gray-300 text-sm">
                                        {cert.date}
                                    </p>
                                    {cert.credentialId && (
                                        <p className="text-gray-400 text-xs">
                                            Credential ID: {cert.credentialId}
                                        </p>
                                    )}
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 justify-center mb-4">
                                    {cert.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="
                                                bg-red-700
                                                text-white
                                                text-xs
                                                px-2
                                                py-1
                                                rounded-full
                                            "
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Credential Link */}
                                <a
                                    href={cert.credentialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        text-white
                                        hover:text-blue-400
                                        transition-colors
                                        duration-300
                                        mt-4
                                    "
                                >
                                    <FaCertificate className="mr-2" />
                                    Show Credential
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications