import backgroundImage from "../assets/obg.jpeg";
import linkedinLogo from "../assets/linkedin.webp";
import githubLogo from "../assets/github.png";
import leetcodeLogo from "../assets/leetcode.webp";

function Home() {
    return (
        <section id="home" className="home"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "100% 100%",
            }}
        >
            <div className="flex justify-between items-center px-10">
                <div className="pt-100 pb-8 lg:pt-120 lg:pb-24">
                <p className="text-white font-bold text-2xl lg:text-5xl">
                    Aviral Mishra
                </p>
                </div>

                <div className="flex items-center pt-100 pb-8 lg:pt-120 lg:pb-24 space-x-4">
                    <a href="https://www.linkedin.com/in/aviral-mishra-india/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn" className="h-8 w-8 lg:h-24 lg:w-24" />
                    </a>
                    <a href="https://github.com/aviral-mishra-1008/" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" className="h-8 w-8 lg:h-24 lg:w-24" />
                    </a>
                    <a href="https://leetcode.com/u/aviral-mishra-1008/" target="_blank" rel="noopener noreferrer">
                        <img src={leetcodeLogo} alt="LeetCode" className="h-8 w-8 lg:h-24 lg:w-24" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;