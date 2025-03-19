function Education() {
    const educationData = [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institution: "MNNIT Allahabad",
            duration: "2022-2026",
            details: "Current CPI: 9.48",
            type: "Undergraduate"
        },
        {
            degree: "Intermediate (12th)",
            institution: "City International School, Lucknow",
            duration: "2021 - 2022",
            details: "Percentage: 97.8%",
            type: "CBSE"
        },
        {
            degree: "High School (10th)",
            institution: "City International School",
            duration: "2019 - 2020",
            details: "Percentage: 96.16%",
            type: "CBSE"
        }
    ];

    return (
        <section id="education" className=" py-16 flex items-center justify-center bg-gradient-to-tr from-amber-800 via-transparent to-black bg-size-200">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold m-4 lg:m-12 pb-8 text-white">
                    Education
                </h2>

                <div className="  lg:flex space-x-4">
                    {educationData.map((edu, index) => (
                        <div key={index}
                             className="bg-slate-900  m-4 shadow-lg rounded-lg p-6 flex-1 hover:translate-y-1 transition-all duration-300 border-l-4 border-amber-700">
                            <div className="lg:flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-white">
                                    {edu.degree}
                                </h3>
                                <span className="text-sm text-gray-50">
                                    {edu.duration}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <p className="text-gray-50">
                                    <span className="font-medium">Institution:</span> {edu.institution}
                                </p>
                                <p className="text-gray-50">
                                    <span className="font-medium">Details:</span> {edu.details}
                                </p>
                                <p className="text-gray-50">
                                    <span className="font-medium">Board/Type:</span> {edu.type}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education;