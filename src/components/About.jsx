import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile_v3.jpg';

const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'Bootstrap 5', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'UI/UX Design', level: 80 },
];

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-black/40 relative">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div data-aos="fade-right">
                    {/* Profile Image */}
                    <div className="mb-8 relative inline-block group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <img
                            src={profileImg}
                            alt="Ali Raza"
                            className="relative w-48 h-48 rounded-full object-cover object-top border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-white">ABOUT</span> <span className="text-primary neon-text">ME</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I am a passionate developer with a knack for creating immersive digital experiences.
                        My work bridges the gap between functional engineering and visual storytelling.
                        I specialize in building performant, responsive, and accessible web applications
                        that look like they came from the future.
                    </p>
                    <a
                        href="/assets/resume/Ali_Raza_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-white/5 border border-primary/50 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        View Resume
                    </a>
                </div>

                {/* Skills */}
                <div id="skills" className="glass p-8 rounded-3xl" data-aos="fade-left">
                    <h3 className="text-2xl font-bold mb-8 text-white">My Skills</h3>
                    <div className="flex flex-col gap-6">
                        {skills.map((skill, index) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-300 font-medium">{skill.name}</span>
                                    <span className="text-primary">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, delay: index * 0.2 }}
                                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
