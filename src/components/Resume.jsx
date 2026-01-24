import { motion } from 'framer-motion';
import { FaFileDownload, FaEye } from 'react-icons/fa';
import Button from './ui/Button';

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-secondary to-dark border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold font-heading mb-4 text-white">Check out my Resume</h2>
                        <p className="text-text-muted text-lg max-w-xl">
                            Grab a copy of my resume to learn more about my educational background, work experience, and technical skills in detail.
                        </p>
                    </div>

                    <div className="flex gap-4 relative z-10">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" icon={FaFileDownload}>
                                Download PDF
                            </Button>
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" icon={FaEye}>
                                View Online
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
