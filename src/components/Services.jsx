import React from 'react';
import { Palette, Code, Terminal, Smartphone } from 'lucide-react';

const services = [
    {
        icon: <Palette size={40} />,
        title: 'UI/UX Design',
        description: 'Crafting visually stunning and intuitive interfaces that users love.'
    },
    {
        icon: <Code size={40} />,
        title: 'Web Development',
        description: 'Building robust, scalable, and high-performance web applications.'
    },
    {
        icon: <Smartphone size={40} />,
        title: 'Mobile First',
        description: 'Ensuring your site looks perfect on every device, from mobile to desktop.'
    },
    {
        icon: <Terminal size={40} />,
        title: 'Backend Systems',
        description: 'Developing secure and efficient APIs and server-side logic.'
    }
];

const Services = () => {
    return (
        <section id="services" className="min-h-screen py-20 px-6 flex flex-col justify-center relative">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" data-aos="fade-up">
                    MY <span className="text-secondary neon-text">SERVICES</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
