import profileImage from '../assets/profile.png'  // Replace with your profile pic

function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-16"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
                    <img
                        src={profileImage}
                        alt="Your Name"
                        className="
                            w-64 h-64
                            mx-auto
                            rounded-full
                            object-cover
                            shadow-lg
                            border-4
                            border-white
                        "
                    />
                </div>

                {/* About Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        About Me
                    </h2>

                    <p className="text-gray-50 mb-4 mr-4 leading-relaxed">
                        Hi! I am a pre-final year student at MNNIT Allahabad,
                        I'm building a strong foundation in engineering,
                        with a particular interest in artificial intelligence.
                        I'm dedicated to refining my problem-solving skills and developing practical solutions for problems around me.
                        I value teamwork and enjoy the collaborative aspect of technical projects.
                        I love to understand what I study and go to the deep for better learning, this enables me to maintain a good academic record
                        Outside of academics, I find creative expression through music, playing piano and singing are my go to stress-relieving activities, .
                        For mental peace I practice daily meditation and to stay active I often play basketball or go for nature outings basically, I love to travel and explore the world!!.
                        Over the next few years, I'm looking forward to applying my growing skill-set to real-world challenges and grow :)
                    </p>
                </div>
            </div>
    </section>
    )
}

export default About