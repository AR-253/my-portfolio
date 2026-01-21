import React, { useState } from 'react';
import { Send, Linkedin, CheckCircle, Loader2 } from 'lucide-react';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            await fetch("https://formsubmit.co/ajax/alirazachaudhary143@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            setShowSuccess(true);
            e.target.reset();
            setTimeout(() => setShowSuccess(false), 5000); // Auto hide after 5 seconds
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { Icon: Linkedin, href: "https://www.linkedin.com/in/ali-raza-69a776280", color: "hover:bg-[#0077b5]" },
        { Icon: SiUpwork, href: "https://www.upwork.com/freelancers/~01e3834b235d619456?mp_source=share", color: "hover:bg-[#14a800]" }, // Upwork Green
        { Icon: SiFiverr, href: "https://www.fiverr.com/s/vvjppxL", color: "hover:bg-[#1dbf73]" }  // Fiverr Green
    ];

    return (
        <section id="contact" className="min-h-screen py-20 px-6 flex items-center justify-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm relative">

                {/* Success Popup */}
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-3xl"
                        >
                            <div className="bg-[#0f172a] p-8 rounded-2xl border border-primary/50 text-center shadow-2xl max-w-sm mx-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle size={40} className="text-green-500" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400 mb-6">Thanks for reaching out! I'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full font-bold text-white hover:opacity-90 transition-opacity"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Contact Info */}
                <div data-aos="fade-right">
                    <h2 className="text-4xl font-bold mb-6">
                        Let's <span className="text-primary neon-text">Connect</span>
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new ideas and opportunities.
                    </p>

                    <div className="flex gap-4 mb-12">
                        {socialLinks.map(({ Icon, href, color }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 ${color}`}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    <div className="space-y-4 text-gray-300">
                        <p className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Available for Freelance
                        </p>
                        <p>alirazachaudhary143@gmail.com</p>
                        <p>+92 3114337890</p>
                    </div>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    data-aos="fade-left"
                >
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            disabled={isSubmitting}
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 disabled:opacity-50"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            disabled={isSubmitting}
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 disabled:opacity-50"
                        />
                    </div>
                    <div className="relative">
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Message"
                            required
                            disabled={isSubmitting}
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 resize-none disabled:opacity-50"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-primary to-accent rounded-xl font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={18} className="animate-spin" /> Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
