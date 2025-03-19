import {useState} from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['Home', 'About', 'Education', 'Experience','Projects', 'Certifications', 'Skills', 'Contact']


    /*
        Takes in the sectionId and then calls getElementById then scrolls to the segment
        Good for single page website
        We use React routers for multi-page websites
     */

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };


    return (
        <nav className="bg-gradient-to-b from-slate-950 via-transparent to-black text-white p-4">
            <div className="hidden md:flex mx-auto justify-center items-center">
                <ul className="flex space-x-6">
                    {navItems.map((item, index) => (
                        <li key={index} className="hover:text-gray-300 cursor-pointer" onClick={() => scrollToSection(item.toLowerCase())}> {item} </li>
                    ))}
                </ul>
            </div>

            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)} //sets the value of the isMenuOpen to its compliment
                    className="text-white"
                >
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>

                {isMenuOpen && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 z-50 flex items-center justify-center">
                        <ul className="flex flex-col items-center space-y-4">
                            {navItems.map((item, index) => (
                                <li key={index} className="hover:text-gray-300 cursor-pointer" onClick={() => scrollToSection(item.toLowerCase())}> {item} </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 text-white"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;