import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaRocket } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';

const About = () => {
    const stats = [
        { label: "Problems Solved", value: "800+", icon: FaCode },
        { label: "CS Fundamentals", value: "Strong", icon: FaServer },
        { label: "GATE Focus", value: "2027", icon: FaBrain },
        { label: "Projects", value: "Multiple", icon: FaRocket },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <SectionTitle title="About Me" subtitle="Who I Am" />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.p 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-lg text-text-muted leading-relaxed mb-6"
                        >
                            I am a passionate <span className="text-white font-medium">Software Engineer</span> and <span className="text-white font-medium">Computer Science Enthusiast</span> with a deep love for solving complex algorithmic problems.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="text-lg text-text-muted leading-relaxed mb-8"
                        >
                            My journey involves mastering <span className="text-accent-emerald">Data Structures & Algorithms</span>, diving deep into Operating Systems and DBMS, and building scalable full-stack applications. I don't just write code; I engineer solutions with a focus on efficiency and performance.
                        </motion.p>

                        <motion.p 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="text-lg text-text-muted leading-relaxed"
                        >
                            Currently preparing for <span className="text-accent-emerald font-semibold">GATE 2027</span> while continuously building projects that bridge the gap between theory and practice.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.05,
                                    rotateZ: index % 2 === 0 ? 1 : -1,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-secondary/40 backdrop-blur-md border border-white/5 p-6 rounded-xl text-center group hover:border-accent-emerald/40 transition-all duration-300 shadow-sm border-b-2 border-b-transparent hover:border-b-accent-emerald relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-accent-emerald/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="bg-dark/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-emerald group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
                                    <stat.icon size={20} />
                                </div>
                                <h3 className="text-2xl font-bold mb-1 text-white">{stat.value}</h3>
                                <p className="text-sm text-text-muted">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
