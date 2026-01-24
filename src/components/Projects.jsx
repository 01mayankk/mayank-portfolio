import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "TextIntellect",
            category: "AI / GenAI",
            description: "Document Q&A Bot using RAG pipeline for efficient information retrieval from user-uploaded files.",
            details: "Built with Python, LangChain, and Streamlit. Features a robust RAG (Retrieval-Augmented Generation) pipeline to process documents and answer user queries with high accuracy.",
            tech: ["Python", "LangChain", "Hugging Face", "Streamlit"],
            links: { github: "https://github.com/01mayankk/TextIntellect", live: null }
        },
        {
            id: 2,
            title: "Nandi Vision",
            category: "Machine Learning",
            description: "AI-powered cattle breed classifier using efficient CNN architectures.",
            details: "Implements a two-stage EfficientNet-B0/B2 CNN model to strictly classify cattle breeds and assist in breeding programs. Developed with TensorFlow and OpenCV.",
            tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
            links: { github: "https://github.com/01mayankk/Nandi-Vision", live: "https://nandi-vision.vercel.app/" }
        },
        {
            id: 3,
            title: "NeuroCargo",
            category: "System / Web App",
            description: "Vehicle load management system predicting overload status with high accuracy.",
            details: "A comprehensive web application that predicts vehicle load status with 93.6% accuracy. Features a React frontend and Flask backend with Material-UI for design.",
            tech: ["React", "Flask", "Python", "Material-UI"],
            links: { github: "https://github.com/01mayankk/Neuro-Cargo", live: "https://neuro-cargo.onrender.com" }
        },
        {
            id: 4,
            title: "AlgoViz",
            category: "Educational Tool",
            description: "Interactive algorithm visualizer for sorting and pathfinding algorithms.",
            details: "An interactive platform to visualize complex algorithms like Quick Sort, Merge Sort, Dijkstra's, and A* in real-time. Helps students understand algorithmic flow.",
            tech: ["React", "Algorithms", "Visualization", "CSS"],
            links: { github: "https://github.com/01mayankk/Intractive-Algorithm-Visualizer", live: "https://algovis-pro.netlify.app" }
        },
        {
            id: 5,
            title: "KaalChitra",
            category: "AI History Explorer",
            description: "Explore historical eras and timelines through an AI-powered interface.",
            details: "An immersive application allowing users to navigate through different historical periods ('Kaal') via a visual ('Chitra') interface.",
            tech: ["React", "AI Integration", "Tailwind CSS"],
            links: { github: "https://github.com/01mayankk/KaalChitra", live: "https://kaal-chitra.vercel.app/" }
        },
        {
            id: 6,
            title: "Ck Fitness",
            category: "Web Application",
            description: "A modern fitness and gym website with comprehensive workout guides.",
            details: "A fully responsive fitness website features exercise databases, workout plans, and BMI calculators. Built for a seamless user experience.",
            tech: ["React", "API Integration", "Tailwind CSS"],
            links: { github: "https://github.com/01mayankk/ck-fitness-site", live: "https://ck-fitness-site.vercel.app" }
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <SectionTitle title="Featured Projects" subtitle="What I've Built" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-accent-cyan/10 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="h-48 bg-gradient-to-br from-secondary to-dark flex items-center justify-center p-6 relative overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-accent-cyan/5 group-hover:bg-accent-cyan/10 transition-colors duration-300"></div>
                                <FaCode className="text-6xl text-text-muted/20 group-hover:text-accent-cyan/40 transition-colors duration-300 group-hover:scale-110 transform" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <span className="text-accent-cyan text-xs font-medium tracking-wider uppercase mb-2 block">{project.category}</span>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                                <p className="text-text-muted text-sm line-clamp-3 mb-4 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="text-xs bg-dark/50 border border-white/5 px-2 py-1 rounded-md text-text-muted">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs bg-dark/50 border border-white/5 px-2 py-1 rounded-md text-text-muted">+{project.tech.length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-secondary border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-text-muted hover:text-white bg-dark/50 rounded-full p-2 z-10"
                            >
                                <FaTimes />
                            </button>

                            <div className="h-48 md:h-64 bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 flex items-center justify-center relative overflow-hidden">
                                <FaCode className="text-8xl text-text-muted/20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
                            </div>

                            <div className="p-8">
                                <span className="text-accent-cyan font-medium tracking-wider uppercase text-sm mb-2 block">{selectedProject.category}</span>
                                <h3 className="text-3xl font-bold font-heading mb-4">{selectedProject.title}</h3>

                                <p className="text-text-muted leading-relaxed mb-6 text-lg">{selectedProject.details}</p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="text-sm bg-dark border border-white/10 px-3 py-1.5 rounded-lg text-text">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    {selectedProject.links.github && (
                                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button variant="secondary" className="w-full" icon={FaGithub}>GitHub Repo</Button>
                                        </a>
                                    )}
                                    {selectedProject.links.live && (
                                        <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button variant="primary" className="w-full" icon={FaExternalLinkAlt}>Live Demo</Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
