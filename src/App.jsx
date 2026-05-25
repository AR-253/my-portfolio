import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRoutes from './routes';
import './styles/global.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden selection:bg-primary selection:text-white">
            <AppRoutes />
        </div>
    );
}

export default App;
