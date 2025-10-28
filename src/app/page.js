"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Page() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh(); // sahifa load bo‘lgandan keyin ham animatsiya ishlashini ta’minlaydi
    }, []);

    return (
        <main className={`relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0b0a0d] to-[#16121a] text-white overflow-hidden px-6 sm:px-10 md:px-16 ${manrope.className}`}>
            {/* Asosiy kontent */}
            <div className="max-w-2xl justify-center items-center text-center md:text-start z-10" data-aos="fade-up">
                {/* Logo */}
                <div className="text-2xl font-light flex items-center justify-center">
                    <svg width="219" height="53" viewBox="0 0 219 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG paths */}
                    </svg>
                </div>

                {/* Matnlar qismi */}
                <div className="mt-16 md:-mx-24" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-2xl sm:text-3xl font-light mb-2">
                        Start <span className="font-semibold">Smart.</span> Move{" "}
                        <span className="font-semibold">Fast.</span>
                    </p>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4">
                        Work like a <span className="font-bold">Human.</span>
                    </h2>

                    <p className="text-sm sm:text-base text-white leading-relaxed w-full md:w-5/7 mb-8 px-2 md:px-0">
                        Pocket Boss helps founders and scrappy teams stay sharp, communicate
                        clearly, and build like beasts—without bloated tools or AI that
                        thinks it’s your boss.
                    </p>

                    <button className="bg-white text-black text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4 rounded-sm hover:bg-gray-200 transition">
                        Join the waitlist
                    </button>
                </div>
            </div>
        </main>
    );
}
