import React from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope
} from 'react-icons/fa'

function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: FaGithub,
            url: "https://github.com/aviral-mishra-1008",
            color: "text-gray-300 hover:text-white"
        },
        {
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/aviral-mishra/",
            color: "text-blue-400 hover:text-blue-500"
        },
        {
            icon: FaTwitter,
            url: "https://twitter.com/your_twitter_handle",
            color: "text-sky-400 hover:text-sky-500"
        },
        {
            icon: FaEnvelope,
            url: "mailto:aviral.personal@example.com",
            color: "text-red-400 hover:text-red-500"
        }
    ];

    return (
        <footer
            className="
                bg-gradient-to-b from-black via-transparent to-yellow-800 bg-size-200
                text-white
                py-12
                px-4
                border-t
                border-gray-800
            "
        >

            <div className="container mx-auto flex justify-evenly items-center">
                <div>
                    <h3 className="text-2xl font-bold mb-4">
                        Have A Nice Day
                    </h3>
                    <p className="text-gray-400">
                        Thanks For Passing By!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2">
                        {[
                            'Home',
                            'About',
                            'Experience',
                            'Projects',
                            'Skills',
                            'Contact'
                        ].map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="
                                        text-gray-400
                                        hover:text-white
                                        transition-colors
                                    "
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-4">
                        Connect With Me
                    </h4>
                    <div className="flex space-x-4">
                        {socialLinks.map(({ icon: Icon, url, color }, index) => (
                            <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    text-3xl 
                                    ${color} 
                                    hover:scale-110 
                                    transition-transform
                                `}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-800">
                <div className="flex justify-center space-x-8 mb-4">
                    {['Hardwork','|', 'Passion', '|','Life'].map((motto, index) => (
                        <span
                            key={index}
                            className="
                                text-lg
                                font-semibold
                                text-gray-300
                                hover:text-white
                                transition-colors
                            "
                        >
                            {motto}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 flex justify-center items-center space-x-2">
                    <span>© {currentYear} Aviral Mishra. All Rights Reserved.</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                        Made with
                        <span className="text-red-500 mx-1">❤️</span>
                        by Aviral
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer