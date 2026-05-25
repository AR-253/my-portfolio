import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
            </div>

            <div className="z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-block"
                >
                    <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider">
                        AVAILABLE FOR HIRE
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter"
                >
                    <span className="text-white">BUILDING THE</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent neon-text">
                        DIGITAL UNIVERSE
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    I craft immersive, high-performance web experiences using cutting-edge technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity" />
                    </a>

                    <a href="#contact" className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-white text-center min-w-[160px]">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[10%] opacity-20 hidden md:block"
            >
                <Code size={48} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-[10%] opacity-20 hidden md:block"
            >
                <Database size={48} />
            </motion.div>
        </section>
    );
};

export default Hero;
