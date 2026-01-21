import React from 'react';
import { ExternalLink } from 'lucide-react';

// Import images
import flexyImg from '../assets/images/flexy-dashboard.jpg';
import weldorkImg from '../assets/images/weldork.jpg';
import kaabaImg from '../assets/images/kaaba-guide.jpg';
import fitnessImg from '../assets/images/fitness-center.jpg';
import feaneImg from '../assets/images/feane-food.jpg';
import springImg from '../assets/images/spring-church.jpg';
import cheferImg from '../assets/images/chefer-restaurant.jpg';
import freshCartImg from '../assets/images/fresh-cart.jpg';
import medicioImg from '../assets/images/medicio.jpg';

const projects = [
    {
        title: 'Flexy Dashboard',
        category: 'Admin Panel',
        image: flexyImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/sales.html', github: '#' }
    },
    {
        title: 'Weldork Agency',
        category: 'Corporate Website',
        image: weldorkImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/weldork.html', github: '#' }
    },
    {
        title: 'KaabaGuide',
        category: 'Islamic Resource',
        image: kaabaImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/islamic portal.html', github: '#' }
    },
    {
        title: 'Fitness Center',
        category: 'Health & Fitness',
        image: fitnessImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/gym.html', github: '#' }
    },
    {
        title: 'Feane Food',
        category: 'Restaurant App',
        image: feaneImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/resturant.html', github: '#' }
    },
    {
        title: 'Spring Church',
        category: 'Community Site',
        image: springImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/asif bhai templete.html', github: '#' }
    },
    {
        title: 'Chefer Restaurant',
        category: 'Culinary Portfolio',
        image: cheferImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/foodtest.html', github: '#' }
    },
    {
        title: 'FreshCart',
        category: 'E-Commerce',
        image: freshCartImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/fresh carttest2.html', github: '#' }
    },
    {
        title: 'Medicio',
        category: 'Healthcare',
        image: medicioImg,
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: { demo: '/projects/learning-practice/bio medical.html', github: '#' }
    }
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    return (
        <section id="projects" className="min-h-screen py-20 px-6 bg-black/40">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" data-aos="fade-up">
                    FEATURED <span className="text-accent neon-text">WORK</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden h-64 md:h-80 cursor-pointer border border-white/5 hover:border-primary/50 transition-colors"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-accent text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-300 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    Click to view details
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative max-w-5xl w-full bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        onClick={e => e.stopPropagation()}
                        data-aos="zoom-in"
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors"
                        >
                            ✕
                        </button>

                        <div className="grid md:grid-cols-2 max-h-[80vh] overflow-y-auto">
                            <div className="h-64 md:h-auto bg-black">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-contain md:object-cover"
                                />
                            </div>
                            <div className="p-8 flex flex-col">
                                <span className="text-accent text-sm font-medium tracking-wider mb-2">{selectedProject.category}</span>
                                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    This is a showcase of the {selectedProject.title} project.
                                    It demonstrates high-quality UI/UX design and modern web development practices.
                                    (You can add more specific descriptions for each project here).
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto flex gap-4">
                                    <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-primary text-white text-center rounded-xl font-bold hover:bg-primary/80 transition-colors flex items-center justify-center gap-2">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
