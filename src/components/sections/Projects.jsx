import { Key } from "@mui/icons-material"
import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
                    
                    {/* Section Title */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                        Featured Projects
                    </h2>

                    {/* Projects Grid (Centered) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                        
                        {/* Start of Project */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">AI Chatbot</h3>
                            <p className="text-gray-400 mb-4">
                                Developed an interactive AI chatbot that responds to users in real-time using the Amazon Bedrock, AWS Amplify and React.
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "AWS Amplify"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    > 
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Project Link */}
                            <div className="flex justify-between items-center">
                                <a href="https://master.d1udfopqcaa00y.amplifyapp.com/" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank"> 
                                    View Project
                                </a>
                            </div>
                        </div>
                        {/* End of Project */}

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};