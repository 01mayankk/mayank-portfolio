import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "C / C++", level: 90 },
                { name: "Python", level: 85 },
                { name: "Java", level: 80 },
                { name: "JavaScript", level: 85 },
            ]
        },
        {
            title: "Core Computer Science",
            skills: [
                { name: "Data Structures & Algo", level: 95 },
                { name: "Operating Systems", level: 85 },
                { name: "DBMS", level: 80 },
                { name: "Computer Networks", level: 75 },
                { name: "Compiler Design", level: 70 },
            ]
        },
        {
            title: "Web Development",
            skills: [
                { name: "React / Redux", level: 90 },
                { name: "Node.js / Express", level: 80 },
                { name: "Tailwind CSS", level: 95 },
                { name: "HTML / CSS", level: 95 },
            ]
        },
        {
            title: "Tools & Systems",
            skills: [
                { name: "Git / GitHub", level: 90 },
                { name: "Linux", level: 80 },
                { name: "Docker", level: 60 },
                { name: "VS Code", level: 95 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6">
                <SectionTitle title="Skills" subtitle="Technical Expertise" />

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-secondary/20 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-accent-cyan/20 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-accent-cyan pl-4">
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-text-muted font-medium text-sm">{skill.name}</span>
                                            <span className="text-text-muted/60 text-xs">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-dark rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
